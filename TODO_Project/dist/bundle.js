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

/***/ "./src/domstuff.js":
/*!*************************!*\
  !*** ./src/domstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProject: () => (/* binding */ displayProject),\n/* harmony export */   displayTodo: () => (/* binding */ displayTodo)\n/* harmony export */ });\n/* harmony import */ var _todoitem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoitem */ \"./src/todoitem.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\nfunction displayProject(project){\r\n    let element = document.createElement(\"div\");\r\n    \r\n    element.id = project.id;\r\n    element.classList = \"project container\";\r\n    let projectHeader = document.createElement(\"h1\");\r\n    projectHeader.classList = \"projectheader\";\r\n    projectHeader.innerText = project.projectName;\r\n    element.appendChild(projectHeader);\r\n    appendToDoButton(element, project)\r\n\r\n    for (let i = 0; i < project.todo_list.length; i++) {\r\n        element.appendChild(appendTodoItem(project.todo_list[i]))\r\n    }\r\n\r\n    let content = document.getElementById(\"content\");\r\n    content.appendChild(element);\r\n    project.createForm()\r\n}\r\n\r\nfunction appendToDoButton ( element, project ) {\r\n    let button = document.createElement(\"button\");\r\n    button.innerText = \"Add TODO Item\";\r\n    button.id = \"todobutton\" + project.id;\r\n    console.log(\"button for \" + project.id)\r\n    button.onclick = project.toDoButtonPressed\r\n    element.appendChild(button);\r\n}\r\n\r\nfunction appendTodoItem ( todo ) {\r\n    let element = document.createElement(\"div\");\r\n    element.classList = \"todo\";\r\n    element.id = todo.id;\r\n    element.innerText = `Title: ${todo.title}\r\n                        \\tDescription: ${todo.description}\r\n                        \\tDuedate: ${todo.dueDate}\r\n                        \\tID: ${todo.id}\\n\\n`;\r\n\r\n    return element\r\n}\r\n\r\nfunction displayTodo(todo) {\r\n\r\n}\r\n\n\n//# sourceURL=webpack://todo_project/./src/domstuff.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoitem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoitem */ \"./src/todoitem.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\nclass Form {\r\n    constructor (fields, domAnchorID) {\r\n        this.id = domAnchorID\r\n        let anchor = document.getElementById(this.id);\r\n        console.log(this.id)\r\n        if ( !anchor ) { return; }\r\n        self.formElement = document.createElement(\"form\");\r\n        self.formElement.id = this.id + \"form\";\r\n        anchor.appendChild(self.formElement);\r\n\r\n        for (const [key, value] of Object.entries(fields)) {\r\n            self.label = key;\r\n            self.type = value;\r\n            \r\n            let formField = document.createElement(\"input\")\r\n            formField.placeholder = self.label\r\n            formField.type = self.type\r\n            formField.id = self.label\r\n            formField.name = self.label\r\n            self.formElement.appendChild(formField)\r\n\r\n            if(formField.type == \"submit\") {\r\n                formField.onclick = this.submitForm\r\n            }\r\n        }\r\n    }\r\n\r\n    hideForm() {\r\n        self.formElement.hidden = true;\r\n    }\r\n\r\n    showForm() {\r\n        self.formElement.hidden = false;\r\n    }\r\n\r\n    submitForm( event ) {\r\n        event.preventDefault()\r\n        const form = document.getElementById(event.target.parentNode.id)\r\n        const inputs = form.elements;\r\n        console.log(\"submitting form: \", event.target.parentNode.id) // this cursed thing returns the id ofthe parent project...\r\n        console.log(`to-do item: ${inputs[0].value}, to-do desc: ${inputs[1].value}`)\r\n        form.hidden = true;\r\n\r\n        let todoItem = new _todoitem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](inputs[0], inputs[1], inputs[2], inputs[3])\r\n        \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://todo_project/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todoitem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoitem */ \"./src/todoitem.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domstuff */ \"./src/domstuff.js\");\n\r\n\r\n\r\n\r\n\r\nlet project1 = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Project1\")\r\nproject1.addToDoItem(new _todoitem__WEBPACK_IMPORTED_MODULE_1__[\"default\"] (\"todo item 1\", \"item description\", \"tomorrow\", \"low\"));\r\nproject1.addToDoItem(new _todoitem__WEBPACK_IMPORTED_MODULE_1__[\"default\"] (\"todo item 2\", \"item description\", \"the next day\", \"low\"));\r\n\r\nlet project2 = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Project2\")\r\nproject2.addToDoItem(new _todoitem__WEBPACK_IMPORTED_MODULE_1__[\"default\"] (\"todo item 1\", \"item description\", \"tomorrow\", \"low\"));\r\nproject2.addToDoItem(new _todoitem__WEBPACK_IMPORTED_MODULE_1__[\"default\"] (\"todo item 2\", \"item description\", \"the next day\", \"low\"));\r\n\r\n(0,_domstuff__WEBPACK_IMPORTED_MODULE_3__.displayProject)(project1)\r\n;(0,_domstuff__WEBPACK_IMPORTED_MODULE_3__.displayProject)(project2)\r\n\r\n// const form = {\r\n//     \"todo-item\":\"text\",\r\n//     \"todo-description\":\"text\",\r\n//     \"due-date\":\"text\",\r\n//     \"priority\":\"text\",\r\n//     \"submit\":\"submit\"\r\n// }\r\n// let formOjb = new Form(form, \"project1\");\n\n//# sourceURL=webpack://todo_project/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoitem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoitem */ \"./src/todoitem.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\r\n\r\n\r\nclass Project {\r\n    static count = 0\r\n\r\n    constructor(projectName) {\r\n        this.todoItems = [];\r\n        this.projectName = projectName;\r\n        this.id = ++this.constructor.count\r\n        this.id = \"project\" + this.id\r\n    }\r\n\r\n    get todo_list() {\r\n        return this.todoItems;\r\n    }\r\n\r\n    addToDoItem(todo){  \r\n        this.todoItems.push(todo);\r\n    }\r\n\r\n    sayName() {\r\n        console.log(this.projectName)\r\n    }\r\n\r\n    createForm() {\r\n        const form = {\r\n            \"todo-item\":\"text\",\r\n            \"todo-description\":\"text\",\r\n            \"due-date\":\"text\",\r\n            \"priority\":\"text\",\r\n            \"submit\":\"submit\"\r\n        }\r\n\r\n        this.formObj = new _form__WEBPACK_IMPORTED_MODULE_1__[\"default\"](form, this.id);\r\n        this.formObj.hideForm();\r\n    }\r\n\r\n    toDoButtonPressed( event ) {\r\n        console.log(\"todobuttonpressed for \" + event.target.parentNode.id)\r\n        let projectID = event.target.parentNode.id;\r\n        let formElement = document.getElementById(projectID + \"form\");\r\n        formElement.hidden = false;\r\n    }   \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo_project/./src/project.js?");

/***/ }),

/***/ "./src/todoitem.js":
/*!*************************!*\
  !*** ./src/todoitem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\r\n    static count = 0\r\n\r\n    constructor(title, description, dueDate, priority) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.id = ++this.constructor.count;\r\n    }\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo_project/./src/todoitem.js?");

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