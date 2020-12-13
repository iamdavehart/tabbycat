

const fs = require("fs");
const jsonDoc = require("./out/rest-api-doc.json");
const camel = (s) => {
    return s
        .split(/[\s\-]/g)
        .map(
            (s1, i) =>
                (i == 0
                    ? s1.substr(0, 1).toLowerCase()
                    : s1.substr(0, 1).toUpperCase()) + s1.substr(1)
        )
        .join("");
};


function generateTestsFromJson() {
    try {

        const tests = jsonDoc.map(api => `test("${camel(api.name)} is defined", ()=> { expect(api.${camel(api.name)}).toBeDefined(); });`)
        const testCode = tests.join("\n");
            fs.writeFileSync(
                "./generator/out/api-definition.test.js",
                `import * as api from "../api-full";\n\ndescribe("Api Definition Tests", ()=> {\n${testCode}\n});\n`,
                {
                    encoding: "utf8",
                    flag: "w",
                },
                (err) => {
                    if (err) console.log(err);
                    else {
                        console.log("api-definition.test.js written successfully");
                    }
                }
            );

    } catch (ex) {
        throw ex;
    }
}

module.exports.generateTestsFromJson = generateTestsFromJson;
