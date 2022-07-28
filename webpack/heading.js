/*
 * @Author: chenfangxu
 * @Date: 2022-07-28 10:49:26
 * @Description:
 * @LastEditors: chenfangxu
 * @LastEditTime: 2022-07-28 20:06:07
 * @FilePath: /vscode-linter-example/webpack/heading.js
 */
// ./src/heading.js

// import demo from "./text"
import md from "./heading.md"
console.log(md)

export default () => {
  const element = document.createElement("h2")

  element.textContent = "Hello webpack"
  element.innerHTML = md

  element.addEventListener("click", () => alert("Hello webpack"))

  return element
}
