const convert = require("xml-js");
const _ = require("lodash");
const fs = require("fs");

function generateJsonSchemaFromXsd() {
    try {
        fs.readFile("./generator/schema/ts-api_3_15.xsd", (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            const xml_schema = data;
            const Xsd2JsonSchema = require("xsd2jsonschema").Xsd2JsonSchema;
            const xs2js = new Xsd2JsonSchema({ generateTitle: false });

            const convertedSchemas = xs2js.processAllSchemas({
                schemas: { "ts-api_3_15.xsd": xml_schema.toString() },
            });
            const jsonSchema = convertedSchemas["ts-api_3_15.xsd"].getJsonSchema();

            const addInAdditionalPropertiesCheck = (o) => {
                if (_.isObject(o) && Object.keys(o).indexOf("properties") > -1) {
                    o["additionalProperties"] = false;
                }
                if (_.isObject(o) || _.isArray(o)) {
                    for (k in o) {
                        if (_.isObject(o[k]) || _.isArray(o[k])) addInAdditionalPropertiesCheck(o[k])
                    }
                }
            }

            addInAdditionalPropertiesCheck(jsonSchema);

            fs.writeFile(
                "./generator/out/rest-api-schema.json",
                JSON.stringify(jsonSchema),
                {
                    encoding: "utf8",
                    flag: "w",
                },
                (err) => {
                    if (err) console.log(err);
                    else {
                        console.log("rest-api-schema.json written successfully");
                    }
                }
            );
        });
    } catch (error) {
        throw error;
    }
}

module.exports.generateJsonSchemaFromXsd = generateJsonSchemaFromXsd;
