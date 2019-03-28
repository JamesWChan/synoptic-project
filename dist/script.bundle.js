/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/modules/addAnswer.js":
/*!**************************************!*\
  !*** ./scripts/modules/addAnswer.js ***!
  \**************************************/
/*! exports provided: addAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAnswer\", function() { return addAnswer; });\n/* harmony import */ var _assignNameAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignNameAttribute */ \"./scripts/modules/assignNameAttribute.js\");\n\n\nlet addAnswer = (target) => {\n    let previousSibling = target.previousElementSibling;\n\n    // Create input group\n    let newInputGroup = document.createElement('div');\n    newInputGroup.setAttribute('class', 'input-group answer-group');\n\n    // Create answer labels and inputs and set attributes\n    let answerLabel = document.createElement('label');\n    let answerInput = document.createElement('input');\n\n    // Create delete button\n    let deleteButton = document.createElement('button');\n\n    // Create label text and append to answer label\n    let answerLabelText = document.createTextNode('Enter answer');\n    if((previousSibling.className === 'input-group question-group')){\n        answerLabelText = document.createTextNode('Enter answer (please enter correct answer first)');\n    }\n    let deleteButtonText = document.createTextNode('x');\n    answerLabel.appendChild(answerLabelText);\n    deleteButton.appendChild(deleteButtonText);\n\n    newInputGroup.appendChild(answerInput);\n    newInputGroup.appendChild(deleteButton);\n\n    // Insert answer button into DOM\n    previousSibling.insertAdjacentElement(\"afterend\", newInputGroup);\n    previousSibling.insertAdjacentElement(\"afterend\", answerLabel);\n\n    // Set button/label attributes\n    answerInput.setAttribute('class', 'form-control answer-input');\n    answerInput.setAttribute('name', Object(_assignNameAttribute__WEBPACK_IMPORTED_MODULE_0__[\"assignNameAttribute\"])(answerInput));\n    answerInput.setAttribute('id', Object(_assignNameAttribute__WEBPACK_IMPORTED_MODULE_0__[\"assignNameAttribute\"])(answerInput));\n    answerInput.required = true;\n    answerLabel.setAttribute('for', Object(_assignNameAttribute__WEBPACK_IMPORTED_MODULE_0__[\"assignNameAttribute\"])(answerInput));\n    deleteButton.setAttribute('name', 'delete-answer');\n    deleteButton.setAttribute('type', 'button');\n    deleteButton.setAttribute('class', 'btn btn-secondary delete-button');\n};\n\n//# sourceURL=webpack:///./scripts/modules/addAnswer.js?");

/***/ }),

/***/ "./scripts/modules/addQuestion.js":
/*!****************************************!*\
  !*** ./scripts/modules/addQuestion.js ***!
  \****************************************/
/*! exports provided: addQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addQuestion\", function() { return addQuestion; });\n/* harmony import */ var _assignNameAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignNameAttribute */ \"./scripts/modules/assignNameAttribute.js\");\n\n\nlet addQuestion = () => {\n    let form = document.querySelector('.quiz-form');\n    let formGroup = document.querySelectorAll('.form-group');\n    let lastFormGroup = formGroup[formGroup.length - 1];\n\n    // Create form group and set attributes\n    let newFormGroup = document.createElement('div');\n    newFormGroup.setAttribute('class', 'form-group');\n\n    // Create input group\n    let newInputGroup = document.createElement('div');\n    newInputGroup.setAttribute('class', 'input-group question-group');\n\n    // Create question labels and inputs and set attributes\n    let questionLabel = document.createElement('label');\n    let questionInput = document.createElement('input');\n\n    // Create add answer button\n    let answerButton = document.createElement('button');\n    answerButton.setAttribute('name', 'add-answer-button');\n    answerButton.setAttribute('type', 'button');\n    answerButton.setAttribute('class', 'btn btn-secondary');\n\n    // Create delete button\n    let deleteButton = document.createElement('button');\n    deleteButton.setAttribute('name', 'delete-question');\n    deleteButton.setAttribute('type', 'button');\n    deleteButton.setAttribute('class', 'btn btn-secondary delete-button');\n\n    // Create button and label text\n    let deleteButtonText = document.createTextNode('x');\n    let addAnswerButtonText = document.createTextNode('Add answer');\n    let questionLabelText = document.createTextNode('Enter question');\n\n    // Append label text to label and button elements\n    questionLabel.appendChild(questionLabelText);\n    deleteButton.appendChild(deleteButtonText);\n    answerButton.appendChild(addAnswerButtonText);\n\n    // Build form group\n    newInputGroup.appendChild(questionInput);\n    newInputGroup.appendChild(deleteButton);\n    newFormGroup.appendChild(questionLabel);\n    newFormGroup.appendChild(newInputGroup);\n    newFormGroup.appendChild(answerButton);\n\n    // Append new form group to existing form\n    form.insertBefore(newFormGroup, lastFormGroup.nextSibling);\n\n    questionInput.setAttribute('class', 'form-control question-input');\n    questionInput.setAttribute('name', Object(_assignNameAttribute__WEBPACK_IMPORTED_MODULE_0__[\"assignNameAttribute\"])(questionInput));\n    questionInput.setAttribute('id', Object(_assignNameAttribute__WEBPACK_IMPORTED_MODULE_0__[\"assignNameAttribute\"])(questionInput));\n    questionInput.required = true;\n    questionLabel.setAttribute('for', Object(_assignNameAttribute__WEBPACK_IMPORTED_MODULE_0__[\"assignNameAttribute\"])(questionInput));\n};\n\n//# sourceURL=webpack:///./scripts/modules/addQuestion.js?");

