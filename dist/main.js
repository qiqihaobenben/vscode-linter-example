(function() { // webpackBootstrap
	"use strict";
	var __webpack_modules__ = ([
/* 0 */
(function(module, __unused_webpack___webpack_exports__, __webpack_require__) {


;// CONCATENATED MODULE: ./webpack/heading.js
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

const createHeading = () => {
  const element = document.createElement("h2")

  element.textContent = "Hello webpack1"
  element.contentEditable = true

  // element.addEventListener("click", () => alert("Hello webpack"))

  return element
}

const a = () => {
  console.log(a)
}

;// CONCATENATED MODULE: ./webpack/index.js
/* module decorator */ module = __webpack_require__.hmd(module);
/*
 * @Author: chenfangxu
 * @Date: 2022-07-28 10:49:01
 * @Description:
 * @LastEditors: chenfangxu
 * @LastEditTime: 2022-07-29 17:11:47
 * @FilePath: /vscode-linter-example/webpack/index.js
 */
// ./src/index.js



const heading = createHeading()

document.body.append(heading)

module.hot.accept("./heading.js", () => {
  console.log("更新了")
})


})
	]);
	// The module cache
	var __webpack_module_cache__ = {};
	
	// The require function
	function __webpack_require__(moduleId) {
		// Check if module is in cache
		var cachedModule = __webpack_module_cache__[moduleId];
		if (cachedModule !== undefined) {
			return cachedModule.exports;
		}
		// Create a new module (and put it into the cache)
		var module = __webpack_module_cache__[moduleId] = {
			id: moduleId,
			loaded: false,
			exports: {}
		};
	
		// Execute the module function
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
	
		// Flag the module as loaded
		module.loaded = true;
	
		// Return the exports of the module
		return module.exports;
	}
	
	/* webpack/runtime/harmony module decorator */
	!function() {
		__webpack_require__.hmd = function(module) {
			module = Object.create(module);
			if (!module.children) module.children = [];
			Object.defineProperty(module, 'exports', {
				enumerable: true,
				set: function() {
					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
				}
			});
			return module;
		};
	}();
	
	
	// startup
	// Load entry module and return exports
	// This entry module is referenced by other modules so it can't be inlined
	var __webpack_exports__ = __webpack_require__(0);
	
})()
;
//# sourceMappingURL=main.js.map