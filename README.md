# vscode-linter-example

代码规范和编码风格示例项目

缩进的代码风格到底是 2 个空格还是 4 个空格是受谁控制的？VS Code 默认设置？还是 Prettier?

1、`.vscode/settings.json` 中的 `"editor.tabSize": 4`，不过如果设置 `"editor.detectIndentation": true` , 就会根据打开文件的内容自动检测，例如虽然设置的 tabSize 为 4，但是当前文件打开时文件内容的 tabSize 为 2，所以依然会沿用 2，如果设置为 false，后续的 tabSize 则会使用 4

```json
{
      // 根据打开文件的内容自动检测 #editor.tabSize#和#editor.intertSpaces#
      // 例如虽然下面设置的 tabSize 为 4，但是当前文件打开时是文件内容的 tabSize 为 2，所以依然会沿用 2，如果设置为 false，后续的 tabSize 则会使用 4
      "editor.detectIndentation": true,
      "editor.insertSpaces": true, //是否使用空格
      "editor.tabSize": 4 // 空格或者制表符的大小
}
```

到现在为止，新建一个 `index.js` 文件缩进是 4 个空格

2、VS Code 中安装了 EditorConfig 插件，并且创建了 `.editorconfig` 配置文件，缩进的代码风格就会由 EditorConfig 的 `indent_style` 和 `indent_size` 控制。

```
[*.{js,jsx,ts,tsx,vue}]

indent_style = space
indent_size = 2
```

到现在为止，`index.js` 文件的缩进是 2 个空格

2、VS Code 安装 Prettier 插件，并且创建了 `.prettierrc.js` 配置文件，缩进的代码风格就会由 Prettier 的 `tabWdith`控制。

```
tabWidth: 6
```

到现在为止，`index.js` 文件的缩进是 6 个空格

所以，缩进的代码风格是需要具体看安装什么插件，总起来说优先级：Prettier > EditorConfig > VS Code settings.json
