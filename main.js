"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjavascript_capstone"] = self["webpackChunkjavascript_capstone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/my-font.woff2 */ \"./src/font/my-font.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/my-font.woff */ \"./src/font/my-font.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: \\\"fontAwesome\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\");\\r\\n  font-weight: 900;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n.font {\\r\\n  font-family: 'Times New Roman', Times, serif;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.mobile {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 2em 3em;\\r\\n  border-bottom: 1px solid black;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.links {\\r\\n  display: flex;\\r\\n  gap: 1em;\\r\\n  justify-content: flex-end;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.links-li {\\r\\n  color: black;\\r\\n  font-weight: 600;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\na:link {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\na:active {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\na:visited {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.Logo {\\r\\n  max-width: 50px;\\r\\n  padding: 5px;\\r\\n  border-radius: 50%;\\r\\n  border: 1px solid #000;\\r\\n  box-shadow: 0 0 10px #000;\\r\\n}\\r\\n\\r\\n.ul-div {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  bottom: 0;\\r\\n  height: 4em;\\r\\n  padding-left: 1em;\\r\\n  font-weight: 600;\\r\\n  border-top: 1px solid #000;\\r\\n  background-color: grey;\\r\\n}\\r\\n\\r\\n.cards-container {\\r\\n  display: grid;\\r\\n  padding: 3vh 10vw;\\r\\n  gap: 30px;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  max-width: 100vw;\\r\\n  padding: 2vh 3vw 5vh 3vw;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n  border-radius: 10px;\\r\\n  background: #e0e0e0;\\r\\n  box-shadow:\\r\\n    13px 13px 21px #a6a6a6,\\r\\n    -13px -13px 21px #fff;\\r\\n}\\r\\n\\r\\n.card-title {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-between;\\r\\n  min-height: 3vh;\\r\\n  max-width: 80%;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.like-count {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: flex-end;\\r\\n  min-width: 100%;\\r\\n  min-height: 3vh;\\r\\n}\\r\\n\\r\\n.card-header-text {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.card-image {\\r\\n  max-width: 50vw;\\r\\n}\\r\\n\\r\\n.comments-button,\\r\\n.reservations-button {\\r\\n  width: 80%;\\r\\n  border: 2px solid #000;\\r\\n  min-height: 4vh;\\r\\n  box-shadow: 3px 5px 3px #000;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.reservations-button {\\r\\n  min-width: 100%;\\r\\n}\\r\\n\\r\\n.like-movie {\\r\\n  max-width: 10vw;\\r\\n}\\r\\n\\r\\n.popUp-section {\\r\\n  display: flex;\\r\\n  background-color: red;\\r\\n  position: fixed;\\r\\n  padding: 2em;\\r\\n  max-width: 100vw;\\r\\n}\\r\\n\\r\\n.popup-container {\\r\\n  display: none;\\r\\n  justify-content: center;\\r\\n  font-size: 10px;\\r\\n}\\r\\n\\r\\n.containerPopUp {\\r\\n  display: flex;\\r\\n  background-color: #fff;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  top: -10px;\\r\\n  border-radius: 20px;\\r\\n  padding-top: 3em;\\r\\n  gap: 0.5em;\\r\\n  max-width: inherit;\\r\\n  min-height: 100vh;\\r\\n  text-align: center;\\r\\n  border: 5px solid black;\\r\\n}\\r\\n\\r\\n.close-popup {\\r\\n  position: absolute;\\r\\n  right: 0.5em;\\r\\n  top: 0.7em;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.image-popup {\\r\\n  min-width: 60vw;\\r\\n  max-height: 30vh;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  display: flex;\\r\\n  margin-block: 2em;\\r\\n}\\r\\n\\r\\n#comments {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-block-start: 1em;\\r\\n  gap: 0.6em;\\r\\n}\\r\\n\\r\\n.shows-total-number {\\r\\n  font-size: 1rem;\\r\\n  color: #303030c4;\\r\\n}\\r\\n\\r\\n.footer-buttons {\\r\\n  min-width: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n@media (min-width: 760px) {\\r\\n  .mobile {\\r\\n    padding: 1em 10em;\\r\\n  }\\r\\n\\r\\n  .Logo {\\r\\n    max-width: 80px;\\r\\n  }\\r\\n\\r\\n  .links-li {\\r\\n    font-size: 2.2rem;\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    padding-left: 3em;\\r\\n  }\\r\\n\\r\\n  .footer-text {\\r\\n    margin-left: 8vw;\\r\\n    font-size: 1.5rem;\\r\\n  }\\r\\n\\r\\n  .cards-container {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    flex-direction: row;\\r\\n    padding: 3vh 0;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n\\r\\n    /* max-height: 60vh;\\r\\n    overflow-y: scroll; */\\r\\n  }\\r\\n\\r\\n  .card {\\r\\n    max-width: 30vw;\\r\\n  }\\r\\n\\r\\n  .card-image {\\r\\n    max-width: 10vw;\\r\\n  }\\r\\n\\r\\n  .like-movie {\\r\\n    max-width: 2vw;\\r\\n  }\\r\\n\\r\\n  .card-header-text {\\r\\n    font-size: 1rem;\\r\\n  }\\r\\n\\r\\n  .containerPopUp {\\r\\n    display: flex;\\r\\n    background-color: #fff;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    position: fixed;\\r\\n    left: 0;\\r\\n    top: -10px;\\r\\n    border-radius: 20px;\\r\\n    padding: 7em;\\r\\n    gap: 0.5em;\\r\\n    max-width: inherit;\\r\\n    min-height: 100vh;\\r\\n    text-align: center;\\r\\n    border: 5px solid black;\\r\\n  }\\r\\n\\r\\n  .image-popup {\\r\\n    min-width: 10vw;\\r\\n    max-height: 30vh;\\r\\n  }\\r\\n\\r\\n  .shows-total-number {\\r\\n    font-size: 1.5rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_icons_page_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icons/page-logo.png */ \"./src/images/icons/page-logo.png\");\n/* harmony import */ var _modules_CreateCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/CreateCard.js */ \"./src/modules/CreateCard.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n\n\n\n\n\n// create new image?\nconst imageDiv = document.querySelector('.logo-div');\nconst logo = new Image();\nlogo.src = _images_icons_page_logo_png__WEBPACK_IMPORTED_MODULE_1__;\nlogo.alt = 'Movie Logo';\nlogo.className = 'Logo';\nimageDiv.appendChild(logo);\n(0,_modules_CreateCard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n// pop();\nwindow.addEventListener('DOMContentLoaded', _modules_popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n// document.addEventListener('click', (event) => {\n//     if (event.target.className.includes('comments-button')) {\n//         pop();\n//         console.log(commentBtn.length);\n//         }\n// });\n// g56oldW5hMhMsaYERIvY\n\n// ADD COMMENT\n// const add = async () => {\n//   await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/g56oldW5hMhMsaYERIvY/comments', {\n//     method: 'POST',\n//     body: JSON.stringify({ item_id: 3, username: 'Jersh', comment: 'ha' }),\n//     headers: {\n//       'Content-type': 'application/json; charset=UTF-8',\n//     },\n//   })\n//     .then((response) => console.log(response.status));\n// };\n// add();\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/CreateCard.js":
/*!***********************************!*\
  !*** ./src/modules/CreateCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_icons_like_movie_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/icons/like-movie.png */ \"./src/images/icons/like-movie.png\");\n/* harmony import */ var _btnListener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btnListener.js */ \"./src/modules/btnListener.js\");\n\n\n\nconst totalShowsNumber = document.querySelector('.shows-total-number');\n\nconst createCard = async () => {\n  const n = 21;\n  totalShowsNumber.innerText = parseInt((n - 1), 10);\n\n  await fetch('https://api.tvmaze.com/shows').then((response) => response.json()).then((completeResponse) => {\n    for (let i = 1; i < n; i += 1) {\n      // Create card container\n      const cardContainer = document.querySelector('.cards-container');\n      const cardDiv = document.createElement('div');\n      cardDiv.className = 'card';\n      cardDiv.innerHTML = `\n           <img src=\"${completeResponse[i].image.medium}\" alt=\"Card Logo\" class=\"card-image\" />\n           `;\n      cardContainer.appendChild(cardDiv);\n\n      // Create card title and append to container\n      const cardTitle = document.createElement('section');\n      cardTitle.className = 'card-title';\n      cardTitle.innerHTML = `\n      <h2 class=\"font card-header-text\">${completeResponse[i].name}</h2>\n      `;\n      cardDiv.appendChild(cardTitle);\n\n      // Create like show image and append to card container\n      const likeMovieImage = new Image();\n      likeMovieImage.src = _images_icons_like_movie_png__WEBPACK_IMPORTED_MODULE_0__;\n      likeMovieImage.alt = 'Love Card';\n      likeMovieImage.className = 'like-movie';\n      cardTitle.appendChild(likeMovieImage);\n\n      // Create like count div and append to card container\n      const countLikes = document.createElement('section');\n      countLikes.className = 'like-count';\n      countLikes.classList.add = 'font';\n      countLikes.innerText = '0 Like';\n      cardTitle.appendChild(countLikes);\n\n      // add event listener to like movie image\n      likeMovieImage.addEventListener(('click'), () => {\n        if (parseInt((countLikes.innerText), 10) >= 1) {\n          countLikes.innerText = `${(parseInt((countLikes.innerText), 10) + 1)} Likes`;\n        } else {\n          countLikes.innerText = `${(parseInt((countLikes.innerText), 10) + 1)} Like`;\n        }\n      });\n\n      // Create comment button section and append to card container\n      const footerButtons = document.createElement('section');\n      footerButtons.className = 'footer-buttons';\n      footerButtons.innerHTML = `\n          <button class=\"comments-button font\" id=\"btn-${i}\">\n            Comments\n          </button>\n          <button class=\"reservations-button font\">\n          Reservations\n          </button>\n     `;\n      cardTitle.appendChild(footerButtons);\n    }\n  });\n  for (let i = 1; i < n; i += 1) {\n    (0,_btnListener_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(i);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCard);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/CreateCard.js?");

