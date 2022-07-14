const convert = require("xml-js");
const _ = require("lodash");
const fs = require("fs");

function generateJsonResponsesFromXml() {
    try {

        const files = fs.readdirSync("./generator/reference/tests")
        files.forEach(f => {
            console.log(f);
            const xml = fs.readFileSync(`./generator/reference/tests/${f}`, 'utf-8');
            const options = {ignoreComment: true, alwaysChildren: true, compact: true, trim: true, ignoreDeclaration: true, ignoreInstruction: true };
            const converted = convert.xml2json(xml, options);
            const convertedObj = JSON.parse(converted);
            const outputObj = convertedObj["tsResponse"] ?? convertedObj["tsRequest"] ?? {};
            delete outputObj._attributes; // no attributes from top level response/request;

            const flattenAttrs = (o) => {
                if (!o) return;
                if (_.isArray(o)) o.forEach(a => flattenAttrs(a));              
                if (!_.isPlainObject(o)) return;
                const attrs = o._attributes ?? {};
                Object.keys(attrs).forEach(k => { o[k] = attrs[k]; });
                delete o._attributes;
                Object.keys(o).forEach(k => {
                    if (_.isPlainObject(o[k]) && Object.keys(o[k]).length === 1 && Object.keys(o[k])[0] === "_text") {
                        o[k] = o[k]._text;
                    }
                    flattenAttrs(o[k])
                });
            }

            flattenAttrs(outputObj);


            fs.writeFileSync(
                `./generator/out/tests/${f.replace(".xml",".json")}`,
                JSON.stringify(outputObj,null,2),
                {
                    encoding: "utf8",
                    flag: "w",
                }
            );        

            

        })

    } catch (error) {
        throw error;
    }
}

generateJsonResponsesFromXml();

// module.exports.generateJsonResponsesFromXml = generateJsonResponsesFromXml;
