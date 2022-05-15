/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webpackHotDevClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webpackHotDevClient */ \"./webpackHotDevClient.js\");\n/* harmony import */ var _webpackHotDevClient__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_webpackHotDevClient__WEBPACK_IMPORTED_MODULE_0__);\n\r\nlet root = document.getElementById('root')\r\nfunction render() {\r\n  let title = __webpack_require__(/*! ./title */ \"./src/title.js\");\r\n  root.innerHTML = title\r\n}\r\nrender()\r\n\r\nif(false) {}\n\n//# sourceURL=webpack://webpack_HMR/./src/index.js?");

/***/ }),

/***/ "./src/title.js":
/*!**********************!*\
  !*** ./src/title.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports= \"hello11\";\n\n//# sourceURL=webpack://webpack_HMR/./src/title.js?");

/***/ }),

/***/ "./webpackHotDevClient.js":
/*!********************************!*\
  !*** ./webpackHotDevClient.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let socket = io(\"/\")//先通过socket.io连接服务器\r\nlet currentHash//当前hash\r\nlet lastHash//上一次的hash\r\nconst onConnected = () => {\r\n  console.log('客户端已连接');\r\n  // 6、客户端监听到此hash消息\r\n  socket.on('hash',(hash) => {\r\n    currentHash = hash\r\n  })\r\n  // 7、客户端收到ok的信息\r\n  socket.on(\"ok\",() => {\r\n    hotCheck()\r\n  })\r\n  socket.on(\"disconnect\", () => {\r\n    lastHash = currentHash = null\r\n  })\r\n}\r\n// 8、执行hotcheck方法进行更新\r\nfunction hotCheck() {\r\n  if(!lastHash || lastHash === currentHash) {\r\n    return (lastHash = currentHash)\r\n  }\r\n  // 9、向server端发送ajax请求，服务端返回一个hot-update.json文件，该文件包含了所有要更新的模块\r\n  hotDownloadManifest().then((update) => {\r\n    let chunksId = Object.keys(update.c)//['main']\r\n    chunksId.forEach((chunkId) => {\r\n      // 10、通过JSONP请求获取到最新的模块代码\r\n      hotDownloadUpdateChunk(chunkId)\r\n    })\r\n  })\r\n}\r\n\r\nfunction hotDownloadUpdateChunk(chunkId) {\r\n  var script = document.createElement(\"script\")\r\n  script.charset = \"utf-8\"\r\n  script.src = \"/\" + chunkId + \".\" + lastHash + \".hot-update.js\"\r\n  document.head.appendChild(script)\r\n}\r\n\r\nfunction hotDownloadManifest() {\r\n  var url = \"/\" + lastHash + \".hot-update.json\"\r\n  return fetch(url).then(res => res.json()).catch(err => console.log(res.text()))\r\n}\r\n// 11、补丁JS取回来后会调用webpackHotUpdate方法\r\nwindow.webpackHotUpdate = (chunkId, moreModules) => {\r\n  console.log(moreModules);\r\n  for(let moduleId in moreModules) {\r\n    let oldModule = __webpack_require__.c[moduleId]//获取老模块\r\n    let { parents, children } = oldModule\r\n    var module = (__webpack_require__.c[moduleId] = {\r\n      i: moduleId,\r\n      export: {},\r\n      parents,\r\n      children,\r\n      hot: window.hotCreateModule()\r\n    });\r\n    moreModules[moduleId].call(\r\n      module.exports,\r\n      module,\r\n      module.exports,\r\n      __webpack_require__\r\n    )\r\n    parents.forEach((parent) => {\r\n      let parentModule = __webpack_require__.c[parent]\r\n      parentModule && parentModule.hot._acceptedDependencies[moduleId] && parentModule.hot._acceptedDependencies[moduleId]() \r\n    })\r\n    lastHash = currentHash\r\n  }\r\n}\r\nsocket.on(\"connect\", onConnected)\r\nwindow.hotCreateModule = () => {\r\n  var hot = {\r\n    _acceptedDependencies: {},//依赖收集\r\n    accept: function(dep, callback) {\r\n      for(var i=0; i<dep.length; i++) {\r\n        hot._acceptedDependencies[dep[i]] = callback\r\n      }\r\n    }\r\n  }\r\n  return hot\r\n}\n\n//# sourceURL=webpack://webpack_HMR/./webpackHotDevClient.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;