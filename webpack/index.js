/*
 * @Author: chenfangxu
 * @Date: 2022-07-28 10:49:01
 * @Description:
 * @LastEditors: chenfangxu
 * @LastEditTime: 2022-07-29 17:11:47
 * @FilePath: /vscode-linter-example/webpack/index.js
 */
// ./src/index.js

import { createHeading } from "./heading.js"

const heading = createHeading()

document.body.append(heading)

module.hot.accept("./heading.js", () => {
  console.log("更新了")
})
