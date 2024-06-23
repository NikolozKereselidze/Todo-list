/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Sidebar */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.sidebar {
  min-width: 16vw;
  height: 100vh;
  padding-top: 1.4rem;
  padding-left: 1.8rem;

  background-color: #f7f7f7;
}

.icon-div {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.avatar-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.icon-text {
  font-size: 1.1rem;
}

.sidebar-ul {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding-top: 2rem;
  padding-left: 0.6rem;
}

.sidebar-ul > div {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.sidebar-ul > div > i {
  cursor: pointer;
}

.sidebar-ul > div:last-child {
  position: relative;
}

.fa-inbox {
  color: #246fe0;
}

.fa-calendar {
  color: #058527;
}

.fa-rectangle-history {
  color: #692fc2;
}

.sidebar-li ~ .fa-plus {
  font-size: 1.1rem;
  font-weight: 400;
  position: absolute;
  right: 8px;
  transition: color 0.2s;
}

.fa-plus:hover {
  color: #692fc2;
}

.sidebar-li {
  list-style: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
  transition: all 0.2s;
}

.sidebar-li:hover,
.modal-buttons > button:hover {
  transform: translateY(-3px);
}

/* Project Modal */
.main-section {
  display: flex;
  width: 100vw;
  transition: all 0.2s;
}

.background-opacity {
  background: rgba(0, 0, 0, 0.35);
}

.modal-overlay,
.task-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;

  /* display: none; */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in, visibility 0.2s ease-out;
  z-index: -1;
}

.modal {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.3rem;
  min-width: 30rem;
  min-height: 12rem;
}

.modal > h3 {
  margin-bottom: 1.2rem;
  font-weight: 500;
  font-size: 1.2rem;
}

.modal > label {
  margin-bottom: 0.4rem;
  font-weight: 400;
}

.modal > input {
  padding: 0.4rem 0.8rem;
  border: 1px solid #ced4da;
  border-radius: 0.4rem;
}

.modal > input:focus {
  outline: none;
  border: 1px solid #ff3c00d2;
}

.modal-buttons {
  display: flex;
  justify-content: end;
  gap: 0.6rem;
  margin-top: 1.4rem;
}

.close-modal:hover {
  background-color: #ff3c00d2;
  color: #fff;
}

.add-project:hover,
.add-task:hover {
  background-color: #058527;
  color: #fff;
}

.close-modal,
.add-project,
.add-task {
  cursor: pointer;
  padding: 0.6rem 0.8rem;
  border: none;
  border-radius: 0.4rem;
  transition: all 0.2s;
}

.active {
  opacity: 1;
  visibility: visible;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-div {
  display: flex;
  margin: 1rem 0.4rem 1.2rem 3.2rem;
  transition: all 0.2s;
  padding: 0.1rem;
  border-radius: 2px;
}

.project-div > span {
  cursor: pointer;
  margin-left: 0.2rem;
  color: #131313bd;
}

.project-div:hover {
  background-color: #fff;
}

.filled-input {
  border-color: #058527 !important;
}

/* Creating task */
.task-div {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.task-modal > .modal {
  justify-content: center;
  min-width: 50vw;
  min-height: 50vh;
  row-gap: 0.8rem;
}

.task-header {
  margin: 0;
  padding: 0;
  color: #404040;
  font-size: 1.7rem;
  font-weight: 400;
}

.task-div > .fa-plus,
.task-modal--header > .fa-close {
  cursor: pointer;
  font-size: 1.2rem;
}

.task-modal--header {
  display: flex;
  justify-content: space-between;
}

.task-modal--header > h5 {
  font-size: 1.3rem;
}

.task-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  height: 100%;
  width: 100%;

  row-gap: 1rem;
  column-gap: 0.9rem;
}

.task-form > div {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.task-form > div > label {
  font-size: 1.05rem;
}

#task-title,
#task-date {
  padding: 0 2.4rem 1.2rem 0;
  max-height: 2.6rem;
}

#task-description {
  min-height: 9rem;
  min-width: 9rem;
}

.task-form > div:first-child {
  grid-column: 1/2;
  grid-row: 1/2;
}

.task-form > div:nth-child(2) {
  grid-column: 2;
  grid-row: 1/2;
}

.task-form > div:nth-child(3) {
  grid-column: 1/2;
  grid-row: 2/-1;
  height: 100%;
}

.task-form > div:nth-child(4) {
  grid-column: 2;
  grid-row: 2/3;
}

.task-form > div:nth-child(4) > div {
  display: flex;
  gap: 0.4rem;
}

.active-project {
  color: #000 !important;
  font-weight: 500;
}

.disable {
  pointer-events: none;
}

.task-modal--buttons {
  grid-row: 4 / -1;
  grid-column: 1 / -1;
  display: flex;
  justify-content: end;
  gap: 0.4rem;
}

/* TASKS */
.task-section,
.today-task--section {
  width: 100%;
  padding: 8rem 5rem 0 5rem;
}

.task-container {
  padding: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  gap: 1.4rem;
}

.task-information {
  background: #692fc2;
  color: #fff;
  display: flex;
  flex-direction: column;

  width: 20rem;
  min-height: 200px;
  padding: 0.8rem 1.2rem;
  border-radius: 1rem;
  gap: 1rem;
}

.task-header--container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fa-check-to-slot,
.fa-xmark-to-slot {
  font-size: 1.2rem;
  cursor: pointer;
}
.fa-xmark-to-slot {
  color: red;
}

.fa-check-to-slot {
  color: #06b534;
}

.task-footer--container {
  display: flex;
  height: 100%;
  gap: 0.7rem;
  align-items: flex-end;
  justify-content: space-between;
}

time {
  margin-left: 0.4rem;
}

.task-information > div > .fa-calendar {
  color: #692fc2;
  background-color: #fff;
  padding: 0.4rem 0.6rem;
  border-radius: 0.4rem;
  gap: 0.4rem;
  margin-right: 0.2rem;
  font-size: 0.9rem;
}

.fa-gauge-low,
.fa-gauge,
.fa-gauge-high,
.fa-user {
  font-size: 1.3rem;
  cursor: pointer;
}

.fa-gauge-low {
  color: #06b534;
}

.fa-gauge {
  color: #efef08cc;
}

.fa-gauge-high {
  color: #e90202da;
}

.fa-user {
  font-size: 1.2rem;
}

.fa-user > span {
  margin-left: 0.4rem;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Sidebar */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.sidebar {\n  min-width: 16vw;\n  height: 100vh;\n  padding-top: 1.4rem;\n  padding-left: 1.8rem;\n\n  background-color: #f7f7f7;\n}\n\n.icon-div {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n\n.avatar-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.icon-text {\n  font-size: 1.1rem;\n}\n\n.sidebar-ul {\n  display: flex;\n  flex-direction: column;\n  gap: 1.4rem;\n  padding-top: 2rem;\n  padding-left: 0.6rem;\n}\n\n.sidebar-ul > div {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n}\n\n.sidebar-ul > div > i {\n  cursor: pointer;\n}\n\n.sidebar-ul > div:last-child {\n  position: relative;\n}\n\n.fa-inbox {\n  color: #246fe0;\n}\n\n.fa-calendar {\n  color: #058527;\n}\n\n.fa-rectangle-history {\n  color: #692fc2;\n}\n\n.sidebar-li ~ .fa-plus {\n  font-size: 1.1rem;\n  font-weight: 400;\n  position: absolute;\n  right: 8px;\n  transition: color 0.2s;\n}\n\n.fa-plus:hover {\n  color: #692fc2;\n}\n\n.sidebar-li {\n  list-style: none;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 400;\n  transition: all 0.2s;\n}\n\n.sidebar-li:hover,\n.modal-buttons > button:hover {\n  transform: translateY(-3px);\n}\n\n/* Project Modal */\n.main-section {\n  display: flex;\n  width: 100vw;\n  transition: all 0.2s;\n}\n\n.background-opacity {\n  background: rgba(0, 0, 0, 0.35);\n}\n\n.modal-overlay,\n.task-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0 auto;\n\n  /* display: none; */\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s ease-in, visibility 0.2s ease-out;\n  z-index: -1;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  background-color: #fff;\n  border-radius: 0.3rem;\n  min-width: 30rem;\n  min-height: 12rem;\n}\n\n.modal > h3 {\n  margin-bottom: 1.2rem;\n  font-weight: 500;\n  font-size: 1.2rem;\n}\n\n.modal > label {\n  margin-bottom: 0.4rem;\n  font-weight: 400;\n}\n\n.modal > input {\n  padding: 0.4rem 0.8rem;\n  border: 1px solid #ced4da;\n  border-radius: 0.4rem;\n}\n\n.modal > input:focus {\n  outline: none;\n  border: 1px solid #ff3c00d2;\n}\n\n.modal-buttons {\n  display: flex;\n  justify-content: end;\n  gap: 0.6rem;\n  margin-top: 1.4rem;\n}\n\n.close-modal:hover {\n  background-color: #ff3c00d2;\n  color: #fff;\n}\n\n.add-project:hover,\n.add-task:hover {\n  background-color: #058527;\n  color: #fff;\n}\n\n.close-modal,\n.add-project,\n.add-task {\n  cursor: pointer;\n  padding: 0.6rem 0.8rem;\n  border: none;\n  border-radius: 0.4rem;\n  transition: all 0.2s;\n}\n\n.active {\n  opacity: 1;\n  visibility: visible;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.project-div {\n  display: flex;\n  margin: 1rem 0.4rem 1.2rem 3.2rem;\n  transition: all 0.2s;\n  padding: 0.1rem;\n  border-radius: 2px;\n}\n\n.project-div > span {\n  cursor: pointer;\n  margin-left: 0.2rem;\n  color: #131313bd;\n}\n\n.project-div:hover {\n  background-color: #fff;\n}\n\n.filled-input {\n  border-color: #058527 !important;\n}\n\n/* Creating task */\n.task-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.task-modal > .modal {\n  justify-content: center;\n  min-width: 50vw;\n  min-height: 50vh;\n  row-gap: 0.8rem;\n}\n\n.task-header {\n  margin: 0;\n  padding: 0;\n  color: #404040;\n  font-size: 1.7rem;\n  font-weight: 400;\n}\n\n.task-div > .fa-plus,\n.task-modal--header > .fa-close {\n  cursor: pointer;\n  font-size: 1.2rem;\n}\n\n.task-modal--header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-modal--header > h5 {\n  font-size: 1.3rem;\n}\n\n.task-form {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  align-items: center;\n  height: 100%;\n  width: 100%;\n\n  row-gap: 1rem;\n  column-gap: 0.9rem;\n}\n\n.task-form > div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n\n.task-form > div > label {\n  font-size: 1.05rem;\n}\n\n#task-title,\n#task-date {\n  padding: 0 2.4rem 1.2rem 0;\n  max-height: 2.6rem;\n}\n\n#task-description {\n  min-height: 9rem;\n  min-width: 9rem;\n}\n\n.task-form > div:first-child {\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n\n.task-form > div:nth-child(2) {\n  grid-column: 2;\n  grid-row: 1/2;\n}\n\n.task-form > div:nth-child(3) {\n  grid-column: 1/2;\n  grid-row: 2/-1;\n  height: 100%;\n}\n\n.task-form > div:nth-child(4) {\n  grid-column: 2;\n  grid-row: 2/3;\n}\n\n.task-form > div:nth-child(4) > div {\n  display: flex;\n  gap: 0.4rem;\n}\n\n.active-project {\n  color: #000 !important;\n  font-weight: 500;\n}\n\n.disable {\n  pointer-events: none;\n}\n\n.task-modal--buttons {\n  grid-row: 4 / -1;\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: end;\n  gap: 0.4rem;\n}\n\n/* TASKS */\n.task-section,\n.today-task--section {\n  width: 100%;\n  padding: 8rem 5rem 0 5rem;\n}\n\n.task-container {\n  padding: 1.2rem;\n  display: flex;\n  flex-wrap: wrap;\n  /* justify-content: space-around; */\n  gap: 1.4rem;\n}\n\n.task-information {\n  background: #692fc2;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n\n  width: 20rem;\n  min-height: 200px;\n  padding: 0.8rem 1.2rem;\n  border-radius: 1rem;\n  gap: 1rem;\n}\n\n.task-header--container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.fa-check-to-slot,\n.fa-xmark-to-slot {\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n.fa-xmark-to-slot {\n  color: red;\n}\n\n.fa-check-to-slot {\n  color: #06b534;\n}\n\n.task-footer--container {\n  display: flex;\n  height: 100%;\n  gap: 0.7rem;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n\ntime {\n  margin-left: 0.4rem;\n}\n\n.task-information > div > .fa-calendar {\n  color: #692fc2;\n  background-color: #fff;\n  padding: 0.4rem 0.6rem;\n  border-radius: 0.4rem;\n  gap: 0.4rem;\n  margin-right: 0.2rem;\n  font-size: 0.9rem;\n}\n\n.fa-gauge-low,\n.fa-gauge,\n.fa-gauge-high,\n.fa-user {\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n\n.fa-gauge-low {\n  color: #06b534;\n}\n\n.fa-gauge {\n  color: #efef08cc;\n}\n\n.fa-gauge-high {\n  color: #e90202da;\n}\n\n.fa-user {\n  font-size: 1.2rem;\n}\n\n.fa-user > span {\n  margin-left: 0.4rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/images/avatar.jpg":
/*!*******************************!*\
  !*** ./src/images/avatar.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/avatar.jpg");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEl: () => (/* binding */ createEl),
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/modules/createTask.js");
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial */ "./src/modules/initial.js");



const main = document.querySelector(".main-section");

function createEl(el, text) {
  const element = document.createElement(el);
  element.textContent = text;
  return element;
}

function createProject() {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("modal-overlay");

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("modal");

  const modalButtons = document.createElement("div");
  modalButtons.classList.add("modal-buttons");

  const projectMessage = createEl("h3", "New Project");

  const projectName = createEl("label", "Project Name:");
  projectName.setAttribute("for", "project-title");

  const projectInput = document.createElement("input");
  projectInput.setAttribute("id", "project-title");
  projectInput.setAttribute("name", "project-title");

  const closeButton = createEl("button", "Close");
  closeButton.classList.add("close-modal");

  closeButton.addEventListener("click", () => {
    (0,_initial__WEBPACK_IMPORTED_MODULE_1__.projectClickHandler)(".modal-overlay");
  });

  const addButton = createEl("button", "Add Project");
  addButton.classList.add("add-project");

  addButton.addEventListener("click", () => {
    const projectName = projectInput.value;
    if (projectName) {
      const projects = JSON.parse(localStorage.getItem("projects")) || {};
      projects[projectName] = projects[projectName] || [];
      localStorage.setItem("projects", JSON.stringify(projects));

      const createdProjectDiv = document.createElement("div");
      createdProjectDiv.classList.add("project-div");
      const createdProjectName = document.createElement("span");
      createdProjectName.textContent = projectName;

      createdProjectDiv.appendChild(createdProjectName);
      document.querySelector(".sidebar").appendChild(createdProjectDiv);

      (0,_initial__WEBPACK_IMPORTED_MODULE_1__.projectClickHandler)(".modal-overlay");
      projectInput.value = "";
      (0,_createTask__WEBPACK_IMPORTED_MODULE_0__.selectProject)();
    }
  });

  projectInput.addEventListener("input", () => {
    if (projectInput.value) {
      projectInput.classList.add("filled-input");
    } else {
      projectInput.classList.remove("filled-input");
    }
  });

  modalButtons.appendChild(closeButton);
  modalButtons.appendChild(addButton);

  projectContainer.appendChild(projectMessage);
  projectContainer.appendChild(projectName);
  projectContainer.appendChild(projectInput);
  projectContainer.appendChild(modalButtons);

  projectDiv.appendChild(projectContainer);
  main.appendChild(projectDiv);
}


/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   selectProject: () => (/* binding */ selectProject)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");
/* harmony import */ var _displayTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTask */ "./src/modules/displayTask.js");
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial */ "./src/modules/initial.js");




