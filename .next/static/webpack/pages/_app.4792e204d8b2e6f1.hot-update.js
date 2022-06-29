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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": function() { return /* binding */ AppContext; },\n/* harmony export */   \"AppProvider\": function() { return /* binding */ AppProvider; },\n/* harmony export */   \"useGlobalContext\": function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar AppProvider = function(param) {\n    var children = param.children;\n    // ********STYLES********\n    var styles = {\n        serviceContainer: \"bg-white p-4 rounded-sm shadow flex flex-col justify-between\",\n        iconStyle: \"bg-orange-100 rounded text-orange-600 text-3xl h-30 w-fit flex p-2 px-4 flex-col my-3\",\n        h4Style: \"text-gray-700 text-2xl font-bold my-2\",\n        contentStyle: \"text-sm text-gray-700 my-3\",\n        btnStyle: \"bg-orange-600 rounded text-white text-sm w-fit p-2 px-4 my-3 hover:bg-orange-700 transition hover:text-gray-200\",\n        line: \"w-1/3 my-2  mx-auto border-2 border-orange-600 rounded-lg\",\n        h2Style: \"text-center font-bold text-3xl md:text-4xl\"\n    };\n    var serviceContainer = styles.serviceContainer, iconStyle = styles.iconStyle, h4Style = styles.h4Style, contentStyle = styles.contentStyle, btnStyle = styles.btnStyle, line = styles.line;\n    // **********************btnStyle\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            serviceContainer: serviceContainer,\n            iconStyle: iconStyle,\n            h4Style: h4Style,\n            contentStyle: contentStyle,\n            btnStyle: btnStyle,\n            line: line\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Coding Projects\\\\sorm\\\\src\\\\utils\\\\context.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c = AppProvider;\nvar useGlobalContext = function() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n};\n_s(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n$RefreshReg$(_c, \"AppProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTREOztBQUM1RCxJQUFNRyxVQUFVLGlCQUFHRixvREFBYSxFQUFFO0FBQ2xDLElBQU1HLFdBQVcsR0FBRyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFRO0lBQzdCLHlCQUF5QjtJQUN6QixJQUFNQyxNQUFNLEdBQUc7UUFDYkMsZ0JBQWdCLEVBQ2QsOERBQThEO1FBQ2hFQyxTQUFTLEVBQ1AsdUZBQXVGO1FBQ3pGQyxPQUFPLEVBQUUsdUNBQXVDO1FBQ2hEQyxZQUFZLEVBQUUsNEJBQTRCO1FBQzFDQyxRQUFRLEVBQ04saUhBQWlIO1FBQ25IQyxJQUFJLEVBQUUsMkRBQTJEO1FBQ2pFQyxPQUFPLEVBQUUsNENBQTRDO0tBQ3REO0lBQ0QsSUFBUU4sZ0JBQWdCLEdBQ3RCRCxNQUFNLENBREFDLGdCQUFnQixFQUFFQyxTQUFTLEdBQ2pDRixNQUFNLENBRGtCRSxTQUFTLEVBQUVDLE9BQU8sR0FDMUNILE1BQU0sQ0FENkJHLE9BQU8sRUFBRUMsWUFBWSxHQUN4REosTUFBTSxDQURzQ0ksWUFBWSxFQUFFQyxRQUFRLEdBQ2xFTCxNQUFNLENBRG9ESyxRQUFRLEVBQUVDLElBQUksR0FDeEVOLE1BQU0sQ0FEOERNLElBQUk7SUFHMUUsaUNBQWlDO0lBQ2pDLHFCQUNFLDhEQUFDVCxVQUFVLENBQUNXLFFBQVE7UUFDbEJDLEtBQUssRUFBRTtZQUNMUixnQkFBZ0IsRUFBaEJBLGdCQUFnQjtZQUNoQkMsU0FBUyxFQUFUQSxTQUFTO1lBQ1RDLE9BQU8sRUFBUEEsT0FBTztZQUNQQyxZQUFZLEVBQVpBLFlBQVk7WUFDWkMsUUFBUSxFQUFSQSxRQUFRO1lBQ1JDLElBQUksRUFBSkEsSUFBSTtTQUNMO2tCQUVBUCxRQUFROzs7OzthQUNXLENBQ3RCO0NBQ0g7QUFoQ0tELEtBQUFBLFdBQVc7QUFrQ1YsSUFBTVksZ0JBQWdCLEdBQUcsV0FBTTs7SUFDcEMsT0FBT2QsaURBQVUsQ0FBQ0MsVUFBVSxDQUFDLENBQUM7Q0FDL0IsQ0FBQztHQUZXYSxnQkFBZ0I7QUFJTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvY29udGV4dC5qcz84NjliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IEFwcFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIC8vICoqKioqKioqU1RZTEVTKioqKioqKipcclxuICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICBzZXJ2aWNlQ29udGFpbmVyOlxyXG4gICAgICBcImJnLXdoaXRlIHAtNCByb3VuZGVkLXNtIHNoYWRvdyBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiLFxyXG4gICAgaWNvblN0eWxlOlxyXG4gICAgICBcImJnLW9yYW5nZS0xMDAgcm91bmRlZCB0ZXh0LW9yYW5nZS02MDAgdGV4dC0zeGwgaC0zMCB3LWZpdCBmbGV4IHAtMiBweC00IGZsZXgtY29sIG15LTNcIixcclxuICAgIGg0U3R5bGU6IFwidGV4dC1ncmF5LTcwMCB0ZXh0LTJ4bCBmb250LWJvbGQgbXktMlwiLFxyXG4gICAgY29udGVudFN0eWxlOiBcInRleHQtc20gdGV4dC1ncmF5LTcwMCBteS0zXCIsXHJcbiAgICBidG5TdHlsZTpcclxuICAgICAgXCJiZy1vcmFuZ2UtNjAwIHJvdW5kZWQgdGV4dC13aGl0ZSB0ZXh0LXNtIHctZml0IHAtMiBweC00IG15LTMgaG92ZXI6Ymctb3JhbmdlLTcwMCB0cmFuc2l0aW9uIGhvdmVyOnRleHQtZ3JheS0yMDBcIixcclxuICAgIGxpbmU6IFwidy0xLzMgbXktMiAgbXgtYXV0byBib3JkZXItMiBib3JkZXItb3JhbmdlLTYwMCByb3VuZGVkLWxnXCIsXHJcbiAgICBoMlN0eWxlOiBcInRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTN4bCBtZDp0ZXh0LTR4bFwiLFxyXG4gIH07XHJcbiAgY29uc3QgeyBzZXJ2aWNlQ29udGFpbmVyLCBpY29uU3R5bGUsIGg0U3R5bGUsIGNvbnRlbnRTdHlsZSwgYnRuU3R5bGUsIGxpbmUgfSA9XHJcbiAgICBzdHlsZXM7XHJcblxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipidG5TdHlsZVxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHNlcnZpY2VDb250YWluZXIsXHJcbiAgICAgICAgaWNvblN0eWxlLFxyXG4gICAgICAgIGg0U3R5bGUsXHJcbiAgICAgICAgY29udGVudFN0eWxlLFxyXG4gICAgICAgIGJ0blN0eWxlLFxyXG4gICAgICAgIGxpbmUsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBBcHBDb250ZXh0LCBBcHBQcm92aWRlciB9O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJBcHBQcm92aWRlciIsImNoaWxkcmVuIiwic3R5bGVzIiwic2VydmljZUNvbnRhaW5lciIsImljb25TdHlsZSIsImg0U3R5bGUiLCJjb250ZW50U3R5bGUiLCJidG5TdHlsZSIsImxpbmUiLCJoMlN0eWxlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUdsb2JhbENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/context.js\n");

/***/ })

});