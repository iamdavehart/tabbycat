const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const config = require("./generator.config.json");
const extendedMethods = require("./out/rest-api-doc.json");
const utils = require("./utils");
const { uniqWith } = require("lodash");
const camel = utils.camel;

function generateCodeFromJson(config) {
    const outDirectory = config ? config.outputDirectory || "./generator/out" : "./generator/out";
    utils.ensureDir(outDirectory);

    try {
        const methodCalls = extendedMethods.map((m) => {
            const name = camel(m.name);
            const params = m.uriParams.slice(0).map((p) => ({ paramType: "string", ...p  }));
            const siteSpecific = m.uriParams.some((p) => p.name === "site-id");

            
            // response and request types
            const rqstType = m.requestBodyType ? m.requestBodyType.substr(0,1).toUpperCase()    
            + m.requestBodyType.substr(1) + "Request" : "";
            const rspType = m.responseBodyType ? m.responseBodyType.substr(0,1).toUpperCase()    
            + m.responseBodyType.substr(1) + "Response" : "";



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

            const signatureParamsArray = [
                ...Object.keys(signatureParams.path).map((k) => signatureParams.path[k]),
                ...Object.keys(signatureParams.body).map((k) => signatureParams.body[k]),
                ...(Object.keys(signatureParams.query).length
                    ? [
                          {
                              name: "queryOptions",
                              desc: "an object containing the query options for this request",
                              paramType: "Object", // name.substr(0, 1).toUpperCase() + name.substr(1) + "Options"
                              optional: true,
                          },
                          ...(Object.keys(signatureParams.query).map(k=>({ ...signatureParams.query[k], name: "queryOptions."+signatureParams.query[k].name })))
                      ]
                    : []),
                ...(Object.keys(signatureParams.option).length
                    ? [
                          {
                              name: "options",
                              desc: "an object containing the execution options for this request",
                              paramType: "ExecOptions",
                              optional: true,
                          },
                      ]
                    : []),
            ];

            const signatureJS = [
                ...Object.keys(signatureParams.path).map((k) => signatureParams.path[k].name),
                ...Object.keys(signatureParams.body).map((k) => signatureParams.body[k].name),
                ...(Object.keys(signatureParams.query).length ? ["queryOptions={}"] : []),
                ...(Object.keys(signatureParams.option).length ? ["options=defaultOptions"] : []),
            ].join(", ");

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
                              optional: true,
                          },
                          ...(Object.keys(signatureParams.query).map(k=>({ ...signatureParams.query[k], name: "queryOptions."+signatureParams.query[k].name })))
                      ]
                    : [])
            ];

            const signatureWrappedJS = [
                ...Object.keys(signatureParams.path)
                    .filter((k) => k !== "siteId")
                    .map((k) => signatureParams.path[k].name),
                ...Object.keys(signatureParams.body).map((k) => signatureParams.body[k].name),
                ...(Object.keys(signatureParams.query).length ? ["queryOptions"] : []),
            ].join(", ");

            const callWrappedJS = [
                ...Object.keys(signatureParams.path).map((k) => signatureParams.path[k].name),
                ...Object.keys(signatureParams.body).map((k) => signatureParams.body[k].name),
                ...(Object.keys(signatureParams.query).length ? ["queryOptions"] : []),
            ].join(", ");

            const comments = [];
            comments.push("/**");
            comments.push(m.desc.map((d) => ` * ${d}`).join("\n"));
            comments.push(
                ...signatureParamsArray
                    .map((p) => ({ ...p, name: p.optional ? `[${camel(p.name)}]` : camel(p.name) }))
                    .map((p) => ` * @param {${p.paramType}} ${p.name} ${p.desc}`)
            );
            comments.push(` * @returns {Promise<${rspType || "any"}>} Promise | undefined`);
            comments.push(" */");

            const commentsWrapped = [];
            commentsWrapped.push("/**");
            commentsWrapped.push(` * ${m.desc[0]}`);
            commentsWrapped.push(
                ...signatureWrappedParamsArray
                    .map((p) => ({ ...p, name: p.optional ? `[${camel(p.name)}]` : camel(p.name) }))
                    .map((p) => ` * @param {${p.paramType}} ${p.name} ${p.desc}`)
            );
            commentsWrapped.push(` * @returns {Promise<${rspType || "any"}>} Promise | undefined`);
            commentsWrapped.push(" */");

            const queryParams = params
                .filter(
                    (p) =>
                        p.type != "path" &&
                        p.type != "header" &&
                        p.type != "body" &&
                        p.type != "option"
                )
                .map((p) => ({
                    key: p.qsKey || camel(p.name),
                    value: camel(p.name),
                }));
            const queryParamsObj = queryParams
                .map(
                    (p) =>
                        (queryParams.length > 1 ? "            " : "") +
                        (p.key == "vf_<fieldname>" ? "..." + p.value : p.key + ":" + p.value)
                )
                .join(",\n");

            const versionlessUri = m.uri.replace("${apiVersion}", "{apiVersion}");
            const queryParamsSpacer = queryParams.length > 1 ? "\n" : " ";
            const httpMethod = m.method.toLowerCase() === "delete" ? "del" : m.method.toLowerCase();
            const requestType =
                m.name != "Sign In" ? "AuthenticatedRequest" : "AuthenticationRequest";
            const authenticationRoute = requestType === "AuthenticationRequest";
            const buildArgs =
                m.name != "Sign In"
                    ? "getBaseURL(options), getToken(options)"
                    : "getBaseURL(options)";
            const methodType = "http";

            const errorCodes =
                m.errorCodes && m.errorCodes.length ? JSON.stringify(m.errorCodes, null, 2) : "";

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

            const queryOptionsTypeName =
                name.substr(0, 1).toUpperCase() + name.substr(1) + "Options";
            const queryOptionsTypeDefinitions = Object.keys(signatureParams.query)
                .map((k) => {
                    const param = signatureParams.query[k];
                    return ` * @property {string} [${param.qsKey}] ${param.desc}`;
                })
                .join("\n");
            const queryJSONDoc = `
/**
 * ${m.name} Query Options
 * @typedef {Object} ${queryOptionsTypeName}
${queryOptionsTypeDefinitions}
 */
`;



            return {
                ...m,

                requestTypeJS: rqstType,
                responseTypeJS: rspType,

                wrappedCallJS:
                    // (queryParams.length ? queryJSONDoc : "") +
                    commentsWrapped.join("\n\t") +
                    "\n\t" +
                    `${name}(${signatureWrappedJS}) {` +
                    (siteSpecific ? `\n        const siteId = this.getSite();` : "") +
                    `\n        const opts = this.execOpts({ ${
                        authenticationRoute ? "authentication: true" : ""
                    }});\n        return api.${name}(${
                        callWrappedJS + (callWrappedJS.length ? ", " : "")
                    }opts);\n    }`,

                methodCallJS:
                    // (queryParams.length ? queryJSONDoc : "") +
                    comments.join("\n") +
                    "\n" +
                    `export function ${name}(${signatureJS}) { \n` +
                    `    return ${requestType}.builder(${buildArgs})\n` +
                    `        .withPath(\`${versionlessUri}\`)\n` +
                    (m.requestContentType != "application/json"
                        ? `        .withHeaders({ "Content-Type": "${m.requestContentType}" })\n`
                        : "") +
                    (queryParams.length ? `        .withQueryParameters(queryOptions)\n` : "") +
                    (m.requestBody ? `        .withBodyParameters(${m.requestBodyType})\n` : "") +
                    (params.some((p) => p.name === "file" && p.type === "body")
                        ? `        .withFileParameters({ name: "${fileParameterName}", file: file })\n`
                        : "") +
                    // (errorCodes
                    //     ? `        .withErrorCodes(${errorCodes})\n`
                    //     : "") +
                    `        .build()\n` +
                    `        .execute(options.${methodType}.${httpMethod});\n` +
                    `}`,
            };
        });

        // JSONDoc types for exec options and query return
        const execJSONDoc = `
/**
 * HttpManager object containing standard http methods for GET,POST,PUT,DELETE
 * @typedef {Object} HttpManager
 * @property {Function} get HTTP GET method
 * @property {Function} put HTTP PUT method
 * @property {Function} post HTTP POST method
 * @property {Function} del HTTP DEL method
 */
    
/**
 * Execute Options allow fine-grained control over each request
 * @typedef {Object} ExecOptions
 * @property {HttpManager} http Object containing standard http methods for GET,POST,PUT,DELETE
 * @property {boolean} [authentication] states that the route returns authentication information
 * @property {string} [baseURL] specifies the url to run this request against
 * @property {string} [version] specifies a particular version of the api to run this request on
 */

`;

        // reduce by area
        const areas = methodCalls.reduce((o, m) => {
            if (!o.hasOwnProperty(m.area)) {
                o[m.area] = [];
            }
            o[m.area].push(m.methodCallJS);
            return o;
        }, {});

        // response and return types to import
        const typeDefs = _.concat(
                        _.uniq(methodCalls.filter(m => m.requestTypeJS).map(m=>m.requestTypeJS)).map(m=>({ file: "api-requests", type: m })),
                        _.uniq(methodCalls.filter(m => m.responseTypeJS).map(m=>m.responseTypeJS)).map(m=>({ file: "api-responses", type: m }))
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
        const apiFullText =
            headerText +
            API_HEADER +
            execJSONDoc +
            methodCalls.map((m) => m.methodCallJS).join("\n\n");
        utils.writeToFile(path.join(outDirectory, "api-full.js"), apiFullText);

        // output one full file for easier syntax checking
        const wrappedCallsText =
            headerText +
            WRAPPED_HEADER +
            '/**\n'+typeDefs.map(t=> `    * @typedef {import("./types/${t.file}").${t.type}} ${t.type}`).join("\n")+'\n    */\n' +
            execJSONDoc +
            methodCalls.map((m) => m.wrappedCallJS).join("\n\n\t") +
            WRAPPED_FOOTER;

        utils.writeToFile(path.join(outDirectory, "api-wrapped.js"), wrappedCallsText);

        // output our re-export
        // const reexportText =
        //     headerText +
        //     Object.keys(areas)
        //         .map((k) => camel(k.replace(/\,/g, "")))
        //         .map((k) => `export * from './api-${k}';`)
        //         .join("\n");
        // utils.writeToFile(path.join(outDirectory, "api.js"), reexportText);

        // output a file per area
        // for (let a in areas) {
        //     const area_name = camel(a.replace(/\,/g, ""));
        //     const apiAreaText = headerText + API_HEADER + execJSONDoc + areas[a].join("\n\n");
        //     utils.writeToFile(path.join(outDirectory, `api-${area_name}.js`), apiAreaText);
        // }
    } catch (ex) {
        throw ex;
    }
}