const taskDiv = document.createElement("div");
const taskSection = document.createElement("div");
const taskForm = document.createElement("form");
const mainSection = document.querySelector(".main-section");
let taskModalDiv;

function selectProject() {
  const projectDivs = document.querySelectorAll(".project-div");
  if (projectDivs.length > 0) {
    projectDivs.forEach((projectDiv) => {
      const projectSpan = projectDiv.children[0];
      projectSpan.addEventListener("click", () => {
        const isActive = document.querySelector(".active-project");
        if (isActive) {
          isActive.classList.remove("active-project");
          isActive.dataset.taskDisplayed = "false";
        }
        projectSpan.classList.toggle("active-project");

        taskDiv.classList.add("task-div");
        taskSection.classList.add("task-section");
        createTask(projectSpan.textContent, taskDiv);

        if (projectSpan.dataset.taskDisplayed !== "true") {
          (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.displayTask)();
          // Set the data attribute to indicate that displayTask has been called
          projectSpan.dataset.taskDisplayed = "true";
        }
      });
    });
  }
}

function createTask(projectName, taskDiv) {
  taskDiv.innerHTML = "";
  const taskHeader = document.createElement("span");
  taskHeader.textContent = projectName;
  taskHeader.classList.add("task-header");
  const plusIcon = (0,_initial__WEBPACK_IMPORTED_MODULE_2__.createIcon)("fa-plus");
  taskDiv.appendChild(taskHeader);
  taskDiv.appendChild(plusIcon);
  taskSection.appendChild(taskDiv);
  mainSection.appendChild(taskSection);

  plusIcon.addEventListener("click", () => {
    if (!taskModalDiv) {
      // Check if modal already exists
      createTaskModal();
      (0,_initial__WEBPACK_IMPORTED_MODULE_2__.projectClickHandler)(".task-modal");
    } else {
      taskModalDiv.innerHTML = "";
      createTaskModal();
      (0,_initial__WEBPACK_IMPORTED_MODULE_2__.projectClickHandler)(".task-modal");
    }
  });
}

