/*
 * @Author: chenfangxu
 * @Date: 2022-07-20 16:42:18
 * @Description:
 * @LastEditors: chenfangxu
 * @LastEditTime: 2022-07-26 16:31:54
 * @FilePath: /vscode-linter-example/src/a.js
 */
// import traverse from "@babel/traverse"
import "core-js/stable"
let t = require("@babel/types")
let b = "console.log(1);"
class B {}

console.log(B)

new Promise()

const ast = require("@babel/parser").parse(b)

require("@babel/traverse").default(ast, {
  VariableDeclaration(path) {
    const tarNode = path.node.declarations[0]
    if (t.isIdentifier(tarNode.id) && t.isNumericLiteral(tarNode.init)) {
      console.log(1)
      tarNode.id.name = `${tarNode.id.name}: number`
    }
    console.log(tarNode)
  },
})

const result = require("@babel/generator").default(ast, {})

console.log(result.code)
