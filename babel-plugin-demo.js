/*
 * @Author: chenfangxu
 * @Date: 2022-07-24 17:25:39
 * @Description: babel 插件 demo
 * @LastEditors: chenfangxu
 * @LastEditTime: 2022-07-24 18:45:09
 * @FilePath: /vscode-linter-example/babel-plugin-demo.js
 */

const targetNames = ["log", "error", "warn", "info"].map(
  (name) => `console.${name}`
)
module.exports = ({ types }) => {
  return {
    visitor: {
      CallExpression(path) {
        const calleeName = path.get("callee").toString()
        if (targetNames.includes(calleeName)) {
          const { line, column } = path.node.loc.start
          path.node.arguments.unshift(
            types.stringLiteral(`line:${line}-column:${column}`)
          )
        }
      },
    },
  }
}
