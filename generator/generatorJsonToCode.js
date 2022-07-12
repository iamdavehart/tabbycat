const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const utils = require("./utils");
const { uniqWith } = require("lodash");
const camel = utils.camel;

function generateCodeFromJson(config) {
    const extendedMethods = require("./out/rest-api-doc.json");
    const outDirectory = config ? config.outputDirectory || "./generator/out" : "./generator/out";
    const outMethodDirectory = path.join(outDirectory, "/", "methods");
    utils.ensureDir(outDirectory);
    utils.ensureDir(outMethodDirectory);
    
    const typeDefinitions = require("./out/rest-api-types.json");
    const requestMap = typeDefinitions?.requestMap ?? {};
    const responseMap = typeDefinitions?.responseMap ?? {};
    Object.assign(responseMap, typeDefinitions?.paginatedResponseMap);

    try {
        const methodCalls = extendedMethods.map((m) => {
            const name = camel(m.name);
            const params = m.uriParams.slice(0).map((p) => ({ paramType: "string", ...p  }));
            const siteSpecific = m.uriParams.some((p) => p.name === "site-id" || p.name === "site-luid");

            
            // response and request types
            // const rqstType = m.requestBodyType ? m.requestBodyType.substr(0,1).toUpperCase()    
            // + m.requestBodyType.substr(1) + "Request" : "";
            // const rspType = m.responseBodyType ? m.responseBodyType.substr(0,1).toUpperCase()    
            // + m.responseBodyType.substr(1) + "Response" : "";

            const firstLetterUp = (t) => t.substring(0,1).toUpperCase()+t.substring(1);
            let rqstType = requestMap[m.requestBodyType] ? (m.requestBodyType ? firstLetterUp(m.requestBodyType) + "Request" : "") : m.requestBodyType;
            let rspType = responseMap[m.responseBodyType] ? (m.responseBodyType ? firstLetterUp(m.responseBodyType) + "Response" : "") : m.responseBodyType;
            
            // if ((m.responseBodyType && !responseMap[m.responseBodyType]))
            //     console.log("response", m.methodName, m.responseBodyType)
            // if ((m.requestBodyType && !requestMap[m.requestBodyType]))
            //     console.log("request", m.methodName, m.requestBodyType)

            if (m.requestBodyType) {
                params.push({
                    name: m.requestBodyType,
                    desc: m.requestBodyType,
                    type: "body",
                    paramType: rqstType,
                });
            }

            if (m.requestContentType.indexOf("multipart") > -1) {
                params.push({
                    name: "file",
                    desc: "File Contents",
                    type: "body",
                    paramType: "Object",
                });
            }

            if (m.name != "Sign In") {
                params.push({
                    name: "token",
                    desc: "security token",
                    type: "option",
                    paramType: "string",
                });
            }

            params.push({
                name: "http",
                desc: "optional http manager to process the function",
                default: "defaultOptions",
                type: "option",
                paramType: "Function",
                required: false,
            });

            const signatureParams = params
                .map((p) => ({
                    ...p,
                    name: camel(p.name),
                    type: p.name === "api-version" ? "option" : p.type || "other",
                }))
                .reduce(
                    (a, p) => {
                        if (!a.hasOwnProperty(p.type)) {
                            a[p.type] = {};
                        }
                        a[p.type] = { ...a[p.type], [p.name]: p };
                        return a;
                    },
                    {
                        path: {},
                        body: {},
                        query: {},
                        option: {},
                    }
                );

            if (signatureParams.hasOwnProperty("other")) {
                console.log(signatureParams);
            }

            // we have a strange exception with specific site methods where the
            // site id will be passed in as a parameter not take from the clients "current" site
            const siteIdFilter = (k) => (k !== "siteId" && k !== "siteLuid") || m.extendedMethodName?.endsWith("SiteByID");

            const signatureWrappedParamsArray = [
                ...Object.keys(signatureParams.path)
                    .filter(siteIdFilter)
                    .map((k) => signatureParams.path[k]),
                ...Object.keys(signatureParams.body).filter(k => k.toLowerCase() !== "empty").map((k) => signatureParams.body[k]),
                ...(Object.keys(signatureParams.query).length
                    ? [
                          {
                              name: "queryOptions",
                              desc: "an object containing the query options for this request",
                              paramType: "Object", // name.substr(0, 1).toUpperCase() + name.substr(1) + "Options"
                              optional: false,
                          },
                          ...(Object.keys(signatureParams.query).map(k=>({ ...signatureParams.query[k], name: "queryOptions."+(signatureParams.query[k].qsKey || signatureParams.query[k].name) })))
                      ]
                    : [])
            ];

            const signatureWrappedJS = [
                ...Object.keys(signatureParams.path)
                    .filter(siteIdFilter)
                    .map((k) => signatureParams.path[k].name),
                ...Object.keys(signatureParams.body).filter(k => k.toLowerCase() !== "empty").map((k) => signatureParams.body[k].name),
                ...(Object.keys(signatureParams.query).length ? ["queryOptions"] : []),
                "client"
            ].join(", ");

            const signatureWrappedTS = [
                ...Object.keys(signatureParams.path).filter(siteIdFilter).map((k) => `${signatureParams.path[k].name}: ${signatureParams.path[k].paramType}`),
                ...Object.keys(signatureParams.body).filter(k => k.toLowerCase() !== "empty").map((k) => `${signatureParams.body[k].name}: ${signatureParams.body[k].paramType}`),
                ...(Object.keys(signatureParams.query).length ? [`queryOptions?: { ${Object.keys(signatureParams.query).map(q => signatureParams.query[q].qsKey + ": "+signatureParams.query[q].paramType ?? "any").join(", ")} }`] : []),
                "client?: ClientLite"
            ].join(", ");

            const pathParameterValidation = Object.keys(signatureParams.path)
                .map(k => signatureParams.path[k].name)    
                .map(k => `\tif (!${k}) return Promise.reject(new MissingPathParameterException("${k}"));`)
                .join("\n")

            const commentsWrapped = [];
            const commentString = utils.addLinebreaksToText(m.desc[0], 90).replace(/\n/g, "\n * ")
            commentsWrapped.push("/**");
            commentsWrapped.push(` * ${commentString}`);
            commentsWrapped.push(
                ...signatureWrappedParamsArray
                .map((p) => ({ ...p, paramType: p.optional ? p.paramType+"=" : p.paramType, name: p.optional ? `${camel(p.name)}` : camel(p.name) }))
                .map((p) => ` * @param {${p.paramType}} ${p.name} ${p.desc}`)
                .map((p) => utils.addLinebreaksToText(p, 90).replace(/\n/g, "\n * \t\t"))
            );
            commentsWrapped.push(` * @returns {Promise<${rspType ?? "any"}>} Promise | undefined`);
            commentsWrapped.push(" */");

            

            const httpMethod = m.method.toLowerCase();
            const requestType =
                (m.name === "Sign In" || m.name === "Switch Site") ? "AuthenticationRequest" : "AuthenticatedRequest";


            // file handling
            // we need to use the correct parameter name for our uploaded content
            // that can be tableau_file for multi upload, tableau_workbook, tableau_datasource, tableau_flow
            // or site_logo for an updated site logo
            const fileParameterNameMatch = m.requestBody.match(
                /name="(tableau\_file|tableau_workbook|tableau\_datasource|tableau\_flow|site\_logo|tableau\_user\_delete|tableau_user_import)"/
            );
            const fileParameterName = fileParameterNameMatch
                ? fileParameterNameMatch[1] || "file"
                : "";

            const bodyParams = Object.keys(signatureParams.body??{}).map((k) => signatureParams.body[k])


            return {
                ...m,
                requestTypeJS: rqstType,
                responseTypeJS: rspType,
                unifiedSignature: `// ${m.name}\n${name}(${signatureWrappedJS})`,
                unifiedCallJS:
                    commentsWrapped.filter(c => !c.startsWith(" * @")).join("\n")+
`
export function ${m.extendedMethodName ?? m.methodName}(${signatureWrappedJS}) {
    const minVersion = "${m.version}";
    const { url, version,${m.extendedMethodName?.endsWith("SiteByID") ? "" : " siteId,"} token, execute } = client ?? this ?? {};
    if (!execute) return Promise.reject(new MissingExecutiveException());${pathParameterValidation ? "\n"+pathParameterValidation : ""}  
    if (failsVersionCheck(version, minVersion)) return Promise.reject(new VersionException(version, minVersion));
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.${httpMethod.toUpperCase()})
            .withPath(\`${m.uri.replace("{apiVersion}","{version}").replace("{siteLuid}","{siteId}")}\`)
`
+(m.requestContentType != "application/json" ? `            .withHeaders({"Content-Type":"${m.requestContentType}"})\n` : "")
+(Object.keys(signatureParams.query).length ? `            .withQueryParameters(queryOptions)\n` : "")
+(bodyParams.length > 0 ? bodyParams.map(bp => `            .withBodyParameters(${bp.name === "empty" ? "{}" : bp.name})\n`).join("") : "")
+(params.some((p) => p.name === "file" && p.type === "body") ? `            .withFileParameters({ name: "${fileParameterName}", file: file })\n` : "") 
+(requestType !== "AuthenticationRequest" ? `            .withAuthenticationToken(token)\n` : "") + 
`            .build()
    );
}
`,
                functionTS: 
                    commentsWrapped.join("\n") +
`
export function ${m.extendedMethodName ?? m.methodName}(${signatureWrappedTS}) : Promise<${rspType||"any"}>;
`
            };
        });

        // reduce by area
        const areas = methodCalls.reduce((o, m) => {
            m.areas.forEach(a => {
                if (!o.hasOwnProperty(a)) { o[a] = []; }
                o[a].push(m);
            })
            return o;
        }, {});

        // reduce by base method name
        const baseMethods = methodCalls.reduce((o, m) => {
            if (!o.hasOwnProperty(m.methodName)) { o[m.methodName] = []; }
            o[m.methodName].push(m);
            return o;
        }, {});
        
        // response and return types to import
        const typeDefs = _.concat(
                        _.uniq(methodCalls.filter(m => m.requestTypeJS).map(m=>m.requestTypeJS)).map(m=>({ file: "./api-wrapped", type: m })),
                        _.uniq(methodCalls.filter(m => m.responseTypeJS).map(m=>m.responseTypeJS)).map(m=>({ file: "./api-wrapped", type: m }))
                        );

        // construct our file headers
        const headerText = config.header.join("\n");

        // output a file of error documentation
        const apiErrorText =
            config.header.join("\n") +
            "\n\nexport const errorCodes = {\n" +
            methodCalls
                .filter((m) => m.errorCodes && m.errorCodes.length)
                .map((m) => camel(m.name) + ":" + JSON.stringify(m.errorCodes, null, 2))
                .join(",\n") +
            "}\n";

        utils.writeToFile(path.join(outDirectory, "api-errors.js"), apiErrorText);

       // output one full file for easier syntax checking
       const unifiedCallsText =
       headerText +
       UNIFIED_HEADER +
       "/**\n"+typeDefs.map(t=> `    * @typedef {import("${t.file}").${t.type}} ${t.type}`).join("\n")+"\n    */\n" +
       methodCalls.map((m) => m.unifiedCallJS).join("\n\n\t") +
       UNIFIED_FOOTER;

        utils.writeToFile(path.join(outDirectory, "api-unified.js"), unifiedCallsText);

        // output one full file for api listing
       const readmeOutput =
            Object.keys(areas).map(k => `### ${k} Calls\n\n\`\`\`js\n` + areas[k].map((m) => `${m.unifiedSignature}`).join("\n") + "\n```").join("\n\n");
        utils.writeToFile(path.join(outDirectory, "api-listing.md"), readmeOutput);

        // output a file per area
        for (let a in areas) {

            const methods = areas[a].filter(m => m.areas[0] === a);
            methods.sort((a,b) => String(a.extendedMethodName ?? a.methodName).localeCompare(String(b.extendedMethodName ?? b.methodName)))
            const requests = _.uniq(methods.filter(m => !!m.requestTypeJS).map(m => m.requestTypeJS));
            const responses = _.uniq(methods.filter(m => !!m.responseTypeJS).map(m => m.responseTypeJS));
            const imports = _.uniq([ ...requests, ...responses ]).filter(a => a.toLowerCase() !== "empty");

            const area_name = camel(a.replace(/\,/g, ""));
            const apiAreaText = headerText + FILE_PER_METHOD_HEADER + methods.map(m => m.unifiedCallJS).join("\n");
            utils.writeToFile(path.join(outMethodDirectory, `__${area_name}.js`), apiAreaText);

            const typesText = headerText 
            + `\nimport { ClientLite } from "tabbycat/client";\n`
            + imports.map(i => `import { ${i} } from "tabbycat/types";`).join("\n")
            + "\n\n"
            + methods.map(m => m.functionTS).join("\n");
            + "\n"
            utils.writeToFile(path.join(outMethodDirectory, `__${area_name}.d.ts`), typesText);

        }

        // output our re-export
        const reexportAreasText =
            headerText +
            Object.keys(areas)
                .sort((a,b) => String(a).localeCompare(String(b)))
                //.map((m) => `export { ${areas[m].map(n => n.extendedMethodName ?? n.methodName).join(", ")} } from "./__${camel(m.replace(/\,/g, ""))}";`)
                .map((m) => `export * from "./__${camel(m.replace(/\,/g, ""))}";`)
                .join("\n");
        const reexportText =
        headerText +
        Object.keys(baseMethods)
            .sort((a,b) => String(a).localeCompare(String(b)))
            .map((m) => `export { ${baseMethods[m].map(n => n.extendedMethodName ?? n.methodName).join(", ")} } from "./_${m}";`)
            .join("\n");
        const fullClientDef = methodCalls.map(m => `${m.extendedMethodName ?? m.methodName}`).sort().map(n => `${n}: ApiCalls["${n}"];`).join("\n");
        utils.writeToFile(path.join(outMethodDirectory, "index.js"), reexportAreasText);
        utils.writeToFile(path.join(outMethodDirectory, "clientDef.js"), fullClientDef);
        utils.writeToFile(path.join(outMethodDirectory, "indexMethods.js"), reexportText);

        //output a file per method
        for (let bm in baseMethods) {

            const methods = baseMethods[bm];
            const requests = _.uniq(methods.filter(m => !!m.requestTypeJS).map(m => m.requestTypeJS));
            const responses = _.uniq(methods.filter(m => !!m.responseTypeJS).map(m => m.responseTypeJS));
            const imports = _.uniq([ ...requests, ...responses ]).filter(a => a.toLowerCase() !== "empty");

            const methodText = headerText 
                + FILE_PER_METHOD_HEADER 
                + baseMethods[bm].map(m => m.unifiedCallJS).join("\n\n");
            utils.writeToFile(path.join(outMethodDirectory, `_${baseMethods[bm][0].methodName}.js`), methodText);

            const typesText = headerText 
                + `\nimport { ClientLite } from "tabbycat/client";\n`
                + imports.map(i => `import { ${i} } from "tabbycat/types";`).join("\n")
                + "\n\n"
                + baseMethods[bm].map(m => m.functionTS).join("\n");
                + "\n"
            utils.writeToFile(path.join(outMethodDirectory, `_${baseMethods[bm][0].methodName}.d.ts`), typesText);

        }


    } catch (ex) {
        throw ex;
    }
}

const FILE_PER_METHOD_HEADER = `
import { TableauRestRequest } from "tabbycat/request";
import { VersionException, MissingExecutiveException, MissingPathParameterException } from "tabbycat/exceptions";
import { failsVersionCheck } from "tabbycat/utils";
import * as http from "tabbycat/httpMethods";

`

const UNIFIED_HEADER = `
import { DEFAULT_URL, DEFAULT_VERSION } from "./defaults";
import { TableauRestRequest } from "./request";
import { get, post, put, del } from "./execute";

export class ApiCalls {
    constructor() { 
        this.baseURL = DEFAULT_URL;
        this.version = DEFAULT_VERSION;
        this.currentSiteId = "";
        this.authenticationHttp = { get: get, post: post, put: put, del: del };
        this.authenticatedHttp = { get: get, post: post, put: put, del: del };
    }
    getOptions() {
        return ({ url: this.baseURL, apiVersion: this.version, siteId: this.currentSiteId });
    }
`

const UNIFIED_FOOTER = `
}
`

module.exports.generateCodeFromJson = generateCodeFromJson;
