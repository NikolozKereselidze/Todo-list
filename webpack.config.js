const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",

  entry: "./src/modules/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "./src/css"),
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader",
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