function createTaskInput(placeholder, name, taskModalBody) {
  const taskInputDiv = document.createElement("div");
  const label = document.createElement("label");
  const radioContainer = document.createElement("div");
  taskForm.classList.add("task-form");
  label.textContent = placeholder;
  label.setAttribute("for", name);

  if (placeholder === "Description:") {
    const textarea = document.createElement("textarea");
    textarea.required = true;
    textarea.setAttribute("id", name);
    textarea.setAttribute("name", name);
    taskInputDiv.appendChild(label);
    taskInputDiv.appendChild(textarea);
  } else {
    const input = document.createElement("input");
    input.required = true;

    input.setAttribute("id", name);
    input.setAttribute("name", name);

    if (placeholder === "Date:") {
      input.type = "date";
      const today = new Date().toISOString().split("T")[0];
      input.setAttribute("min", today);
    }

    if (placeholder === "Priority:") {
      const priorities = ["Low", "Medium", "High"];
      priorities.forEach((priority) => {
        const radioLabel = document.createElement("label");
        radioLabel.textContent = priority;

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.required = true;
        radioInput.name = name;
        radioInput.classList.add("task-priority");

        radioInput.value = priority.toLowerCase();

        radioContainer.appendChild(radioInput);
        radioContainer.appendChild(radioLabel);
      });

      taskInputDiv.appendChild(label);
      taskInputDiv.appendChild(radioContainer);
    } else {
      taskInputDiv.appendChild(label);
      taskInputDiv.appendChild(input);
    }
  }

  taskForm.appendChild(taskInputDiv);

  taskModalBody.appendChild(taskForm);

  return taskInputDiv;
}

