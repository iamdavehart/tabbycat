const fs = require("fs");

const jsonSchemaToTypescript = require("json-schema-to-typescript");

function generateTsDefsFromJson() {
    try {
        const jsonSchema = require("./out/rest-api-schema.json");
        const compile = jsonSchemaToTypescript.compile;
        compile(jsonSchema, "tableau schema").then((ts) => {
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

module.exports.generateTsDefsFromJson = generateTsDefsFromJson;
