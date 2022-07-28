/*
 * @Author: chenfangxu
 * @Date: 2022-07-28 21:48:53
 * @Description:
 * @LastEditors: chenfangxu
 * @LastEditTime: 2022-07-28 22:06:06
 * @FilePath: /vscode-linter-example/webpack/remove-comments-plugin.js
 */

module.exports = class RemoveCommentsPlugin {
  apply(complier) {
    console.log("RemoveCommentsPlugin 启动")
    complier.hooks.emit.tap("RemoveCommentsPlugin", (compilation) => {
      console.log(compilation.assets)
      for (const name in compilation.assets) {
        if (/\.js/.test(name)) {
          console.log(name)
          const content = compilation.assets[name].source()
          const noCommentsContent = content.replace(/\/\*{2,}\/\s?/g, "")
          compilation.assets[name] = {
            source: () => noCommentsContent,
            size: () => noCommentsContent.length,
          }
        }
      }
    })
  }
}
