const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  devtool: "inline-source-map",
  devServer: {
    static: "./src",
  },

  module: {
    rules: [
      {
        test: /(png|svg|jpg|jpeg|gif|xcf)$/i,
        type: "asset/resource",
      },
      {
        test: /(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
