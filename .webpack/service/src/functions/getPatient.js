/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/getPatient.ts":
/*!*************************************!*\
  !*** ./src/functions/getPatient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\nconst patients = [{\r\n        id: '1',\r\n        name: 'Victor Ross'\r\n    },\r\n    {\r\n        id: '2',\r\n        name: 'Renan Lopes'\r\n    },\r\n    {\r\n        id: '3',\r\n        name: 'Marcos Vinicius'\r\n    }];\r\nconst handle = async (event) => {\r\n    const { patientId } = event.pathParameters;\r\n    const patient = patients.find(patient => patient.id === patientId);\r\n    console.log(patients);\r\n    return {\r\n        statusCode: 200,\r\n        body: JSON.stringify(patient),\r\n        headers: {\r\n            \"Content-Type\": \"application/json\"\r\n        }\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldFBhdGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGNsb3VkLWZpcnN0LXRyeS8uL3NyYy9mdW5jdGlvbnMvZ2V0UGF0aWVudC50cz85OGQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xyXG5cclxuXHJcbnR5cGUgSVBhdGllbnRQYXRhbWV0ZXJzID0ge1xyXG4gIHBhdGllbnRJZDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBwYXRpZW50cyA9IFt7XHJcbiAgaWQ6ICcxJyxcclxuICBuYW1lOiAnVmljdG9yIFJvc3MnXHJcbn0sXHJcbntcclxuICBpZDogJzInLFxyXG4gIG5hbWU6ICdSZW5hbiBMb3BlcydcclxufSxcclxue1xyXG4gIGlkOiAnMycsXHJcbiAgbmFtZTogJ01hcmNvcyBWaW5pY2l1cydcclxufV1cclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGU6QVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IHsgcGF0aWVudElkIH0gPSBldmVudC5wYXRoUGFyYW1ldGVycyBhcyBJUGF0aWVudFBhdGFtZXRlcnM7XHJcblxyXG4gIGNvbnN0IHBhdGllbnQgPSBwYXRpZW50cy5maW5kKHBhdGllbnQgPT4gcGF0aWVudC5pZCA9PT0gcGF0aWVudElkKTtcclxuICBjb25zb2xlLmxvZyhwYXRpZW50cyk7XHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXR1c0NvZGU6IDIwMCxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhdGllbnQpLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/getPatient.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/functions/getPatient.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;