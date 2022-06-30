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

    try {
        const methodCalls = extendedMethods.map((m) => {
            const name = camel(m.name);
            const params = m.uriParams.slice(0).map((p) => ({ paramType: "string", ...p  }));
            const siteSpecific = m.uriParams.some((p) => p.name === "site-id");

            
            // response and request types
            // const rqstType = m.requestBodyType ? m.requestBodyType.substr(0,1).toUpperCase()    
            // + m.requestBodyType.substr(1) + "Request" : "";
            // const rspType = m.responseBodyType ? m.responseBodyType.substr(0,1).toUpperCase()    
            // + m.responseBodyType.substr(1) + "Response" : "";

            const rqstType = requestMap[m.requestBodyType] ?? (m.requestBodyType ? m.requestBodyType.substr(0,1).toUpperCase() + m.requestBodyType.substr(1) + "Request" : "");
            const rspType = responseMap[m.responseBodyType] ?? (m.responseBodyType ? m.responseBodyType.substr(0,1).toUpperCase() + m.responseBodyType.substr(1) + "Response" : "");

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


            const signatureWrappedParamsArray = [
                ...Object.keys(signatureParams.path)
                    .filter((k) => k !== "siteId")
                    .map((k) => signatureParams.path[k]),
                ...Object.keys(signatureParams.body).map((k) => signatureParams.body[k]),
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
                    .filter((k) => k !== "siteId")
                    .map((k) => signatureParams.path[k].name),
                ...Object.keys(signatureParams.body).map((k) => signatureParams.body[k].name),
                ...(Object.keys(signatureParams.query).length ? ["queryOptions"] : []),
                "client"
            ].join(", ");

            const signatureWrappedTS = [
                ...Object.keys(signatureParams.path).filter((k) => k !== "siteId").map((k) => `${signatureParams.path[k].name}: ${signatureParams.path[k].paramType}`),
                ...Object.keys(signatureParams.body).map((k) => `${signatureParams.body[k].name}: ${signatureParams.body[k].paramType}`),
                ...(Object.keys(signatureParams.query).length ? [`queryOptions?: { ${Object.keys(signatureParams.query).map(q => signatureParams.query[q].qsKey).join(", ")} }`] : []),
                "client?: ClientLite"
            ].join(", ");

            const pathParameterValidation = Object.keys(signatureParams.path)
                .map(k => signatureParams.path[k].name)    
                .map(k => `\tif(!${k}) return Promise.reject(new MissingPathParameterException("${k}"));`)
                .join("\n")

            const commentsWrapped = [];
            commentsWrapped.push("/**");
            commentsWrapped.push(` * ${m.desc[0]}`);
            commentsWrapped.push(
                ...signatureWrappedParamsArray
                .map((p) => ({ ...p, paramType: p.optional ? p.paramType+"=" : p.paramType, name: p.optional ? `${camel(p.name)}` : camel(p.name) }))
                .map((p) => ` * @param {${p.paramType}} ${p.name} ${p.desc}`)
            );
            commentsWrapped.push(` * @returns {Promise<${rspType || "any"}>} Promise | undefined`);
            commentsWrapped.push(" */");


            const httpMethod = m.method.toLowerCase() === "delete" ? "del" : m.method.toLowerCase();
            const requestType =
                (m.name === "Sign In" || m.name === "Switch Site") ? "AuthenticationRequest" : "AuthenticatedRequest";


            // file handling
            // we need to use the correct parameter name for our uploaded content
            // that can be tableau_file for multi upload, tableau_workbook, tableau_datasource, tableau_flow
            // or site_logo for an updated site logo
            const fileParameterNameMatch = m.requestBody.match(
                /name="(tableau\_file|tableau_workbook|tableau\_datasource|tableau\_flow|site\_logo)"/
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
                    commentsWrapped.join("\n")+
`
export function ${m.extendedMethodName ?? m.methodName}(${signatureWrappedJS}) {
    const minVersion = "${m.version}";
    const { url = DEFAULT_URL, apiVersion = DEFAULT_VERSION, siteId, token, execute } = (client ?? this ?? {});
    if (!execute) return Promise.reject(new ExecutiveException());
    if (failsVersionCheck(apiVersion, minVersion)) return Promise.reject(new VersionException(apiVersion, minVersion));
${pathParameterValidation}  
    return execute(
        TableauRestRequest.forServer(url)
            .withMethod(http.${httpMethod.toUpperCase()})
            .withPath(\`${m.uri}\`)
`
+(m.requestContentType != "application/json" ? `            .withHeaders({"Content-Type":"${m.requestContentType}"})\n` : "")
+(Object.keys(signatureParams.query).length ? `            .withQueryParameters(queryOptions)\n` : "")
+(bodyParams.length > 0 ? bodyParams.map(bp => `            .withBodyParameters(${bp.name})\n`) : "")
+(params.some((p) => p.name === "file" && p.type === "body") ? `            .withFileParameters({ name: "${fileParameterName}", file: file })\n` : "") 
+(requestType !== "AuthenticationRequest" ? `            .withAuthenticationToken(token)\n` : "") + 
`            .build()
        );
}
`,
                functionTS: 
                    commentsWrapped.join("\n") +
`
export function ${m.extendedMethodName ?? m.methodName}(${signatureWrappedTS}) : Promise<${rspType}>;
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
       '/**\n'+typeDefs.map(t=> `    * @typedef {import("${t.file}").${t.type}} ${t.type}`).join("\n")+'\n    */\n' +
       methodCalls.map((m) => m.unifiedCallJS).join("\n\n\t") +
       UNIFIED_FOOTER;

        utils.writeToFile(path.join(outDirectory, "api-unified.js"), unifiedCallsText);

        // output one full file for api listing
       const readmeOutput =
            Object.keys(areas).map(k => `### ${k} Calls\n\n\`\`\`js\n` + areas[k].map((m) => `${m.unifiedSignature}`).join("\n") + "\n```").join("\n\n");
        utils.writeToFile(path.join(outDirectory, "api-listing.md"), readmeOutput);

        // output a file per area
        // for (let a in areas) {
        //     const area_name = camel(a.replace(/\,/g, ""));
        //     const apiAreaText = headerText + areas[a].map(m => m.unifiedCallJS).join("\n\n");
        //     utils.writeToFile(path.join(outDirectory, `api-${area_name}.js`), apiAreaText);
        // }

        // output our re-export
        const reexportText =
            headerText +
            Object.keys(baseMethods)
                .sort((a,b) => String(a).localeCompare(String(b)))
                .map((m) => `export { ${baseMethods[m].map(n => n.extendedMethodName ?? n.methodName).join(", ")} } from './_${m}';`)
                .join("\n");
        utils.writeToFile(path.join(outMethodDirectory, "index.js"), reexportText);

        //output a file per method
        for (let bm in baseMethods) {

            const methods = baseMethods[bm];
            const requests = _.uniq(methods.filter(m => !!m.requestTypeJS).map(m => m.requestTypeJS));
            const responses = _.uniq(methods.filter(m => !!m.responseTypeJS).map(m => m.responseTypeJS));
            const imports = _.uniq([ ...requests, ...responses ]);

            const methodText = headerText 
                + FILE_PER_METHOD_HEADER 
                + (imports.length ? ("/**\n"
                + imports.map(i => ` * @typedef {import("./rest-api-types.d.ts").${i}} ${i}`).join("\n")
                + "\n */\n\n") : "")
                + baseMethods[bm].map(m => m.unifiedCallJS).join("\n\n");
            utils.writeToFile(path.join(outMethodDirectory, `_${baseMethods[bm][0].methodName}.js`), methodText);

            const typesText = headerText 
                + "\n"
                + baseMethods[bm].map(m => m.functionTS).join("\n");
                + "\n"
            utils.writeToFile(path.join(outMethodDirectory, `_${baseMethods[bm][0].methodName}.d.ts`), typesText);

        }


    } catch (ex) {
        throw ex;
    }
}

const FILE_PER_METHOD_HEADER = `
import { DEFAULT_URL, DEFAULT_VERSION } from 'tabbycat/defaults';
import { TableauRestRequest } from 'tabbycat/request';
import { VersionException, MissingPathParameterException } from 'tabbycat/exceptions';
import { failsVersionCheck } from 'tabbycat/utils';
import * as http from 'tabbycat/httpMethods';

`

const UNIFIED_HEADER = `
import { DEFAULT_URL, DEFAULT_VERSION } from './defaults';
import { TableauRestRequest } from './request';
import { get, post, put, del } from './execute';

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
