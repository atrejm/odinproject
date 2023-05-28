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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProject: () => (/* binding */ displayProject),\n/* harmony export */   displayTodo: () => (/* binding */ displayTodo)\n/* harmony export */ });\n/* harmony import */ var _todoitem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoitem */ \"./src/todoitem.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nfunction displayProject(project) {\n  let element = document.createElement(\"div\");\n\n  element.id = project.id;\n  element.classList = \"project container\";\n  let projectHeader = document.createElement(\"h1\");\n  projectHeader.classList = \"projectheader\";\n  projectHeader.innerText = project.projectName;\n  element.appendChild(projectHeader);\n  appendToDoButton(element, project);\n\n  for (let i = 0; i < project.todo_list.length; i++) {\n    element.appendChild(appendTodoItem(project.todo_list[i]));\n  }\n\n  let content = document.getElementById(\"content\");\n  content.appendChild(element);\n  project.createForm();\n}\n\nfunction appendToDoButton(element, project) {\n  let button = document.createElement(\"button\");\n  button.innerText = \"Add TODO Item\";\n  button.id = \"todobutton\" + project.id;\n  console.log(\"button for \" + project.id);\n  button.onclick = project.toDoButtonPressed;\n  element.appendChild(button);\n}\n\nfunction appendTodoItem(todo) {\n  let element = document.createElement(\"div\");\n  element.classList = \"todo\";\n  element.id = todo.id;\n  element.innerText = `Title: ${todo.title}\n                        \\tDescription: ${todo.description}\n                        \\tDuedate: ${todo.dueDate}\n                        \\tID: ${todo.id}\\n\\n`;\n\n  return element;\n}\n\nfunction displayTodo(todo) {}\n\n\n//# sourceURL=webpack://todo_project/./src/domstuff.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Form {\n  constructor(fields, domAnchorID) {\n    this.id = domAnchorID;\n    let anchor = document.getElementById(this.id);\n    console.log(this.id);\n    if (!anchor) {\n      return;\n    }\n    self.formElement = document.createElement(\"form\");\n    self.formElement.id = this.id + \"form\";\n    anchor.appendChild(self.formElement);\n\n    for (const [key, value] of Object.entries(fields)) {\n      self.label = key;\n      self.type = value;\n\n      let formField = document.createElement(\"input\");\n      formField.placeholder = self.label;\n      formField.type = self.type;\n      formField.id = self.label;\n      formField.name = self.label;\n      self.formElement.appendChild(formField);\n\n      if (formField.type == \"submit\") {\n        formField.onclick = this.submitForm;\n      }\n    }\n  }\n\n  hideForm() {\n    self.formElement.hidden = true;\n  }\n\n  showForm() {\n    self.formElement.hidden = false;\n  }\n\n  submitForm(event) {\n    event.preventDefault();\n    const form = document.getElementById(event.target.parentNode.id);\n    const inputs = form.elements;\n    console.log(\"submitting form: \", event.target.parentNode.id); // this cursed thing returns the id ofthe parent project...\n    console.log(\n      `to-do item: ${inputs[0].value}, to-do desc: ${inputs[1].value}`\n    );\n    form.hidden = true;\n\n    //let todoItem = new Todo(inputs[0], inputs[1], inputs[2], inputs[3])\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n\n//# sourceURL=webpack://todo_project/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todoitem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoitem */ \"./src/todoitem.js\");\n/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domstuff */ \"./src/domstuff.js\");\n\n\n\n\nlet project1 = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Project1\");\nproject1.addToDoItem(\n  new _todoitem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"todo item 1\", \"item description\", \"tomorrow\", \"low\")\n);\nproject1.addToDoItem(\n  new _todoitem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"todo item 2\", \"item description\", \"the next day\", \"low\")\n);\n\nlet project2 = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Project2\");\nproject2.addToDoItem(\n  new _todoitem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"todo item 1\", \"item description\", \"tomorrow\", \"low\")\n);\nproject2.addToDoItem(\n  new _todoitem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"todo item 2\", \"item description\", \"the next day\", \"low\")\n);\n\n(0,_domstuff__WEBPACK_IMPORTED_MODULE_2__.displayProject)(project1);\n(0,_domstuff__WEBPACK_IMPORTED_MODULE_2__.displayProject)(project2);\n\n// const form = {\n//     \"todo-item\":\"text\",\n//     \"todo-description\":\"text\",\n//     \"due-date\":\"text\",\n//     \"priority\":\"text\",\n//     \"submit\":\"submit\"\n// }\n// let formOjb = new Form(form, \"project1\");\n\n\n//# sourceURL=webpack://todo_project/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoitem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoitem */ \"./src/todoitem.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\n\nclass Project {\n  static count = 0;\n\n  constructor(projectName) {\n    this.todoItems = [];\n    this.projectName = projectName;\n    this.id = ++this.constructor.count;\n    this.id = \"project\" + this.id;\n  }\n\n  get todo_list() {\n    return this.todoItems;\n  }\n\n  addToDoItem(todo) {\n    this.todoItems.push(todo);\n  }\n\n  sayName() {\n    console.log(this.projectName);\n  }\n\n  createForm() {\n    const form = {\n      \"todo-item\": \"text\",\n      \"todo-description\": \"text\",\n      \"due-date\": \"text\",\n      priority: \"text\",\n      submit: \"submit\",\n    };\n\n    this.formObj = new _form__WEBPACK_IMPORTED_MODULE_1__[\"default\"](form, this.id);\n    this.formObj.hideForm();\n  }\n\n  toDoButtonPressed(event) {\n    console.log(\"todobuttonpressed for \" + event.target.parentNode.id);\n    let projectID = event.target.parentNode.id;\n    let formElement = document.getElementById(projectID + \"form\");\n    formElement.hidden = false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://todo_project/./src/project.js?");

/***/ }),

/***/ "./src/todoitem.js":
/*!*************************!*\
  !*** ./src/todoitem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n  static count = 0;\n\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.id = ++this.constructor.count;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://todo_project/./src/todoitem.js?");

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