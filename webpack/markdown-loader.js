/*
 * @Author: chenfangxu
 * @Date: 2022-07-28 19:40:54
 * @Description:
 * @LastEditors: chenfangxu
 * @LastEditTime: 2022-07-28 20:06:24
 * @FilePath: /vscode-linter-example/webpack/markdown-loader.js
 */
const marked = require("marked")

module.exports = (source) => {
  const html = marked.marked(source)
  return html
}
