/*
 * @Author: chenfangxu
 * @Date: 2022-07-28 10:49:26
 * @Description:
 * @LastEditors: chenfangxu
 * @LastEditTime: 2022-07-29 17:28:35
 * @FilePath: /vscode-linter-example/webpack/heading.js
 */
// ./src/heading.js

// import demo from "./text"
// import md from "./heading.md"
// import "./heading.css"

export const createHeading = () => {
  const element = document.createElement("h2")

  element.textContent = "Hello webpack1"
  element.contentEditable = true

  // element.addEventListener("click", () => alert("Hello webpack"))

  return element
}

export const a = () => {
  console.log(a)
}
