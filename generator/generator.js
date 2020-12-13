#!/usr/bin/env node
/**
 * Generator
 * this class allows the caller to generate intermediary files and code
 * from tableau's refernce websites and schema to make sure that we have
 * the most complete api client we can.
 *
 * rest-api-doc.json
 * rest-api-schema.json
 * rest-api-types.d.ts
 * api.js
 * api-{area}.js
 */
const fs = require("fs");
const yargs = require("yargs");
const config = require("./generator.config.json");
const genRefToJson = require("./generatorRefToJson");
const genXsdToJson = require("./generatorXsdToJson");
const genJsonToCode = require("./generatorJsonToCode");
const genJsonToTest = require("./generatorJsonToTest");
const genJsonToTs = require("./generatorJsonToTsDef");

// ensure directory structure
const ensureDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};

// command line args
yargs(process.argv.slice(2))
    .command(
        "ref",
        "generates the reference intermediate",
        () => {},
        (argv) => {
            const cfg = config || {};
            const cfgWithArgs = { ...cfg, "outputDirectory": argv.o };
            genRefToJson.generateReferenceIntermediate(cfgWithArgs);
        }
    )
    .command(
        "xsd",
        "generates the xsd schema intermediate",
        () => {},
        (argv) => {
            const cfg = config || {};
            const cfgWithArgs = { ...cfg, "outputDirectory": argv.o };
            genXsdToJson.generateJsonSchemaFromXsd(cfgWithArgs);
        }
    )
    .command(
        "code",
        "generates code from the intermediate files",
        () => {},
        (argv) => {
            const cfg = config || {};
            const cfgWithArgs = { ...cfg, "outputDirectory": argv.o };
            genJsonToCode.generateCodeFromJson(cfgWithArgs);
        }
    )
    .command(
        "tests",
        "generates tests from the intermediate files",
        () => {},
        (argv) => {
            const cfg = config || {};
            const cfgWithArgs = { ...cfg, "outputDirectory": argv.o };
            genJsonToTest.generateTestsFromJson(cfgWithArgs);
        }
    )
    .command(
        "types",
        "generates types from the intermediate files",
        () => {},
        (argv) => {
            const cfg = config || {};
            const cfgWithArgs = { ...cfg, "outputDirectory": argv.o };
            genJsonToTs.generateTsDefsFromJson(cfgWithArgs);
        }
    ).option("out-dir", {
        alias: "o",
        type: "string",
        description: "the out directory to use",
    })
    .demandCommand(1, 1).argv;
