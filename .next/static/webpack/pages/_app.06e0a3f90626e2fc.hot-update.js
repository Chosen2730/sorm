"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/utils/context.js":
/*!******************************!*\
  !*** ./src/utils/context.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": function() { return /* binding */ AppContext; },\n/* harmony export */   \"AppProvider\": function() { return /* binding */ AppProvider; },\n/* harmony export */   \"useGlobalContext\": function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar AppProvider = function(param) {\n    var children = param.children;\n    // ********STYLES********\n    var styles = {\n        serviceContainer: \"bg-white p-4 rounded-sm shadow flex flex-col justify-between\",\n        iconStyle: \"bg-orange-100 rounded text-orange-600 text-3xl h-30 w-fit flex p-2 px-4 flex-col my-3\",\n        h4Style: \"text-gray-700 text-2xl font-bold my-2\",\n        contentStyle: \"text-sm text-gray-700 my-3\",\n        btnStyle: \"bg-orange-600 rounded text-white text-sm w-fit p-2 px-4 my-3 hover:bg-orange-700 transition hover:text-gray-200\",\n        line: \"w-1/3 my-2  mx-auto border-2 border-orange-600 rounded-lg\"\n    };\n    var serviceContainer = styles.serviceContainer, iconStyle = styles.iconStyle, h4Style = styles.h4Style, contentStyle = styles.contentStyle, btnStyle = styles.btnStyle;\n    // **********************btnStyle\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            line: line\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Coding Projects\\\\sorm\\\\src\\\\utils\\\\context.js\",\n        lineNumber: 19,\n        columnNumber: 10\n    }, _this);\n};\n_c = AppProvider;\nvar useGlobalContext = function() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n};\n_s(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n$RefreshReg$(_c, \"AppProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTREOztBQUM1RCxJQUFNRyxVQUFVLGlCQUFHRixvREFBYSxFQUFFO0FBQ2xDLElBQU1HLFdBQVcsR0FBRyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFRO0lBQzdCLHlCQUF5QjtJQUN6QixJQUFNQyxNQUFNLEdBQUc7UUFDYkMsZ0JBQWdCLEVBQ2QsOERBQThEO1FBQ2hFQyxTQUFTLEVBQ1AsdUZBQXVGO1FBQ3pGQyxPQUFPLEVBQUUsdUNBQXVDO1FBQ2hEQyxZQUFZLEVBQUUsNEJBQTRCO1FBQzFDQyxRQUFRLEVBQ04saUhBQWlIO1FBQ25IQyxJQUFJLEVBQUUsMkRBQTJEO0tBQ2xFO0lBQ0QsSUFBUUwsZ0JBQWdCLEdBQ3RCRCxNQUFNLENBREFDLGdCQUFnQixFQUFFQyxTQUFTLEdBQ2pDRixNQUFNLENBRGtCRSxTQUFTLEVBQUVDLE9BQU8sR0FDMUNILE1BQU0sQ0FENkJHLE9BQU8sRUFBRUMsWUFBWSxHQUN4REosTUFBTSxDQURzQ0ksWUFBWSxFQUFFQyxRQUFRLEdBQ2xFTCxNQUFNLENBRG9ESyxRQUFRO0lBRXBFLGlDQUFpQztJQUNqQyxxQkFBTyw4REFBQ1IsVUFBVSxDQUFDVSxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFRixJQUFJLEVBQUpBLElBQUk7U0FBRTtrQkFBR1AsUUFBUTs7Ozs7YUFBdUIsQ0FBQztDQUMvRTtBQWpCS0QsS0FBQUEsV0FBVztBQW1CVixJQUFNVyxnQkFBZ0IsR0FBRyxXQUFNOztJQUNwQyxPQUFPYixpREFBVSxDQUFDQyxVQUFVLENBQUMsQ0FBQztDQUMvQixDQUFDO0dBRldZLGdCQUFnQjtBQUlNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9jb250ZXh0LmpzPzg2OWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuY29uc3QgQXBwUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgLy8gKioqKioqKipTVFlMRVMqKioqKioqKlxyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHNlcnZpY2VDb250YWluZXI6XHJcbiAgICAgIFwiYmctd2hpdGUgcC00IHJvdW5kZWQtc20gc2hhZG93IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCIsXHJcbiAgICBpY29uU3R5bGU6XHJcbiAgICAgIFwiYmctb3JhbmdlLTEwMCByb3VuZGVkIHRleHQtb3JhbmdlLTYwMCB0ZXh0LTN4bCBoLTMwIHctZml0IGZsZXggcC0yIHB4LTQgZmxleC1jb2wgbXktM1wiLFxyXG4gICAgaDRTdHlsZTogXCJ0ZXh0LWdyYXktNzAwIHRleHQtMnhsIGZvbnQtYm9sZCBteS0yXCIsXHJcbiAgICBjb250ZW50U3R5bGU6IFwidGV4dC1zbSB0ZXh0LWdyYXktNzAwIG15LTNcIixcclxuICAgIGJ0blN0eWxlOlxyXG4gICAgICBcImJnLW9yYW5nZS02MDAgcm91bmRlZCB0ZXh0LXdoaXRlIHRleHQtc20gdy1maXQgcC0yIHB4LTQgbXktMyBob3ZlcjpiZy1vcmFuZ2UtNzAwIHRyYW5zaXRpb24gaG92ZXI6dGV4dC1ncmF5LTIwMFwiLFxyXG4gICAgbGluZTogXCJ3LTEvMyBteS0yICBteC1hdXRvIGJvcmRlci0yIGJvcmRlci1vcmFuZ2UtNjAwIHJvdW5kZWQtbGdcIixcclxuICB9O1xyXG4gIGNvbnN0IHsgc2VydmljZUNvbnRhaW5lciwgaWNvblN0eWxlLCBoNFN0eWxlLCBjb250ZW50U3R5bGUsIGJ0blN0eWxlIH0gPVxyXG4gICAgc3R5bGVzO1xyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipidG5TdHlsZVxyXG4gIHJldHVybiA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsaW5lIH19PntjaGlsZHJlbn08L0FwcENvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBBcHBDb250ZXh0LCBBcHBQcm92aWRlciB9O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJBcHBQcm92aWRlciIsImNoaWxkcmVuIiwic3R5bGVzIiwic2VydmljZUNvbnRhaW5lciIsImljb25TdHlsZSIsImg0U3R5bGUiLCJjb250ZW50U3R5bGUiLCJidG5TdHlsZSIsImxpbmUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlR2xvYmFsQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/context.js\n");

/***/ })

});