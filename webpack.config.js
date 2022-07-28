/*
 * @Author: chenfangxu
 * @Date: 2022-07-28 11:18:41
 * @Description:
 * @LastEditors: chenfangxu
 * @LastEditTime: 2022-07-28 21:51:01
 * @FilePath: /vscode-linter-example/webpack.config.js
 */
const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const RemoveCommentsPlugin = require("./webpack/remove-comments-plugin")

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
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
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
  ],
}

module.exports = config