function createTaskModal() {
  taskModalDiv = document.createElement("div");
  taskModalDiv.classList.add("task-modal");

  const taskModalHeader = document.createElement("div");
  taskModalHeader.classList.add("task-modal--header");

  const taskTitle = document.createElement("h5");
  taskTitle.textContent = "New Task";

  const closeIcon = (0,_initial__WEBPACK_IMPORTED_MODULE_2__.createIcon)("fa-close");

  taskModalHeader.appendChild(taskTitle);
  taskModalHeader.appendChild(closeIcon);

  closeIcon.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    (0,_initial__WEBPACK_IMPORTED_MODULE_2__.projectClickHandler)(".task-modal");
    taskForm.innerHTML = "";
    mainSection.removeChild(taskModalDiv);
  });

  const taskModalBody = document.createElement("div");
  taskModalBody.classList.add("task-modal--body");

  const titleInput = createTaskInput("Title:", "task-title", taskModalBody);

  const dateInput = createTaskInput("Date:", "task-date", taskModalBody);

  const descriptionInput = createTaskInput(
    "Description:",
    "task-description",
    taskModalBody
  );

  const priorityInput = createTaskInput(
    "Priority:",
    "task-priority",
    taskModalBody
  );

  const taskModalContainer = document.createElement("div");
  taskModalContainer.classList.add("modal");

  const taskmodalButtons = document.createElement("div");
  taskmodalButtons.classList.add("task-modal--buttons");

  const addButton = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createEl)("button", "Add Task");
  addButton.classList.add("add-task");
  addButton.type = "submit";

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const taskTitle = document.querySelector("#task-title");
    const taskDate = document.querySelector("#task-date");
    const taskDescription = document.querySelector("#task-description");
    const taskPriority = document.querySelector(".task-priority:checked"); // Get the checked radio input

    if (taskTitle && taskDate && taskPriority) {
      const task = {
        title: taskTitle.value,
        date: taskDate.value,
        description: taskDescription.value,
        priority: taskPriority.value,
        status: "incomplete",
      };

      const activeProjectSpan = document.querySelector(".active-project");
      if (activeProjectSpan) {
        const activeProjectName = activeProjectSpan.textContent;
        const projects = JSON.parse(localStorage.getItem("projects")) || {};
        if (!projects[activeProjectName]) {
          projects[activeProjectName] = [];
        }
        projects[activeProjectName].push(task);
        localStorage.setItem("projects", JSON.stringify(projects));

        console.log(`Task added to project ${activeProjectName}:`, task);
        taskForm.innerHTML = "";
      } else {
        console.error("No active project selected.");
      }

      (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.displayTask)();
      (0,_initial__WEBPACK_IMPORTED_MODULE_2__.projectClickHandler)(".task-modal");
      taskForm.reset();
      mainSection.removeChild(taskModalDiv);
      taskModalDiv = null;
    }
  });

  taskmodalButtons.appendChild(addButton);

  taskModalContainer.appendChild(taskModalHeader);
  taskModalContainer.appendChild(taskModalBody);
  taskForm.appendChild(taskmodalButtons);
  taskModalDiv.appendChild(taskModalContainer);
  mainSection.appendChild(taskModalDiv);
}


