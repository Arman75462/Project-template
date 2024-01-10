const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/javascript-files/index.js",

  module: {
    rules: [
      {
        test: /(png|svg|jpg|jpeg|gif|xcf)$/i,
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              // Optimize png images
              optipng: {
                enabled: true,
              },
              // Optimize svg images
              svgo: {
                enabled: true,
              },
              // Optimize gif images
              gifsicle: {
                interlaced: false,
              },
              // Compress JPG & PNG images into WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
        type: "asset/resource",
      },
      {
        test: /(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
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
