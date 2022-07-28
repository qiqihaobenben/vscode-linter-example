/*
 * @Author: chenfangxu
 * @Date: 2022-07-28 10:49:01
 * @Description:
 * @LastEditors: chenfangxu
 * @LastEditTime: 2022-07-28 10:51:39
 * @FilePath: /vscode-linter-example/webpack/index.mjs
 */
// ./src/index.js

import createHeading from "./heading.js"

const heading = createHeading()

document.body.append(heading)
