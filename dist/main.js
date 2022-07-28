(function() { // webpackBootstrap
	"use strict";
	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
(function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heading_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
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

console.log(_heading_md__WEBPACK_IMPORTED_MODULE_0__["default"])

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const element = document.createElement("h2")

  element.textContent = "Hello webpack"
  element.innerHTML = _heading_md__WEBPACK_IMPORTED_MODULE_0__["default"]

  element.addEventListener("click", () => alert("Hello webpack"))

  return element
});


}),
/* 2 */
(function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!-- ./src/about.md -->\n\n<h1 id=\"about\">About</h1>\n<p>this is a markdown file.</p>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

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
			// no module.id needed
			// no module.loaded needed
			exports: {}
		};
	
		// Execute the module function
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
	
		// Return the exports of the module
		return module.exports;
	}
	
	/* webpack/runtime/make namespace object */
	!function() {
		// define __esModule on exports
		__webpack_require__.r = function(exports) {
			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			}
			Object.defineProperty(exports, '__esModule', { value: true });
		};
	}();
	
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/*
 * @Author: chenfangxu
 * @Date: 2022-07-28 10:49:01
 * @Description:
 * @LastEditors: chenfangxu
 * @LastEditTime: 2022-07-28 10:51:39
 * @FilePath: /vscode-linter-example/webpack/index.mjs
 */
// ./src/index.js



const heading = (0,_heading_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

document.body.append(heading)

}();
})()
;