/***/ }),

/***/ "./src/modules/displayTask.js":
/*!************************************!*\
  !*** ./src/modules/displayTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayTask: () => (/* binding */ displayTask)
/* harmony export */ });
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ "./src/modules/initial.js");


const taskContainer = document.createElement("div");
taskContainer.classList.add("task-container");

function checkPriority(priority) {
  let icon;

  if (priority === "low") {
    icon = (0,_initial__WEBPACK_IMPORTED_MODULE_0__.createIcon)("fa-gauge-low");
  } else if (priority === "medium") {
    icon = (0,_initial__WEBPACK_IMPORTED_MODULE_0__.createIcon)("fa-gauge");
  } else if (priority === "high") {
    icon = (0,_initial__WEBPACK_IMPORTED_MODULE_0__.createIcon)("fa-gauge-high");
  } else return;
  return icon;
}

function changePriority(caller, title, date, description, priority, icon) {
  const projects = JSON.parse(localStorage.getItem("projects"));
  projects[caller].forEach((project) => {
    if (
      project.title === title &&
      project.date === date &&
      project.description === description &&
      project.priority === priority
    ) {
      if (priority === "low") project.priority = "medium";
      else if (priority === "medium") project.priority = "high";
      else if (priority === "high") project.priority = "low";

      // Update the localStorage with the modified projects array
      localStorage.setItem("projects", JSON.stringify(projects));
      icon = checkPriority(project.priority);
      displayTask();
    }
  });
}

