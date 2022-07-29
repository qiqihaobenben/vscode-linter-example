/*
 * @Author: chenfangxu
 * @Date: 2022-07-28 11:18:41
 * @Description:
 * @LastEditors: chenfangxu
 * @LastEditTime: 2022-07-29 17:32:16
 * @FilePath: /vscode-linter-example/webpack.config.js
 */
const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const RemoveCommentsPlugin = require("./webpack/remove-comments-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  entry: "./webpack/index.js",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "./dist"),
  },
  mode: "none",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.md$/,
        use: ["html-loader", "./webpack/markdown-loader.js"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: "123", template: "./webpack/index.html" }),
    new RemoveCommentsPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "public/static", to: "static" }],
    }),
  ],
  devServer: {
    port: 9001,
    proxy: {
      "/api": {
        target: "https://api.github.com",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
    hot: true,
  },
  optimization: {
    usedExports: true,
    minimize: false,
    concatenateModules: true,
  },
}

module.exports = config
