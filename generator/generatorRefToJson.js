const fs = require("fs");
const cheerio = require("cheerio");
const utils = require("./utils");
const { over } = require("lodash");
const camel = utils.camel;

function generateReferenceIntermediate(config) {
    try {
        // check our config
        const linkReplacements = config && config.reference ? config.reference.linkReplacements || {} : {};
        const pathReplacements = config && config.reference ? config.reference.pathReplacements || {} : {};
        const overrides = config && config.reference ? config.reference.overrides || {} : {};

        // read the file in.
        // we're using a local file but you can pass a url here
        fs.readFile("./generator/reference/reference.html", (err, data) => {
            // check for errors on reading the file
            if (err) {
                throw err;
            }

            // parse into cheerio
            const $ = cheerio.load(data.toString(), {
                xmlMode: true,
                normalizeWhitespace: true,
            });

            // parse the index on the reference page to find all the methods
            // and get the link that it refers to later in the page
            let area = "";
            const allMethods = [];
            const table = $("table.api-error-table").first();
            $("tbody tr", $(table)).each((idx, el) => {
                if (idx === 0) {
                    return;
                }
                const areaNode = $(el).children().get(0);
                const tableauOnlineNode = $(el).children().get(2);
                const nameNode = $(el).children().get(1);
                const name = $(nameNode).text().trim();
                const link = $(nameNode).find("a").attr("href");
                const tableauOnline = $(tableauOnlineNode).text().trim().toUpperCase() == "YES";
                area = $(areaNode).text().trim() || area;
                allMethods.push({
                    index: idx,
                    area: area,
                    name: name,
                    methodName: camel(name),
                    link: link,
                    tableauOnline: tableauOnline,
                });
            });

            // the index has some duplicates so we will reduce it down.
            // the duplicates come from methods being in multiple areas
            const methods = Object.values(
                allMethods.reduce((a, m) => {
                    if (a.hasOwnProperty(m.name)) {
                        a[m.name].areas.push(m.area);
                    } else {
                        a[m.name] = { ...m, areas: [m.area] };
                    }
                    return a;
                }, {})
            );

            // now follow the links within cheerio and pull out the api information
            // from the reference data.
            const extendedMethods = methods
                .filter((m) => (linkReplacements[m.link] || m.link) != "skip")
                .map((m) => {
                    let linkSelector = linkReplacements[m.link] || m.link;
                    let link = $(`${linkSelector}`);
                    let descNode = link.nextUntil("div,h4");
                    let container = descNode.next("div");
                    if (container.length === 0) {
                        container = link.parent();
                    }
                    if (link.length === 0) {
                        const linkName = m.link.substr(1);
                        link = $(`a[name="${linkName}"]`);
                        descNode = link.parent().nextUntil("div,h4");
                        container = descNode.next("div");
                        if (container.length == 0) {
                            container = link.parent().parent();
                        }
                    }

                    // expand the description into an array
                    const desc = [];
                    descNode.each((i, e) => {
                        desc.push($(e).text().trim());
                    });

                    // find the sections based on their heading level
                    const sections = $("h4", container).toArray();

                    // uri
                    const uris = [];
                    const urls = [];
                    const uriNode = sections.find((s) => $(s).first().text() == "URI");
                    // usually the path node is immediately after the H4 URI
                    // but occasionally there's a containing paragraph that we need to
                    // process instead
                    let pathNode = $(uriNode).next();
                    if (!pathNode.hasClass("api-syntax")) {
                        pathNode = pathNode.find(".api-syntax").first();
                    }
                    // now we will keep going to find all URI path examples
                    // to make sure that we have go the proper querystring parameters
                    // out of the documentation
                    while (pathNode.length > 0) {
                        let queryString = false;
                        let urlText = pathNode.text().trim();
                        let urlQS =
                            urlText.indexOf("?") > -1
                                ? urlText
                                      .substr(urlText.indexOf("?") + 1)
                                      .split("&")
                                      .map((kv) => kv.split("="))
                                : [];

                        let pathContents = pathNode
                            .contents()
                            .map((idx, el) => {
                                let nodeText = $(el).text().trim();
                                if (nodeText.startsWith("=")) {
                                    nodeText = nodeText.substr(1);
                                }
                                const isPlaceholder =
                                    (el.tagName === "span" && $(el).hasClass("api-placeholder")) ||
                                    el.tagName === "i";
                                if (nodeText.indexOf("?") > -1) {
                                    queryString = true;
                                }

                                let qsKey = "";
                                if (isPlaceholder) {
                                    const qsFound = urlQS.find((u) => u[1] == nodeText);
                                    qsKey = qsFound ? qsFound[0] : "";
                                }

                                return {
                                    value: nodeText,
                                    text: isPlaceholder ? "${" + camel(nodeText) + "}" : nodeText,
                                    type: isPlaceholder ? (queryString ? "query" : "path") : "text",
                                    name: isPlaceholder ? nodeText : "",
                                    variable: isPlaceholder ? camel(nodeText) : "",
                                    qsKey: qsKey,
                                };
                            })
                            .toArray();

                        // there are a few exceptions so check our config for path replacements
                        // they are keyed on the link selector which was evaluated above
                        if (pathReplacements.hasOwnProperty(linkSelector)) {
                            pathReplacements[linkSelector].forEach((r) => {
                                const found = pathContents.find(
                                    (p) => p.type === r.type && p.value === r.value
                                );
                                if (found) {
                                    const foundIndex = pathContents.indexOf(found);
                                    pathContents.splice(
                                        foundIndex,
                                        1,
                                        ...r.replacements.map((rr) => ({
                                            text:
                                                rr.type != "text"
                                                    ? "${" + camel(rr.value) + "}"
                                                    : rr.value,
                                            name: rr.type != "text" ? rr.value : "",
                                            variable: rr.type != "text" ? camel(rr.value) : "",
                                            qsKey: "",
                                            ...rr,
                                        }))
                                    );
                                }
                            });
                        }

                        const fullUri = pathContents.map((c) => c.text).join("");
                        const fullUriSplit = fullUri.split(" ");
                        const method = fullUriSplit[0];
                        const url = fullUriSplit[1];
                        const uri =
                            url.indexOf("?") > -1 ? url.substring(0, url.indexOf("?")) : url;

                        // push every example into the urls
                        urlObj = {
                            method: method,
                            uri: uri,
                            url: url,
                            pathContents: pathContents,
                        };
                        urls.push(urlObj);

                        // if its a new uri add it to uris
                        if (!uris.find((u) => u.uri === uri)) {
                            uris.push(urlObj);
                        }

                        pathNode = pathNode.next(".api-syntax");
                    }

                    // uri parameters
                    const paramTypes = urls.reduce((a, u) => {
                        a.push(...u.pathContents);
                        return a;
                    }, []);
                    const uriParams = [];
                    const uriParamsNode = sections.find(
                        (s) =>
                            $(s).first().text() == "Parameter Values" ||
                            $(s).first().text() == "Path Parameter Values"
                    );
                    const uriParamsTableNode = $(uriParamsNode)
                        .next()
                        .find("table.api-parameters-table")
                        .first();

                    $("tbody tr", $(uriParamsTableNode)).each((i, e) => {
                        const nameCell = $(e).children().get(0);
                        const descCell = $(e).children().get(1);
                        const argumentElement = $(nameCell).children(".api-placeholder");
                        const name = $(argumentElement).text().trim() || $(nameCell).text().trim();
                        const type = paramTypes.find((c) => c.name == name);
                        if (name) {
                            const paramDesc = $(descCell).text().trim();
                            let paramType;
                            if (["pageNumber", "pageSize", "page-number", "page-size"].indexOf(name) > -1) {
                                paramType = "number";
                            } else if (name.startsWith("is") || name.startsWith("has")) {
                                paramType = "boolean";
                            } else if (
                                paramDesc.indexOf("boolean") > -1 ||
                                paramDesc.indexOf("true") > -1 ||
                                paramDesc.indexOf("false") > -1
                            ) {
                                paramType = "boolean";
                            } else if (paramDesc.indexOf("number") > -1) {
                                paramType = "number";
                            } else {
                                paramType = "string";
                            }

                            uriParams.push({
                                name: name,
                                desc: paramDesc,
                                type: type ? type.type : "unknown",
                                paramType: paramType,
                                qsKey: type ? type.qsKey : "",
                            });
                        }
                    });

                    // sometimes the uri parameters table is missing or incomplete
                    // or has typos in it so make sure that any we found in our list
                    // of parseing the URLs get included
                    paramTypes
                        .filter((p) => p.type == "query" || p.type == "path")
                        .forEach((p) => {
                            const existing = uriParams.find(
                                (u) => u.name.toLowerCase() === p.name.toLowerCase()
                            );
                            if (!existing) {
                                uriParams.push({
                                    name: p.name,
                                    desc: "<parameter documentation missing>",
                                    type: p.type,
                                    qsKey: "",
                                });
                            }
                        });

                    // request body
                    const bodyNode = sections.find(
                        (s) => $(s).first().text().indexOf("Request Body") > -1
                    );
                    const bodies = $(bodyNode).next().find("code");
                    let body;
                    bodies.each((i, e) => {
                        if ($(e).text().indexOf("tsRequest") > -1) {
                            body = $(e);
                            return false;
                        }
                    });
                    const requestBody = body ? body.text().trim() : "";

                    // request attributes
                    const attributes = [];
                    const attributesNode = sections.find(
                        (s) => $(s).first().text() == "Attribute Values"
                    );
                    const attributesTableNode = $(attributesNode)
                        .next()
                        .find("table.api-parameters-table")
                        .first();

                    $("tbody tr", $(attributesTableNode)).each((i, e) => {
                        const nameCell = $(e).children().get(0);
                        const descCell = $(e).children().get(1);
                        attributes.push({
                            name: $(nameCell).text().trim(),
                            desc: $(descCell).text().trim(),
                        });
                    });

                    // response body
                    const rbodyNode = sections.find((s) => $(s).first().text() == "Response Body");
                    const rbody = $(rbodyNode).next().find("code.xml").first();
                    const responseBody = rbody.text().trim();

                    // errors
                    const errors = [];
                    const errorNode = sections.find((s) => $(s).first().text() == "Errors");
                    const errorTableNode = $(errorNode)
                        .next()
                        .find("table.api-error-table")
                        .first();
                    $("tbody tr", $(errorTableNode)).each((i, e) => {
                        if (i === 0) {
                            return true;
                        }
                        const statusCell = $(e).children().get(0);
                        const codeCell = $(e).children().get(1);
                        const conditionCell = $(e).children().get(2);
                        const detailsCell = $(e).children().get(3);
                        errors.push({
                            status: $(statusCell).text().trim(),
                            code: $(codeCell).text().trim(),
                            condition: $(conditionCell).text().trim(),
                            details: $(detailsCell).text().trim(),
                        });
                    });

                    // version
                    const verNode = sections.find((s) => $(s).first().text() == "Version");
                    const verStr = $(verNode).next().text().trim();
                    const ver = verStr.match(/Version (\d.\d)/i);

                    // for the request and response body types
                    // we just need to know what element comes first underneath the tsResponse or tsRequest
                    // unless there's a pagination type. we can try to load the body type into an XML object but
                    // it won't always parse as there are some XML errors in the body documentation
                    let requestBodyType = "",
                        requestMultipart = false,
                        responseBodyType = "",
                        responsePaginated = false;
                    try {
                        const requestRE = /\<tsRequest\>\s*\<([^/].+?)[\s\>]/;
                        const responseRE = /\<tsResponse\>\s*\<([^/].+?)[\s\>]/;
                        const paginationBlockRE = /\<pagination.+?\/\>/;
                        const boundaryStringRE = /\-\-boundary\-string/;
                        if (requestBody) {
                            requestMultipart = boundaryStringRE.test(requestBody);
                            const isReqPaginated = paginationBlockRE.test(requestBody);
                            const reqBody = isReqPaginated
                                ? requestBody.replace(paginationBlockRE, "")
                                : requestBody;
                            requestBodyType =
                                reqBody && requestRE.test(reqBody)
                                    ? reqBody.match(requestRE)[1]
                                    : "";
                        }
                        if (responseBody) {
                            responsePaginated = paginationBlockRE.test(responseBody);
                            const rspBody = paginationBlockRE.test(responseBody)
                                ? responseBody.replace(paginationBlockRE, "")
                                : responseBody;
                            responseBodyType =
                                rspBody && responseRE.test(rspBody)
                                    ? rspBody.match(responseRE)[1]
                                    : "";
                        }
                    } catch (ex) {}

                    const methodOverrides = overrides[m.methodName] || {};
                    return {
                        ...m,
                        link: linkSelector,
                        desc: desc,
                        uri: uris.length > 0 ? uris[0].uri : "",
                        uris: uris.length > 1 ? uris.map((u) => u.uri) : [],
                        urls: urls.length > 1 ? urls.map((u) => u.url) : [],
                        method: uris.length > 0 ? uris[0].method : "",
                        uriParams: uriParams,
                        requestBody: requestBody,
                        requestBodyType: requestBodyType,
                        requestContentType: requestMultipart
                            ? "multipart/mixed"
                            : "application/json",
                        requestAttributes: attributes,
                        responseBody: responseBody,
                        responseBodyType: responseBodyType,
                        responsePaginated: responsePaginated,
                        errorCodes: errors,
                        version: ver && ver.length ? ver[1] : "",
                        ...methodOverrides,
                    };
                });

            // in the syntax examples we sometimes get just different examples of
            // query strings, but there are a few examples where we get different uris
            // as possibilities for one reference. really these should be extracted
            // to new methods as we are designing this as one method one uri
            // we will take the methods with multiple uris and split them out to their own
            // methods using a config file as a guide
            //  - e.g. sites
            //  - permissions
            //  - flows

            const urlToMethodMapping = config && config.reference ? config.reference.urlToMethodMapping || {} : {};
            const extraMethods = extendedMethods
                .filter((m) => m.uris && m.uris.length)
                .reduce((a, m) => {
                    const newMethods = m.uris.map((u, i) => {
                        // is there anything in the config to guide us
                        const cfg = urlToMethodMapping[m.link];
                        const cfgUri = cfg ? cfg[u] : null;

                        // find or create a new name
                        const newName = cfgUri || m.name + "_" + i.toString();
                        // filter the urls down to only those that match
                        const newUrls = m.urls.filter((url) => url.startsWith(u));
                        // remove path parameters that aren't in the uri
                        const newPathParams = u.match(/\$\{.+?\}/g) || [];
                        const newUriParams = m.uriParams.filter(
                            (up) =>
                                !(
                                    up.type == "path" &&
                                    newPathParams.indexOf("${" + camel(up.name) + "}") === -1
                                )
                        );
                        return {
                            ...m,
                            name: newName,
                            uri: u,
                            uris: [],
                            uriParams: newUriParams,
                            urls: newUrls,
                        };
                    });
                    a.push(...newMethods);
                    return a;
                }, []);

            const outputMethods = extendedMethods
                .concat(extraMethods)
                .sort((a, b) => a.index - b.index);

            // output our json extended help file
            // const help = extendedMethods
            //     .filter((m) => m.uris && m.uris.length)
            //     .reduce((h, e) => {
            //         const uObj = e.uris.reduce((o, u) => { o[u] = ""; return o; }, {})
            //         h[e.link]={ ...uObj };
            //         return h;
            //     }, {});

            // fs.writeFile(
            //     "./generator/out/rest-api-doc-extras.json",
            //     JSON.stringify(help, null, 2),
            //     {
            //         encoding: "utf8",
            //         flag: "w",
            //     },
            //     (err) => {
            //         if (err) console.log(err);
            //         else {
            //             console.log("rest-api-doc-extras.json written successfully");
            //         }
            //     }
            // );

            // output our json file
            fs.writeFile(
                "./generator/out/rest-api-doc.json",
                JSON.stringify(outputMethods, null, 2),
                {
                    encoding: "utf8",
                    flag: "w",
                },
                (err) => {
                    if (err) console.log(err);
                    else {
                        console.log("rest-api-doc.json written successfully");
                    }
                }
            );
        });
    } catch (ex) {
        throw ex;
    }
}

module.exports.generateReferenceIntermediate = generateReferenceIntermediate;