function changeCaller(currentCaller, title, date, description) {
  const projects = JSON.parse(localStorage.getItem("projects"));
  const projectNames = Object.keys(projects);
  const currentIndex = projectNames.indexOf(currentCaller);
  const nextIndex = (currentIndex + 1) % projectNames.length;
  const newCaller = projectNames[nextIndex];

  // Find the task in the current project
  const taskIndex = projects[currentCaller].findIndex(
    (task) =>
      task.title === title &&
      task.date === date &&
      task.description === description
  );

  if (taskIndex !== -1) {
    // Remove the task from the current project
    const [task] = projects[currentCaller].splice(taskIndex, 1);

    // Add the task to the new project
    projects[newCaller].push(task);

    // Update localStorage with the new projects object
    localStorage.setItem("projects", JSON.stringify(projects));
    displayTask(); // Update the displayed tasks
  }
}

function taskStatusListener(caller, title, date, description) {
  const projects = JSON.parse(localStorage.getItem("projects"));

  projects[caller].forEach((project) => {
    if (
      project.title === title &&
      project.date === date &&
      project.description === description
    ) {
      if (project.status === "incomplete") {
        project.status = "complete";
      } else {
        project.status = "incomplete";
      }
    }
  });

  localStorage.setItem("projects", JSON.stringify(projects));
  displayTask();
}

