const path = require("path");
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
      {
        test: /(webp|avif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // Convert to data URL if file size is smaller than 10 KB
          },
        },
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
