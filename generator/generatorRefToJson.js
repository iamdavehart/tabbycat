const fs = require("fs");
const cheerio = require("cheerio");
const utils = require("./utils");
const { over, pick, values, isArray, isPlainObject, extend } = require("lodash");
const camel = utils.camel;
const stripAllWhitespace = utils.stripAllWhitespace;

function generateReferenceIntermediate(config) {
    try {
        // check our config
        const linkReplacements = config && config.reference ? config.reference.linkReplacements || {} : {};
        const pathReplacements = config && config.reference ? config.reference.pathReplacements || {} : {};
        const overrides = config && config.reference ? config.reference.overrides || {} : {};

        // read the file in.
        // we're using a local file but you can pass a url here
        fs.readFile("./generator/reference/reference_3.16.html", (err, data) => {
            if (err) throw err;

            // parse into cheerio
            const cheerioOpts = { xmlMode:true, normalizeWhitespace:true };
            const $ = cheerio.load(data.toString(), cheerioOpts);

            // extract the method index
            const allMethods = extractMethodIndexFromDocument($);
            const methods = deduplicateMethodsByArea(allMethods);

            // now follow the links within cheerio and pull out the api information
            // from the reference data.
            const linkReplacementCounts = {};
            const extendedMethods = methods
                .map((m) => {
                    let linkReplacement = linkReplacements[m.link];
                    if (isArray(linkReplacement)) {
                        if (!linkReplacementCounts.hasOwnProperty(m.link)) linkReplacementCounts[m.link] = 0;
                        linkReplacement = linkReplacement[linkReplacementCounts[m.link]];
                        linkReplacementCounts[m.link]++
                    }
                    let linkSelector = linkReplacement ?? m.link;
                    if (linkReplacement) {
                        m.methodName = camel(linkSelector.substring(1).replace(/\_/g," "));
                    }

                    let link = $(`${linkSelector}`);
                    let descNode = link.nextUntil("div:not(.note),h4,p.api-syntax");
                    let container = descNode.next("div");
                    if (container.length === 0) container = link.nextUntil("h2");
                    if (link.length === 0) {
                        // sometimes the link selector doesn't work but in those
                        // cases the link selector isn't the "id" of the h2 or similar element
                        // it's the name attribute of a link inside that element. Usually
                        // this is because of a case mismatch or similar, and so you can 
                        // avoid this by adding a link replacement in the config.
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
                        desc.push(stripAllWhitespace($(e).text().trim()));
                    });

                    // find the sections based on their heading level
                    let sections = $("h4", container).toArray();
                    sections.push(...container.filter("h4").toArray());

                    // uri
                    const uris = [];
                    const urls = [];
                    const uriNode = sections.find((s) => $(s).first().text() == "URI");
                    

                    
                    // usually the path node is immediately after the H4 URI
                    // but occasionally there's a containing paragraph that we need to
                    // process instead
                    let pathNode = $(uriNode).next();
                    // the uri node might not exist if there 
                    // are no sections so we'll look for it in the container list
                    if (!uriNode && sections.length === 0) {
                        pathNode = container.filter("p.api-syntax").first();
                    }
                    if (!pathNode.hasClass("api-syntax")) {
                        pathNode = pathNode.find(".api-syntax").first();
                        if (pathNode.length === 0) {
                            const searchPathNodes = $(uriNode).nextUntil("h4");
                            pathNode = searchPathNodes.filter(".api-syntax").first();
                        }
                    }

                    if (pathNode.length === 0) {
                        console.log(`No path node found for ${m.name}`);
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
                        const cleanedUri = uri.substring(0,3) === "api" ? "/"+uri : (
                            uri.substring(0,8) === "{server}" ? uri.substring(8) : uri
                        )
                        // push every example into the urls
                        urlObj = {
                            method: method,
                            uri: cleanedUri,
                            url: url,
                            pathContents: pathContents,
                        };

                        urls.push(urlObj);

                        // if its a new uri add it to uris
                        if (!uris.find((u) => u.uri === cleanedUri)) {
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
                                desc: stripAllWhitespace(paramDesc),
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
                                    qsKey: p.qsKey,
                                });
                            }
                        });

                    // request body
                    const bodyNode = sections.find(
                        (s) => $(s).first().text().indexOf("Request Body") > -1
                    );
                    const requestBodyNone = stripAllWhitespace($(bodyNode).next().text()).trim().toLowerCase() === "none" || $(bodyNode).length === 0;
                    let bodies = $(bodyNode).next().find("code");
                    if (bodyNode && bodies.length === 0) {
                        bodies = $(bodyNode).next().find("pre");
                        if (bodies.length === 0) {
                            bodies = $(bodyNode).next("pre");
                        }
                    }
                    let body;
                    bodies.each((i, e) => {
                        if ($(e).text().indexOf("tsRequest") > -1) {
                            body = $(e);
                            return false;
                        }
                    });
                    const requestBody = requestBodyNone ? "" : (body ? body.text().trim() : "");

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
                            desc: stripAllWhitespace($(descCell).text()).trim(),
                        });
                    });

                    // response code
                    const rcodeNode = sections.find(s => $(s).first().text() === "Response Code");
                    const respCode = stripAllWhitespace($(rcodeNode).next().text()).trim();

                    // response body
                    const rbodyNode = sections.find((s) => $(s).first().text() == "Response Body");
                    const rbodySection = $(rbodyNode).nextUntil("h4,h2");

                    const responseBodyNone = stripAllWhitespace($(rbodyNode).next().text()).trim().toLowerCase().substring(0,4) === "none";
                    let rbody = $(rbodySection).find("pre code").first();
                    if (!rbody.length) rbody = $(rbodySection).find("pre").first();
                    if (!rbody.length) rbody = $(rbodySection).filter("pre").first();
                    const responseBody = responseBodyNone ? "" : rbody.text().trim();

                    // jwt scopes - tableau online / connected app stuff
                    const jwtNode = sections.find(s => $(s).first().text().indexOf("JWT authorization") > -1);
                    const jwtSection = $(jwtNode).nextUntil("h4,h2");
                    const jwtScope = $(jwtSection).find("pre code").first().text().trim();


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
                            details: stripAllWhitespace($(detailsCell).text()).trim(),
                        });
                    });

                    // version
                    const verNode = sections.find((s) => $(s).first().text() == "Version");
                    const verStr = $(verNode).next().text().trim();
                    const ver = verStr.match(/Version (\d+.\d+)/i);

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
                        const responseRE = /\<(?:tsResponse|tsRequest).*?\>[\s\n]*\<([^/].+?)[\s\n\>]/m;
                        const paginationBlockRE = /\<pagination.+?\/\>/s;
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
                                    : (requestBody === "None" ? "None" : "");
                        }
                        if (responseBody) {
                            responsePaginated = paginationBlockRE.test(responseBody);
                            const rspBody = paginationBlockRE.test(responseBody)
                                ? responseBody.replace(paginationBlockRE, "")
                                : responseBody;
                            responseBodyType =
                                rspBody && responseRE.test(rspBody)
                                    ? rspBody.match(responseRE)[1]
                                    : (responseBody === "None" ? "None" : "");
                        }
                    } catch (ex) {}

                    const methodOverrides = overrides[m.methodName] || {};
                    const endpointType = uris?.[0]?.uri?.indexOf("api/-/") > -1 ? "perResourceVersion" : "classic";
                    return {
                        ...m,
                        link: linkSelector,
                        desc: desc,
                        endpointType,
                        uri: uris.length > 0 ? uris[0].uri : "",
                        uris: uris.length > 1 ? uris.map((u) => u.uri) : [],
                        urls: urls.length > 1 ? urls.map((u) => u.url) : [],
                        method: uris.length > 0 ? uris[0].method : "",
                        uriParams: uriParams,
                        requestBodyExpected: !requestBodyNone,
                        requestBody: requestBody,
                        requestBodyType: requestBodyType,
                        requestContentType: requestMultipart
                            ? "multipart/mixed"
                            : "application/json",
                        requestAttributes: attributes,
                        responseBodyExpected: !responseBodyNone,
                        responseBody: responseBody,
                        responseBodyType: responseBodyType,
                        responseCode: respCode,
                        responsePaginated: responsePaginated,
                        errorCodes: errors,
                        versionNote: verStr,
                        version: endpointType === "perResourceVersion" ? "2020.2" : (ver && ver.length ? ver[1] : ""),
                        jwtScope,
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
                        const newName = (isPlainObject(cfgUri) && cfgUri.hasOwnProperty("name") ? cfgUri.name : cfgUri) || m.name + "_" + i.toString();
                        // find or create a new uri
                        const newUri = (isPlainObject(cfgUri) && cfgUri.hasOwnProperty("uri") ? cfgUri.uri : u) || u;
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
                            extendedMethodName: camel(newName),
                            uri: newUri,
                            uris: [],
                            uriParams: newUriParams,
                            urls: newUrls,
                        };
                    });
                    a.push(...newMethods);
                    return a;
                }, []);


            // some of the newer methods are now in open api specs, so we'll 
            // pull those in from swagger.json
            let swaggerIndex = 10000;
            const swaggerMethods = [];
            const swagger = require('./reference/swagger.json');
            const paths = Object.keys(swagger.paths);
            paths.forEach(path => {
                const pathObj = swagger.paths[path];
                const pathMethods = Object.keys(pathObj);
                pathMethods.forEach(pathMethod => {
                    const methodObj = pathObj[pathMethod];
                    const methodName = methodObj.operationId.split("_").reverse()[0];
                    const methodRequestContentType = methodObj.requestBody?.content ? Object.keys(methodObj.requestBody?.content)[0] : "application/json";
                    const methodRequestType = (methodObj.requestBody?.content?.[methodRequestContentType]?.schema?.["$ref"] ?? "").replace("#/components/schemas/","");       
                    const methodResponseCode = Object.keys(methodObj.responses).map(k => Number(k)).filter(k => k<400).sort()[0];
                    const methodResponseObj = methodObj.responses[`${methodResponseCode}`]?.content;
                    const methodResponseContentType = methodResponseObj ? Object.keys(methodResponseObj)[0] : "application/json";
                    const methodResponseType = (methodResponseObj ? methodResponseObj[methodResponseContentType]?.schema?.["$ref"] ?? "" : "").replace("#/components/schemas/","");
                                        
                    swaggerMethods.push({
                        area: methodObj.tags?.[0],
                        name: methodObj.summary,
                        endpointType: "perResourceVersion",
                        methodName: camel(methodName),
                        description: methodObj.summary,
                        desc: methodObj.description.split("\n"),
                        areas: methodObj.tags,
                        originalUri: path,
                        uri: path.replace(/\{/g,"${"),
                        uriParams: methodObj.parameters.filter(prm => prm.in === "path" || prm.in === "query").map(prm => ({ name: prm.name, desc: prm.description, type: prm.in, paramType: prm.schema?.type, qsKey: prm.in === "query" ? prm.name : "" })),
                        method: pathMethod.toUpperCase(),
                        requestBodyExpected: !!methodRequestType,
                        requestBody: "",
                        requestBodyNamespace: methodRequestType ? methodRequestType.substring(0, String(methodRequestType).lastIndexOf(".")) : "",
                        requestBodyType: methodRequestType ? methodRequestType.split(".").pop() : "",
                        requestContentType: methodRequestContentType,
//                        requestAttributes: [],
                        responseBodyExpected: !!methodResponseType,
                        responseBody: "",
                        responseBodyNamespace: methodResponseType ? methodResponseType.substring(0, String(methodResponseType).lastIndexOf(".")) : "",
                        responseBodyType: methodResponseType ? methodResponseType.split(".").pop() : "",
                        responseContentType: methodResponseContentType,
                        responseCode: methodResponseCode,
//                        responsePaginated: false,
 //                       errorCodes: [],
                        version: "2020.2"                         
                     })
                     swaggerIndex++;
                });
            })

            swaggerMethods.forEach(s => {
                const found = extendedMethods.find(m => m.uri === s.originalUri && m.method === s.method);
                if (found) {
                    delete s["originalUri"];
                    Object.assign(found, s)
                } else {
                    s.index = swaggerIndex;
                    swaggerIndex++;
                    extraMethods.push(s);
                }
            })

            const outputMethods = extendedMethods
                .filter(m => !m.uris || m.uris.length === 0)
                .concat(extraMethods)
                .sort((a, b) => a.index - b.index);

            
            const outputOpts = { encoding: "utf8", flag: "w" };
            
            // output a csv to give us a spreadsheet overview of the work
            const csvColumns = outputMethods.map(o => values(pick(o, [ "index", "area", "name", "methodName", "description", "method", "uri", "requestBodyExpected", "requestBodyType", "responseBodyExpected", "responseBodyType", "version" ])));
            const csvOutput = csvColumns.map(c => c.map(q => `"${q}"`).join(",")).join("\r\n");
            fs.writeFile("./generator/out/rest-api-doc.csv", csvOutput, outputOpts, (err) => {
                if (err) console.log(err);
                else {
                    console.log("rest-api-doc.csv written successfully");
                }
            });               

            // output our json file
            const outputText = JSON.stringify(outputMethods, null, 2);
            fs.writeFile(
                "./generator/out/rest-api-doc.json",
                outputText,
                outputOpts,
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


// parse the index on the reference page to find all the methods
// and get the link that it refers to later in the page
function extractMethodIndexFromDocument($) {
    let methodIndex = 0;
    const allMethods = [];
    const areas = $("#all_methods_dropdown_menu_list div[is='accordion-item']");
    $(areas).each((areaIdx, areaEl) => {
        const areaNode = $(areaEl).children().get(0);
        const area = $(areaNode).text().replace(/[<>]/g, "").trim();
        const tables = $("table.api-error-table", $(areaEl));
        $(tables).each((idx, table) => {
            $("tbody tr", $(table)).each((idx, el) => {
                const nameNode = $(el).children().get(0);
                const nameLinkNode = $(nameNode).children().get(0);
                const name = $(nameLinkNode).text().trim();
                const fullLink = $(nameLinkNode).attr("href");
                const link = fullLink.split("#").reverse()[0];
                const descNode = $(el).children().get(1);
                const desc = $(descNode).text().trim();
                const methodName = link.replace(/\_/g, " ");
                const notTableauOnline = $(nameNode).text().toLowerCase().trim().includes("not available for tableau online");
                allMethods.push({
                    index: methodIndex,
                    area: area,
                    name: name,
                    methodName: camel(methodName),
                    description: desc,
                    fullLink: fullLink,
                    link: "#" + link,
                    tableauOnline: !notTableauOnline,
                });
                methodIndex++;
            });
        });
    });
    return allMethods;
}

function deduplicateMethodsByArea(allMethods) {
    return Object.values(
        allMethods.reduce((a, m) => {
            if (a.hasOwnProperty(m.name)) {
                a[m.name].areas.push(m.area);
            } else {
                a[m.name] = { ...m, areas: [m.area] };
            }
            return a;
        }, {})
    );
}

