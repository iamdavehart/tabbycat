const decomment = require("decomment");
const fs = require("fs");

const jsonSchemaToTypescript = require("json-schema-to-typescript");

function generateTsDefsFromJson() {
    try {
        process.env.VERBOSE = true;
        const jsonSchema = require("./out/rest-api-schema.json");
        const compile = jsonSchemaToTypescript.compile;
        compile(jsonSchema, "tableau schema", {
            bannerComment: false,
            strictIndexSignatures: false,
            ignoreMinAndMaxItems: true,
            format: true
        }).then((ts) => {

            const extractMap = (o) => {
                const regex = /\s*(.+)\s*\:\s*(.+?)\;/
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
            formatOutput(processedOutput);
            const jsonOutput = {
                requestMap,
                responseMap,
                typedefs: processedOutput
            };

            const typescriptOutputText = processedOutput.map(o => `// type: ${o.type}\n// name: ${o.name}\n${o.text}\n\n`).join("\n");
            fs.writeFile(
                "./generator/out/rest-api-types.d.ts",
                typescriptOutputText,
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

    output.sort((a,b) => ((a.type==="type"?"_":"")+a.name).localeCompare((b.type==="type"?"_":"")+b.name));

    return output;

}



module.exports.generateTsDefsFromJson = generateTsDefsFromJson;
