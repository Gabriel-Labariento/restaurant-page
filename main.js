/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* 1. Use a more-intuitive box-sizing model */\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  \n  /* 2. Remove default margin */\n  * {\n    margin: 0;\n  }\n  \n  body {\n    /* 3. Add accessible line-height */\n    line-height: 1.5;\n    /* 4. Improve text rendering */\n    -webkit-font-smoothing: antialiased;\n  }\n  \n  /* 5. Improve media defaults */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  \n  /* 6. Inherit fonts for form controls */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  \n  /* 7. Avoid text overflows */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  \n  /* 8. Improve line wrapping */\n  p {\n    text-wrap: pretty;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    text-wrap: balance;\n  }\n  \n  /*\n    9. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }\n\n  :root{\n    --smokyBlack: #0D0601;\n    --charcoal: #2D4C61;\n    --ashGray: #BEC9BD;\n    --kobicha: #603C13;\n  }\n\nbody {\n    min-height: 100vh;\n    background-color: var(--smokyBlack);\n    display: flex;\n    flex-direction: column;\n}\n\nnav {\n    background-color:var(--charcoal);\n    height:fit-content;\n    display: flex;\n    justify-content: space-around;\n    padding: 10px;\n}\n\n#content {\n  flex: 1;\n}\n\nimg {\n    height: 500px;\n    width: auto;\n}\n\nbutton {\n    padding: 10px;\n    outline: none;\n    background-color: var(--charcoal);\n    border: none;\n    color: white;\n    font-weight: bold;\n    font-size: 1.1rem;\n}\n\nbutton:hover{\n    cursor: pointer;\n    border-bottom: 1px solid white;\n}\n\n.main-container {\n    display: grid;\n    grid-template-rows: 40px 1fr;\n    grid-template-columns: 1fr 3fr;\n    grid-template-areas: \n    \"image title\"\n    \"image description\";\n    row-gap: 20px;\n    height: 100%;\n    padding: 20px;\n    color: var(--ashGray);\n}\n\n.image{\n    grid-area: image;\n}\n\n.name{\n    grid-area: title;\n}\n\n.description{\n    grid-area: description;\n    max-width: 1000px;\n}\n\n.menu-container{\n  width: 100%;\n  min-height: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 500px;\n  gap: 10px;\n  padding: 20px;\n}\n\n.food-container {\n  background-color: var(--ashGray);\n  border-radius: 20px;\n  grid-template-rows: 2fr 1fr 1fr;\n  grid-template-areas: \"image\" \"image\" \"name\" \"description\";\n  text-align: center;\n  align-content: center;\n}\n\n.food-image{\n  padding: 20px;\n  height: 300px;\n  grid-area: image;\n  justify-self: center;\n  border-radius: 10px;\n}\n\n.food-title{\n  grid-area: name;\n}\n\n.food-description {\n  grid-area: description;\n}\n\n.about-container{\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-rows: 1fr;\n  gap: 10px;\n  padding: 20px 120px 20px 120px; \n}\n\n.about-text-container, .about-image-container{\n  height: 600px;\n  display: grid;\n}\n\n.restaurant-image {\n  height: 600px;\n  justify-self: end;\n}\n\n.about-text-container{\n  grid-template-rows: 40px 200px 40px;\n  gap: 30px;\n  padding-top: 100px;\n}\n\n.about-title, .about-description{\n  color: var(--ashGray)\n}\n\n.about-button {\n  width: 250px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAbout: () => (/* binding */ displayAbout)\n/* harmony export */ });\n/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ \"./src/restaurant.jpg\");\n\n\nconst displayAbout = function(){\n    // Create the main container\n    const contentDiv = document.querySelector(\"#content\");\n    contentDiv.removeChild(contentDiv.firstElementChild);\n\n    // Create the about-container div\n    const aboutContainer = document.createElement('div');\n    aboutContainer.classList.add('about-container');\n\n    // Create the about-text-container div\n    const aboutTextContainer = document.createElement('div');\n    aboutTextContainer.classList.add('about-text-container');\n\n    // Create and add the title\n    const aboutTitle = document.createElement('h1');\n    aboutTitle.classList.add('about-title');\n    aboutTitle.textContent = \"Experience Matthew's\";\n    aboutTextContainer.appendChild(aboutTitle);\n\n    // Create and add the description paragraph\n    const aboutDescription = document.createElement('p');\n    aboutDescription.classList.add('about-description');\n    aboutDescription.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed dictum neque, id dictum mi. Donec non lorem non leo laoreet ultrices. Etiam semper magna eu justo ultrices, vitae semper odio volutpat. Aliquam molestie scelerisque purus, eget varius nibh convallis ut. Cras elementum diam accumsan consectetur sodales. Nulla fringilla vitae urna at egestas. Maecenas ultrices velit a velit ullamcorper sodales. Nulla dictum ipsum sed ex hendrerit pretium. Praesent ac augue orci. Nunc commodo, ex quis consequat luctus, lorem eros efficitur velit, at eleifend ligula ante nec mi. Aenean in fringilla nibh. In dictum hendrerit ex ut feugiat.`;\n    aboutTextContainer.appendChild(aboutDescription);\n\n    // Create and add the button\n    const aboutButton = document.createElement('button');\n    aboutButton.classList.add('about-button');\n    aboutButton.textContent = 'Make A Reservation';\n    aboutTextContainer.appendChild(aboutButton);\n\n    // Add the text container to the about-container\n    aboutContainer.appendChild(aboutTextContainer);\n\n    // Create the about-image-container div\n    const aboutImageContainer = document.createElement('div');\n    aboutImageContainer.classList.add('about-image-container');\n\n    // Create and add the image\n    const restaurantImage = document.createElement('img');\n    restaurantImage.classList.add('restaurant-image');\n    restaurantImage.setAttribute('src', _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__);\n    restaurantImage.setAttribute('alt', 'restaurant-image');\n    aboutImageContainer.appendChild(restaurantImage);\n\n    // Add the image container to the about-container\n    aboutContainer.appendChild(aboutImageContainer);\n\n    // Add the about-container to the content div\n    contentDiv.appendChild(aboutContainer);\n}\n\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial.js */ \"./src/initial.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n(0,_initial_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad)();\n\nconst homeButton = document.querySelector(\".home-button\");\nconst menuButton = document.querySelector(\".menu-button\");\nconst aboutButton = document.querySelector(\".about-button\");\n\nhomeButton.addEventListener(\"click\", () => (0,_initial_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad)());\nmenuButton.addEventListener(\"click\", () => (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.displayMenu)());\naboutButton.addEventListener(\"click\", () => (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.displayAbout)());    \n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.jpg */ \"./src/food.jpg\");\n\n\nconst pageLoad = function() {\n\n    const content = document.querySelector(\"#content\");\n    content.removeChild(content.firstElementChild);\n\n    const container = document.createElement(\"div\");\n    container.classList.add(\"main-container\")\n\n    const image = document.createElement(\"img\");\n    image.src = _food_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.classList.add(\"image\")\n\n    const name = document.createElement(\"h1\")\n    name.textContent = \"Matthew's\"\n    name.classList.add(\"name\")\n\n    const description = document.createElement(\"p\");\n    description.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis aliquet sollicitudin. Nunc semper elementum magna suscipit ultrices. Sed sagittis libero turpis, vel faucibus ligula blandit vitae. Etiam cursus mollis purus sit amet tempus. Maecenas sed tristique mauris. Etiam condimentum turpis non nunc pellentesque accumsan. Donec vel ipsum ultricies, hendrerit magna porttitor, lacinia est. In molestie, augue id laoreet venenatis, enim arcu convallis elit, eget rhoncus dolor urna accumsan erat. Etiam pellentesque magna in nibh suscipit rutrum. Nunc eu semper nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut suscipit nisl, vel semper sapien. Nam rutrum scelerisque lectus vel gravida.\"\n    description.classList.add(\"description\")\n\n    container.appendChild(image);\n    container.appendChild(name);\n    container.appendChild(description);\n\n    content.appendChild(container);\n};\n\n\n\n//# sourceURL=webpack:///./src/initial.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenu: () => (/* binding */ displayMenu)\n/* harmony export */ });\n/* harmony import */ var _appetizer_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appetizer.jpg */ \"./src/appetizer.jpg\");\n/* harmony import */ var _burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger.jpg */ \"./src/burger.jpg\");\n/* harmony import */ var _desert_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desert.jpg */ \"./src/desert.jpg\");\n\n\n\n\nconst displayMenu = function(){\n\n    const contentDiv = document.querySelector(\"#content\");\n    contentDiv.removeChild(contentDiv.firstElementChild);\n\n    const menuContainer = document.createElement(\"div\")\n    menuContainer.setAttribute(\"class\", \"menu-container\");\n\n    const appetizerContainer = document.createElement(\"div\");\n    appetizerContainer.setAttribute(\"class\", \"food-container\");\n    const appetizerImage = document.createElement(\"img\");\n    appetizerImage.setAttribute(\"src\", _appetizer_jpg__WEBPACK_IMPORTED_MODULE_0__);\n    appetizerImage.setAttribute(\"class\", \"food-image\");\n    const appetizerTitle = document.createElement(\"h1\");\n    appetizerTitle.textContent = \"Bread with Egg\"\n    appetizerTitle.setAttribute(\"class\", \"food-title\")\n    const appetizerDescription = document.createElement(\"p\")\n    appetizerDescription.setAttribute(\"class\", \"food-description\");\n    appetizerDescription.textContent = \"Nam eu hendrerit purus. Donec tempor ultrices eros, quis fringilla ex scelerisque eget. Aenean tincidunt posuere dolor viverra pharetra. Ut ultricies nisl eu velit lobortis venenatis. Vestibulum sed diam ultricies, efficitur ipsum et, dignissim nunc. \"\n    appetizerContainer.appendChild(appetizerImage);\n    appetizerContainer.appendChild(appetizerTitle);\n    appetizerContainer.appendChild(appetizerDescription);\n    menuContainer.appendChild(appetizerContainer);\n\n\n    const burgerContainer = document.createElement(\"div\")\n    burgerContainer.setAttribute(\"class\", \"food-container\");\n    const burgerImage = document.createElement(\"img\");\n    burgerImage.setAttribute(\"src\", _burger_jpg__WEBPACK_IMPORTED_MODULE_1__);\n    burgerImage.setAttribute(\"class\", \"food-image\");\n    const burgerTitle = document.createElement(\"h1\");\n    burgerTitle.setAttribute(\"class\", \"food-title\");\n    burgerTitle.textContent = \"Big Burger\";\n    const burgerDescription = document.createElement(\"p\");\n    burgerDescription.setAttribute(\"class\", \"food-description\");\n    burgerDescription.textContent = appetizerDescription.textContent;\n    burgerContainer.appendChild(burgerImage);\n    burgerContainer.appendChild(burgerTitle);\n    burgerContainer.appendChild(burgerDescription);\n    menuContainer.appendChild(burgerContainer);\n\n\n\n    const desertContainer = document.createElement(\"div\")\n    desertContainer.setAttribute(\"class\", \"food-container\");\n    const desertImage = document.createElement(\"img\");\n    desertImage.setAttribute(\"src\", _desert_jpg__WEBPACK_IMPORTED_MODULE_2__)\n    desertImage.setAttribute(\"class\", \"food-image\");\n    const desertTitle = document.createElement(\"h1\");\n    desertTitle.setAttribute(\"class\", \"food-title\");\n    desertTitle.textContent = \"Cheesecake\";\n    const desertDescription = document.createElement(\"p\");\n    desertDescription.setAttribute(\"class\", \"food-description\");\n    desertDescription.textContent = appetizerDescription.textContent;\n    desertContainer.appendChild(desertImage);\n    desertContainer.appendChild(desertTitle);\n    desertContainer.appendChild(desertDescription);\n    menuContainer.appendChild(desertContainer);\n\n\n    contentDiv.appendChild(menuContainer)\n}\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/appetizer.jpg":
/*!***************************!*\
  !*** ./src/appetizer.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d2f79375015dfb071364.jpg\";\n\n//# sourceURL=webpack:///./src/appetizer.jpg?");

/***/ }),

/***/ "./src/burger.jpg":
/*!************************!*\
  !*** ./src/burger.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fcc4fdf4aeb2bc4e7452.jpg\";\n\n//# sourceURL=webpack:///./src/burger.jpg?");

/***/ }),

/***/ "./src/desert.jpg":
/*!************************!*\
  !*** ./src/desert.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a64319b0f99d011cf3b.jpg\";\n\n//# sourceURL=webpack:///./src/desert.jpg?");

/***/ }),

/***/ "./src/food.jpg":
/*!**********************!*\
  !*** ./src/food.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d51c6b869f6323995d4.jpg\";\n\n//# sourceURL=webpack:///./src/food.jpg?");

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74b4399ded770414f20c.jpg\";\n\n//# sourceURL=webpack:///./src/restaurant.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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