/***/ }),

/***/ "./scripts/modules/assignNameAttribute.js":
/*!************************************************!*\
  !*** ./scripts/modules/assignNameAttribute.js ***!
  \************************************************/
/*! exports provided: assignNameAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignNameAttribute\", function() { return assignNameAttribute; });\nlet assignNameAttribute = (domElement) => {\n    let formGroups = Array.from(document.querySelectorAll('.form-group'));\n    let domElementFG = domElement.parentElement.parentElement;\n    let domElementFGIndex = formGroups.indexOf(domElementFG);\n\n    if(domElement.getAttribute('class').includes('question-input')) {\n        return `question${domElementFGIndex}`;\n    }\n\n    return `question${domElementFGIndex}Answers[]`;\n};\n\n//# sourceURL=webpack:///./scripts/modules/assignNameAttribute.js?");

/***/ }),

/***/ "./scripts/modules/deleteFormGroup.js":
/*!********************************************!*\
  !*** ./scripts/modules/deleteFormGroup.js ***!
  \********************************************/
/*! exports provided: deleteFormGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFormGroup\", function() { return deleteFormGroup; });\nlet deleteFormGroup = (target) => {\n    let parent = target.parentNode;\n    let grandparent = parent.parentNode;\n    let greatGrandparent = grandparent.parentNode;\n\n    if(target.name === 'delete-question'){\n        greatGrandparent.removeChild(grandparent);\n    }\n    else{\n        grandparent.removeChild(parent.previousElementSibling);\n        grandparent.removeChild(parent);\n    }\n};\n\n//# sourceURL=webpack:///./scripts/modules/deleteFormGroup.js?");

/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addQuestion */ \"./scripts/modules/addQuestion.js\");\n/* harmony import */ var _modules_deleteFormGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/deleteFormGroup */ \"./scripts/modules/deleteFormGroup.js\");\n/* harmony import */ var _modules_addAnswer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addAnswer */ \"./scripts/modules/addAnswer.js\");\n\n\n\n\nlet addQuestionButton = document.querySelector('#add-question-button');\nlet form = document.querySelector('form');\n\nif(form !== null) {\n    form.addEventListener('click', (e) => {\n        let target = e.target;\n        if (target.name === 'delete-question' || target.name === 'delete-answer') {\n            Object(_modules_deleteFormGroup__WEBPACK_IMPORTED_MODULE_1__[\"deleteFormGroup\"])(target);\n        }\n        if (target.name === 'add-answer-button') {\n            Object(_modules_addAnswer__WEBPACK_IMPORTED_MODULE_2__[\"addAnswer\"])(target);\n        }\n    });\n}\n\nif(addQuestionButton !== null) {\n    addQuestionButton.addEventListener('click', () => {\n        Object(_modules_addQuestion__WEBPACK_IMPORTED_MODULE_0__[\"addQuestion\"])();\n    });\n}\n\n//# sourceURL=webpack:///./scripts/script.js?");

/***/ })

/******/ });