const API_HEADER = `
import { AuthenticationRequest, AuthenticatedRequest } from './request'
import * as methods from './execute'

/* 
the base url and authentication token can be stored here at a module level
if you are choosing to access the api methods directly for convenience, but the
baseURL and token will usually be managed by the client or on a per-request basis
*/

let baseURL;
let authenticationToken;
const defaultOptions = { baseURL: null, http:methods };
export function setBaseURL(url) { baseURL=url; }
export function setToken(token) { authenticationToken=token; }
export function getBaseURL(options) { return getOpt("baseURL", options, baseURL); }
export function getToken(options) { return getOpt("token", options, authenticationToken); }
function getOpt(name,opts,dflt) { return (opts && opts.hasOwnProperty(name)) ? opts[name] : dflt; }

`;

const WRAPPED_HEADER = `
import * as api from './api-full'

export class WrappedApiCalls {
    
    constructor() {
        this.execOpts = this.execOpts.bind(this);
        this.getSite = this.getSite.bind(this);
    }

    /** 
     * retrieves a cached site id (overridden in clients) 
     * @returns {string} the siteId
     */
    getSite() { return ""; }

    /** 
     * retrieves an exec options object (overridden in clients) 
     * @returns {ExecOptions} executeOptions
     */
    execOpts(obj) { return { ...obj } }

    `;

const WRAPPED_FOOTER = `
}
`;

module.exports.generateCodeFromJson = generateCodeFromJson;
