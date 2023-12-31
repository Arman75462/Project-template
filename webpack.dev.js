const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  devtool: "inline-source-map",
  devServer: {
    static: "./src",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
