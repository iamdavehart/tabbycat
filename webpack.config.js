const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const DTSPlugin = require("dts-bundle-webpack");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: { tabbycat: "./src/index.js" },
    output: {
        path: path.resolve(__dirname, "lib"),
        publicPath: "/",
        filename: "[name].js",
        library: "[name]",
        libraryTarget: "umd",
        globalObject: "this",
    },
    optimization: {
        minimize: false,
    },
    externalsPresets: { node: true },
    externals: [webpackNodeExternals()],
    module: {
        rules: [
            { test: /\.(ts|js)x?/, use: ["babel-loader"], include: path.resolve(__dirname, "src") },
        ],
    },
    resolve: {
        alias: { tabbycat: path.resolve(__dirname, "src") },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".scss"],
    },
    plugins: [
        new DTSPlugin({
            name: "tabbycat",
            main: "./src/index.d.ts",
            out: "../lib/index.d.ts",
            outputAsModuleFolder: false,
        }),
    ],
};
