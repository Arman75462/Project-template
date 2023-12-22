const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },

  plugins: [new MiniCssExtractPlugin()],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});