/***/ }),

/***/ "./src/modules/btnListener.js":
/*!************************************!*\
  !*** ./src/modules/btnListener.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ btnListener)\n/* harmony export */ });\n/* harmony import */ var _change_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change.js */ \"./src/modules/change.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\n\n\nfunction btnListener(ar) {\n  const commentBtn = document.getElementById(`btn-${ar}`);\n  // const body = document.querySelector('body');\n  commentBtn.addEventListener('click', () => {\n    const popupContainer = document.getElementById('popup-container');\n    if (popupContainer.style.display === '') {\n      popupContainer.style.display = 'flex';\n    }\n    (0,_change_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ar);\n    (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ar);\n  });\n}\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/btnListener.js?");

/***/ }),

/***/ "./src/modules/change.js":
/*!*******************************!*\
  !*** ./src/modules/change.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ change)\n/* harmony export */ });\nasync function change(ar) {\n  await fetch('https://api.tvmaze.com/shows').then((response) => response.json()).then((completeResponse) => {\n    const imgSrc = document.getElementById('imgSerie');\n    imgSrc.src = completeResponse[ar].image.medium;\n\n    const titleSerie = document.getElementById('titleSerie');\n    titleSerie.innerHTML = `Title: ${completeResponse[ar].name}`;\n\n    const languageSerie = document.getElementById('languageSerie');\n    languageSerie.innerHTML = `Language: ${completeResponse[ar].language}`;\n\n    const siteSerie = document.getElementById('siteSerie');\n    siteSerie.innerHTML = `WebSite: ${completeResponse[ar].officialSite}`;\n\n    const summarySerie = document.getElementById('summarySerie');\n    summarySerie.innerHTML = completeResponse[ar].summary;\n  });\n}\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/change.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst here = async (ar) => {\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/g56oldW5hMhMsaYERIvY/comments?item_id=${ar}`);\n  const json = await response.json();\n  const commentContainer = document.querySelector('#comments');\n  commentContainer.innerHTML = '';\n  json.forEach((tv) => {\n    const row = document.createElement('tr');\n    row.innerHTML = `<h3>${tv.creation_date} ${tv.username}:  ${tv.comment}</h3>`;\n    commentContainer.appendChild(row);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (here);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupContainer = document.querySelector('.popup-container');\nconst body = document.querySelector('body');\n\nconst pop = async () => {\n  const myPop = document.createElement('section');\n  myPop.id = 'popUp-section';\n  myPop.className = 'popUp-section';\n  popupContainer.appendChild(myPop);\n\n  const containerPopUp = document.createElement('div');\n  containerPopUp.className = 'containerPopUp';\n  myPop.appendChild(containerPopUp);\n\n  const imgSerie = document.createElement('img');\n  imgSerie.id = 'imgSerie';\n  imgSerie.className = 'image-popup';\n  // imgSerie.src = completeResponse[i].image.medium;\n  containerPopUp.appendChild(imgSerie);\n\n  const x = document.createElement('h2');\n  x.innerHTML = 'X';\n  x.className = 'close-popup';\n  containerPopUp.appendChild(x);\n  x.addEventListener('click', () => {\n    popupContainer.style.display = '';\n    body.style.overflow = 'none';\n  });\n\n  const description = document.createElement('div');\n  description.className = 'description';\n  containerPopUp.appendChild(description);\n\n  const titleSerie = document.createElement('h2');\n  titleSerie.id = 'titleSerie';\n  // titleSerie.innerHTML = completeResponse[i].name;\n  description.appendChild(titleSerie);\n\n  const languageSerie = document.createElement('h2');\n  languageSerie.id = 'languageSerie';\n  // languageSerie.innerHTML = completeResponse[i].language;\n  description.appendChild(languageSerie);\n\n  const siteSerie = document.createElement('h2');\n  siteSerie.id = 'siteSerie';\n  // siteSerie.innerHTML = completeResponse[i].officialSite;\n  containerPopUp.appendChild(siteSerie);\n\n  const summarySerie = document.createElement('h3');\n  summarySerie.id = 'summarySerie';\n  // summarySerie.innerHTML = completeResponse[i].summary;\n  containerPopUp.appendChild(summarySerie);\n\n  const commentContainer = document.createElement('div');\n  commentContainer.id = 'commentContainer';\n  containerPopUp.appendChild(commentContainer);\n\n  const commentTitle = document.createElement('h2');\n  commentTitle.id = 'commentTitle';\n  commentTitle.innerHTML = 'Comments (X)';\n  commentContainer.appendChild(commentTitle);\n\n  const comments = document.createElement('div');\n  comments.id = 'comments';\n  commentContainer.appendChild(comments);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pop);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/popup.js?");

/***/ }),

/***/ "./src/font/my-font.woff":
/*!*******************************!*\
  !*** ./src/font/my-font.woff ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31d6cfe0d16ae931b73c.woff\";\n\n//# sourceURL=webpack://javascript-capstone/./src/font/my-font.woff?");

/***/ }),

/***/ "./src/font/my-font.woff2":
/*!********************************!*\
  !*** ./src/font/my-font.woff2 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31d6cfe0d16ae931b73c.woff2\";\n\n//# sourceURL=webpack://javascript-capstone/./src/font/my-font.woff2?");

/***/ }),

/***/ "./src/images/icons/like-movie.png":
/*!*****************************************!*\
  !*** ./src/images/icons/like-movie.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"195d9811adf6b391ebce.png\";\n\n//# sourceURL=webpack://javascript-capstone/./src/images/icons/like-movie.png?");

/***/ }),

/***/ "./src/images/icons/page-logo.png":
/*!****************************************!*\
  !*** ./src/images/icons/page-logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57a1848e29052255134f.png\";\n\n//# sourceURL=webpack://javascript-capstone/./src/images/icons/page-logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);