function displayTask(today, caller, taskDivReceived, taskCont) {
  const mainDiv = document.querySelector(".task-section");
  const projects = JSON.parse(localStorage.getItem("projects")) || {};
  const activeProjectSpan = document.querySelector(".active-project");

  if (activeProjectSpan || caller) {
    let activeProject;
    taskContainer.innerHTML = "";

    if (caller) activeProject = projects[caller];
    else activeProject = projects[activeProjectSpan.textContent];

    activeProject.forEach((el) => {
      const taskWrapper = document.createElement("div");
      taskWrapper.classList.add("task-footer--container");
      const taskCaller = document.createElement("span");
      const headerDiv = document.createElement("div");
      headerDiv.classList.add("task-header--container");
      taskCaller.textContent = activeProjectSpan
        ? activeProjectSpan.textContent
        : caller;
      const userIcon = (0,_initial__WEBPACK_IMPORTED_MODULE_0__.createIcon)("fa-user");
      const statusIcon = (0,_initial__WEBPACK_IMPORTED_MODULE_0__.createIcon)(
        el.status === "complete" ? "fa-check-to-slot" : "fa-xmark-to-slot"
      );
      statusIcon.classList.add("task-status--icon");

      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task-information");
      const taskTitle = document.createElement("h3");
      taskTitle.textContent = el.title;
      const taskDate = document.createElement("time");
      taskDate.textContent = el.date;
      const dateIcon = (0,_initial__WEBPACK_IMPORTED_MODULE_0__.createIcon)("fa-calendar");
      const taskDescription = document.createElement("p");
      taskDescription.textContent = el.description;

      const taskPriority = document.createElement("p");
      taskPriority.textContent = el.priority;

      let priorityIcon = checkPriority(el.priority);

      priorityIcon.addEventListener("click", () => {
        priorityIcon = changePriority(
          taskCaller.textContent,
          taskTitle.textContent,
          taskDate.textContent,
          taskDescription.textContent,
          taskPriority.textContent,
          priorityIcon
        );
      });

      userIcon.addEventListener("click", () => {
        changeCaller(
          taskCaller.textContent,
          taskTitle.textContent,
          taskDate.textContent,
          taskDescription.textContent
        );
      });

      statusIcon.addEventListener("click", () => {
        taskStatusListener(
          taskCaller.textContent,
          taskTitle.textContent,
          taskDate.textContent,
          taskDescription.textContent
        );
      });

      if (
        (caller && el.date === new Date().toISOString().split("T")[0]) ||
        activeProjectSpan
      ) {
        dateIcon.appendChild(taskDate);
        userIcon.appendChild(taskCaller);
        taskWrapper.appendChild(dateIcon);
        taskWrapper.appendChild(userIcon);
        taskWrapper.appendChild(priorityIcon);
        headerDiv.appendChild(taskTitle);
        headerDiv.appendChild(statusIcon);
        taskDiv.appendChild(headerDiv);
        taskDiv.appendChild(taskDescription);
        taskDiv.appendChild(taskWrapper);

        if (taskCont) {
          taskCont.appendChild(taskDiv);
        } else {
          taskContainer.appendChild(taskDiv);
        }
      }
    });

    if (taskDivReceived) {
      const taskMainDiv = document.querySelector(".task-section");
      if (taskMainDiv) {
        document.querySelector(".main-section").removeChild(taskMainDiv);
      }
      taskDivReceived.innerHtml = "";
      taskDivReceived.appendChild(taskCont);
    } else {
      const taskDivReceived = document.querySelector(".today-task--section");
      if (taskDivReceived) {
        document.querySelector(".main-section").removeChild(taskDivReceived);
        const activeToday = document.querySelector(".active");
        activeToday.classList.remove("active");
      }
      mainDiv.appendChild(taskContainer);
    }
  }
}


