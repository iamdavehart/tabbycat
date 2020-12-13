const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: { tabbycat: "./src/client.js" },
  output: {
    path: path.resolve(__dirname, "lib"),
    publicPath: "/",
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "umd",
    globalObject: "this",
  },
  optimization: {
    minimize:false
  },
  externalsPresets: { node: true },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      { test: /\.(ts|js)x?/, use: [ 'babel-loader' ], include: path.resolve(__dirname, "src") },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".scss"],
  },
  plugins: [],
};
