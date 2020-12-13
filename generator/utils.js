const fs = require('fs');
const path = require('path');

/**
 * camel cases a string, removing hyphens
 * @param {string} s the string to be camel cased
 */
function camel(s) {
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

/**
 * Writes string content to a utf-8 file
 * @param {string} contents The contents to be written to the file
 * @param {string} filepath The path to the output file
 */
function writeToFile(filepath, contents) {
    const filename = path.basename(filepath);
    fs.writeFile(
        filepath,
        contents,
        { encoding: "utf8", flag: "w", },
        (err) => {
            if (err) console.log(err);
            else {
                console.log(`${filename} written successfully`);
            }
        }
    );
}

/**
 * Ensure that the directory exists
 * @param {string} dir directory name
 */
const ensureDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};


module.exports.ensureDir = ensureDir;
module.exports.writeToFile = writeToFile;
module.exports.camel = camel;