/***/ }),

/***/ "./src/modules/initial.js":
/*!********************************!*\
  !*** ./src/modules/initial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createIcon: () => (/* binding */ createIcon),
/* harmony export */   createSidebar: () => (/* binding */ createSidebar),
/* harmony export */   projectClickHandler: () => (/* binding */ projectClickHandler)
/* harmony export */ });
/* harmony import */ var _images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/avatar.jpg */ "./src/images/avatar.jpg");
const main = document.querySelector(".main-section");


function createSidebarLi(text, className) {
  const liDiv = document.createElement("div");

  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("sidebar-li");

  const icon = createIcon(className);

  liDiv.appendChild(icon);
  liDiv.appendChild(li);
  return liDiv;
}

function createIcon(className) {
  const icon = document.createElement("i");

  icon.classList.add("fa-light", className);
  return icon;
}

function projectClickHandler(el) {
  const modal = document.querySelector(el);
  const taskDiv = document.querySelector(".task-div");
  const sidebar = document.querySelector(".sidebar");
  modal.classList.toggle("active");
  main.classList.toggle("background-opacity");

  if (modal.classList.contains("active")) {
    taskDiv?.classList.add("disable");
    sidebar.classList.add("disable");
  } else {
    taskDiv?.classList.remove("disable");
    sidebar.classList.remove("disable");
  }
}

function createSidebar() {
  const sidebar = document.createElement("aside");
  sidebar.classList.add("sidebar");

  const iconDiv = document.createElement("div");
  iconDiv.classList.add("icon-div");

  const imgIcon = document.createElement("img");
  imgIcon.classList.add("avatar-img");
  imgIcon.src = _images_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];

  const iconText = document.createElement("span");
  iconText.textContent = "Welcome Back";
  iconText.classList.add("icon-text");

  iconDiv.appendChild(imgIcon);
  iconDiv.appendChild(iconText);

  const sideUl = document.createElement("ul");
  sideUl.classList.add("sidebar-ul");

  const inboxLi = createSidebarLi("Inbox", "fa-inbox");

  const calendarLi = createSidebarLi("Today", "fa-calendar");

  const projectsLi = createSidebarLi("Projects", "fa-rectangle-history");
  const addProject = document.createElement("i");
  addProject.classList.add("fa-light", "fa-plus");
  projectsLi.appendChild(addProject);

  addProject.addEventListener("click", () => {
    projectClickHandler(".modal-overlay");
  });

  sideUl.appendChild(inboxLi);

  sideUl.appendChild(calendarLi);

  sideUl.appendChild(projectsLi);
  sidebar.appendChild(iconDiv);
  sidebar.appendChild(sideUl);

  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  for (let project in projects) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    const projectNameSpan = document.createElement("span");
    projectNameSpan.textContent = project;

    projectDiv.appendChild(projectNameSpan);
    sidebar.appendChild(projectDiv);
  }


  main.appendChild(sidebar);
}


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
/******/ 			if (document.currentScript)
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
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ "./src/modules/initial.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTask */ "./src/modules/createTask.js");
/* harmony import */ var _displayTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayTask */ "./src/modules/displayTask.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './displayToday'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







(0,_initial__WEBPACK_IMPORTED_MODULE_0__.createSidebar)();
(0,_createProject__WEBPACK_IMPORTED_MODULE_2__.createProject)();
(0,_createTask__WEBPACK_IMPORTED_MODULE_3__.selectProject)();
(0,_displayTask__WEBPACK_IMPORTED_MODULE_4__.displayTask)();
Object(function webpackMissingModule() { var e = new Error("Cannot find module './displayToday'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

/******/ })()
;
//# sourceMappingURL=main.js.map