const decomment = require("decomment");
const fs = require("fs");
const _ = require("lodash");

const jsonSchemaToTypescript = require("json-schema-to-typescript");

function generateTsDefsFromJson() {
    try {
        // process.env.VERBOSE = true;
        const jsonSchema = require("./out/rest-api-schema.json");
        
        // add in swagger components
        const swagger = require('./reference/swagger.json');
        const swaggerDefs = { ...swagger.components.schemas };
        const updateRefs = (o) => {
            if (_.isObject(o) && Object.keys(o).indexOf("properties") > -1) {
                o["additionalProperties"] = false;
            }
            if (_.isObject(o) && Object.keys(o).indexOf("$ref") > -1) {
                o["$ref"] = o["$ref"].replace("#/components/schemas","#/definitions");
            }
            if (_.isObject(o) || _.isArray(o)) {
                for (k in o) {
                    if (_.isObject(o[k]) || _.isArray(o[k])) updateRefs(o[k])
                }
            }
        }
        updateRefs(swaggerDefs);

        const namespaces = Object.keys(swaggerDefs).map(k => ({ key: k, 
            namespace: _.dropRight(k.split(".")).join("."), 
            class: k.split(".").map(k => _.startCase(k).replace(/\s+/g,"")).join(""),
            newClass: _.takeRight(k.split(".")).join("") 
        }));

        Object.assign(jsonSchema.definitions, swaggerDefs);


        // add any missing schema components from our config
        const generatorConfig = require('./generator.config.json');
        const extraDefinitions = generatorConfig.reference.definitions;
        Object.assign(jsonSchema.definitions, extraDefinitions);



        const compile = jsonSchemaToTypescript.compile;
        compile(jsonSchema, "tableau schema", {
            bannerComment: false,
            strictIndexSignatures: false,
            ignoreMinAndMaxItems: true,
            format: true,
            unreachableDefinitions: true
        }).then((ts) => {

            const extractMap = (o) => {
                const regex = /\s*(.+?)\s*\?*\s*\:\s*(.+?)\;/
                const emap = o.text
                    .split("\n")
                    .map(l => l.trim())
                    .filter(l => regex.test(l))
                    .reduce((out,l) => { const e = regex.exec(l); out[e[1]] = e[2]; return out }, {});
            
                return Object.keys(emap).sort().reduce((o,k) => {
                    o[k] = emap[k];
                    return o; 
                }, {})
            }

            const findNamespaces = (o) => {
                const regex = /^export (type|interface) (.+?)([\n\s\{\=])/;
                o.forEach(t => {
                    const found = namespaces.find(n => n.class === t.name);
                    if (found) {
                        t.namespace = found.namespace;
                        t.name = found.newClass ?? t.name;
                        if (regex.test(t.text)) {
                            t.text = t.text.replace(regex, `export $1 ${t.name}$3`);                           
                        }
                    }
                    namespaces.forEach(n => {
                        if (n.class !== n.newClass) {
                        while (t.text.indexOf(n.class) > -1) {
                                t.text = t.text.replace(n.class, n.newClass);
                            }
                        }
                    })
                })
            }

            const formatOutput = (o) => {
                const regexTypeFormat = /\|\s\{\n\s+(.+?)\:\s*(.+?)\;\n\s+\}/g;
                o.forEach(t => {
                    if (t.type === "type") {
                        t.text = t.text.replace(regexTypeFormat, "| { $1: $2 }" )
                    }  
                })
          }


            
            const typescriptOutput = processTypescript(ts);
            const processedOutput = typescriptOutput.filter(o => o.name !== "TableauSchema");
            const requestMap = extractMap(typescriptOutput.find(o => o.name === "TsRequest"));
            const responseMap = extractMap(typescriptOutput.find(o => o.name === "TsResponse"));
            const paginatedResponseMap = extractMap(typescriptOutput.find(o => o.name === "PaginatedResponseGroup"));
            // Object.assign(responseMap, paginatedResponseMap);
            Object.assign(responseMap, generatorConfig.reference.responseMap);
            Object.assign(paginatedResponseMap, generatorConfig.reference.paginatedResponseMap);
            Object.assign(requestMap, generatorConfig.reference.requestMap);
            findNamespaces(processedOutput);
            formatOutput(processedOutput);


            const firstLetterUp = (t) => t.substring(0,1).toUpperCase()+t.substring(1);
            processedOutput.sort((a,b) => ((a.namespace ?? "_")+(a.type==="type"?"_":"")+a.name).localeCompare((b.namespace ?? "_")+(b.type==="type"?"_":"")+b.name));
            processedOutput.push(
                ...Object.keys(requestMap).map(k => ({ type: "type", name: `${firstLetterUp(k)}Request`, text: `export type ${firstLetterUp(k)}Request = { ${k} : ${requestMap[k]} };`})),
                ...Object.keys(responseMap).map(k => ({ type: "type", name: `${firstLetterUp(k)}Response`, text: `export type ${firstLetterUp(k)}Response = { ${k} : ${responseMap[k]} };`})),
                ...Object.keys(paginatedResponseMap).map(k => ({ type: "type", name: `${firstLetterUp(k)}Response`, text: `export type ${firstLetterUp(k)}Response = { pagination: PaginationType, ${k} : ${paginatedResponseMap[k]} };`}))
            );

            const jsonOutput = {
                requestMap,
                responseMap,
                paginatedResponseMap,
                typedefs: processedOutput
            };

            const filesByNamespace = _.uniq(processedOutput.map(o => o.namespace ?? ""));
            filesByNamespace.forEach(fn => {

                const filename = `${fn?fn.replace(/\./g,"_"):'tableau_restapi_v0'}.d.ts`;
                const typescriptOutputText = processedOutput.filter(o => (o.namespace??"") === fn).map(o => `// type: ${o.type}\n// name: ${o.name}\n`
                + (o.namespace ? `// namespace: ${o.namespace}\n` : "")
                + `${o.text}\n`
                + `\n`).join("\n");

                fs.writeFile(
                `./generator/out/types/${filename}`,
                typescriptOutputText,
                {
                encoding: "utf8",
                flag: "w",
                },
                (err) => {
                if (err) console.log(err);
                else {
                console.log(`${filename} written successfully`);
                }
                }
                );

            })


            fs.writeFile(
                "./generator/out/rest-api-types.json",
                JSON.stringify(jsonOutput, null, 2),
                {
                    encoding: "utf8",
                    flag: "w",
                },
                (err) => {
                    if (err) console.log(err);
                    else {
                        console.log("rest-api-types.json written successfully");
                    }
                }
            );

            fs.writeFile(
                "./generator/out/rest-api-types.d.ts",
                ts,
                {
                    encoding: "utf8",
                    flag: "w",
                },
                (err) => {
                    if (err) console.log(err);
                    else {
                        console.log("rest-api-types.d.ts written successfully");
                    }
                }
            );

        });
    } catch (ex) {
        throw ex;
    }
}

function processTypescript(ts) {
    const cleaned = decomment(ts);
    const lines = cleaned.split("\n");
    const regex = /^export (type|interface) (.+?)[\n\s\{\=]/;
    
    const output = [];
    const buffer = [];    
    let typeOrInterface = "";
    let typeOrInterfaceName = "";
    
    const processBuffer = () => {
        let t = buffer.join("\n");
        t = t.replace(/\"@/g, "\"");
        output.push({ 
            type: typeOrInterface, 
            name: typeOrInterfaceName, 
            text: t
        });
    }

    for (let line of lines) {
        if (regex.test(line)) {
            if (typeOrInterfaceName && buffer.length > 0) processBuffer();
            const match = regex.exec(line);
            typeOrInterface = match[1];
            typeOrInterfaceName = match[2];
            buffer.length = 0;
        }
        buffer.push(line);
    }
    if (typeOrInterfaceName && buffer.length > 0) processBuffer();

    

    return output;

}



module.exports.generateTsDefsFromJson = generateTsDefsFromJson;
