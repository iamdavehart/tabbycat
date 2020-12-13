const convert = require("xml-js");
const _ = require("lodash");
const fs = require("fs");



function generateJsonSchemaFromXsd() {
    try {
        fs.readFile("./generator/schema/ts-api_3_9.xsd", (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            const xml_schema = data;
            const Xsd2JsonSchema = require("xsd2jsonschema").Xsd2JsonSchema;
            const xs2js = new Xsd2JsonSchema();

            const convertedSchemas = xs2js.processAllSchemas({
                schemas: { "ts-api_3_9.xsd": xml_schema.toString() }
            });
            const jsonSchema = convertedSchemas[
                "ts-api_3_9.xsd"
            ].getJsonSchema();

            fs.writeFile(
                "./generator/out/rest-api-schema.json",
                JSON.stringify(
                    jsonSchema,                  
                    ),
                {
                    encoding: "utf8",
                    flag: "w",
                },
                (err) => {
                    if (err) console.log(err);
                    else {
                        console.log(
                            "rest-api-schema.json written successfully"
                        );
                    }
                }
            );
        });
    } catch (error) {
        throw error;
    }
}












module.exports.generateJsonSchemaFromXsd = generateJsonSchemaFromXsd;
