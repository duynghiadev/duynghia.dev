"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(site)/layout",{

/***/ "(app-client)/./src/components/pursuer.tsx":
/*!************************************!*\
  !*** ./src/components/pursuer.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-client)/./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/throttle */ \"(app-client)/./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"(app-client)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use */ \"(app-client)/./node_modules/react-use/esm/useEvent.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Pursuer = ()=>{\n    _s();\n    (0,react_use__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"mousemove\", lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()((event)=>{\n        const el = event.target;\n        const elNodeName = el.nodeName;\n        const primitiveNodes = {\n            BUTTON: true,\n            A: true\n        };\n        const isMatchedPrimitiveNode = primitiveNodes === null || primitiveNodes === void 0 ? void 0 : primitiveNodes[elNodeName];\n        const [pursuerX, pursuerY] = [\n            event.clientX,\n            event.clientY\n        ];\n        const circleRadius = 32 / 2;\n        document.documentElement.style.setProperty(\"--pursuer-x\", \"\".concat(pursuerX - circleRadius, \"px\"));\n        document.documentElement.style.setProperty(\"--pursuer-y\", \"\".concat(pursuerY - circleRadius, \"px\"));\n        document.documentElement.style.setProperty(\"--pursuer-scale\", isMatchedPrimitiveNode ? \"10\" : \"1\");\n    }, 1));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"w-8 h-8 rounded-full border border-gray-50/20 z-10 absolute top-0 left-0 transition-transform duration-300 ease-out pointer-events-none\", \"hidden md:flex items-center justify-center\"),\n        style: {\n            mixBlendMode: \"difference\",\n            transform: \"translateX(var(--pursuer-x)) translateY(var(--pursuer-y)) translateZ(0)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative w-2 h-2 rounded-full bg-white dark:bg-white transition duration-300 ease-out\",\n            style: {\n                transform: \"scale(var(--pursuer-scale))\",\n                transformOrigin: \"center center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-[2px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"w-[4px] h-[4px]\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\duynghia.dev\\\\src\\\\components\\\\pursuer.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\duynghia.dev\\\\src\\\\components\\\\pursuer.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\duynghia.dev\\\\src\\\\components\\\\pursuer.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\duynghia.dev\\\\src\\\\components\\\\pursuer.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Pursuer, \"hBfwkuy2/VZ6CHMFDq5gbe/8Puc=\", false, function() {\n    return [\n        react_use__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Pursuer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pursuer);\nvar _c;\n$RefreshReg$(_c, \"Pursuer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvcHVyc3Vlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdCO0FBQ2U7QUFDRztBQUVMO0FBSXJDLE1BQU1JLFVBQTRCOztJQUNoQ0QscURBQVFBLENBQ04sYUFDQUYsc0RBQVFBLENBQUMsQ0FBQ0k7UUFDUixNQUFNQyxLQUFLRCxNQUFNRTtRQUVqQixNQUFNQyxhQUFhRixHQUFHRztRQUV0QixNQUFNQyxpQkFBaUI7WUFBRUMsUUFBUTtZQUFNQyxHQUFHO1FBQUs7UUFDL0MsTUFBTUMseUJBQ0pILDJCQUFBQSw0QkFBQUEsS0FBQUEsSUFBQUEsY0FBZ0IsQ0FBQ0YsV0FBMEM7UUFFN0QsTUFBTSxDQUFDTSxVQUFVQyxTQUFTLEdBQUc7WUFBQ1YsTUFBTVc7WUFBU1gsTUFBTVk7U0FBUTtRQUMzRCxNQUFNQyxlQUFlLEtBQUs7UUFFMUJDLFNBQVNDLGdCQUFnQkMsTUFBTUMsWUFDN0IsZUFDQSxHQUEyQixPQUF4QlIsV0FBV0ksY0FBYTtRQUU3QkMsU0FBU0MsZ0JBQWdCQyxNQUFNQyxZQUM3QixlQUNBLEdBQTJCLE9BQXhCUCxXQUFXRyxjQUFhO1FBRzdCQyxTQUFTQyxnQkFBZ0JDLE1BQU1DLFlBQzdCLG1CQUNBVCx5QkFBeUIsT0FBTztJQUVwQyxHQUFHO0lBR0wscUJBQ0UsOERBQUNVO1FBQ0NDLFdBQVd4QixnREFBSUEsQ0FDYiwySUFDQTtRQUVGcUIsT0FBTztZQUNMSSxjQUFjO1lBQ2RDLFdBQ0U7UUFDSjtrQkFFQSw0RUFBQ0g7WUFDQ0MsV0FBVTtZQUNWSCxPQUFPO2dCQUNMSyxXQUFXO2dCQUNYQyxpQkFBaUI7WUFDbkI7c0JBRUEsNEVBQUNDO2dCQUFLSixXQUFVOzBCQUNkLDRFQUFDdEIsb0RBQVVBO29CQUFDc0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hDO0dBeERNcEI7O1FBQ0pELGlEQUFRQTs7O0tBREpDO0FBMEROLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3B1cnN1ZXIudHN4P2IyMjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSBcImxvZGFzaC90aHJvdHRsZVwiO1xyXG5pbXBvcnQgeyBBcnJvd1JpZ2h0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBGQywgTW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFdmVudCB9IGZyb20gXCJyZWFjdC11c2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHVyc3VlclByb3BzIHt9XHJcblxyXG5jb25zdCBQdXJzdWVyOiBGQzxQdXJzdWVyUHJvcHM+ID0gKCkgPT4ge1xyXG4gIHVzZUV2ZW50KFxyXG4gICAgXCJtb3VzZW1vdmVcIixcclxuICAgIHRocm90dGxlKChldmVudDogTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgICAgY29uc3QgZWwgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICBjb25zdCBlbE5vZGVOYW1lID0gZWwubm9kZU5hbWU7XHJcblxyXG4gICAgICBjb25zdCBwcmltaXRpdmVOb2RlcyA9IHsgQlVUVE9OOiB0cnVlLCBBOiB0cnVlIH07XHJcbiAgICAgIGNvbnN0IGlzTWF0Y2hlZFByaW1pdGl2ZU5vZGUgPVxyXG4gICAgICAgIHByaW1pdGl2ZU5vZGVzPy5bZWxOb2RlTmFtZSBhcyBrZXlvZiB0eXBlb2YgcHJpbWl0aXZlTm9kZXNdO1xyXG5cclxuICAgICAgY29uc3QgW3B1cnN1ZXJYLCBwdXJzdWVyWV0gPSBbZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WV07XHJcbiAgICAgIGNvbnN0IGNpcmNsZVJhZGl1cyA9IDMyIC8gMjtcclxuXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcclxuICAgICAgICBcIi0tcHVyc3Vlci14XCIsXHJcbiAgICAgICAgYCR7cHVyc3VlclggLSBjaXJjbGVSYWRpdXN9cHhgXHJcbiAgICAgICk7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcclxuICAgICAgICBcIi0tcHVyc3Vlci15XCIsXHJcbiAgICAgICAgYCR7cHVyc3VlclkgLSBjaXJjbGVSYWRpdXN9cHhgXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXHJcbiAgICAgICAgXCItLXB1cnN1ZXItc2NhbGVcIixcclxuICAgICAgICBpc01hdGNoZWRQcmltaXRpdmVOb2RlID8gXCIxMFwiIDogXCIxXCJcclxuICAgICAgKTtcclxuICAgIH0sIDEpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgIFwidy04IGgtOCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTUwLzIwIHotMTAgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBwb2ludGVyLWV2ZW50cy1ub25lXCIsXHJcbiAgICAgICAgXCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICApfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIG1peEJsZW5kTW9kZTogXCJkaWZmZXJlbmNlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgXCJ0cmFuc2xhdGVYKHZhcigtLXB1cnN1ZXIteCkpIHRyYW5zbGF0ZVkodmFyKC0tcHVyc3Vlci15KSkgdHJhbnNsYXRlWigwKVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctd2hpdGUgZGFyazpiZy13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSh2YXIoLS1wdXJzdWVyLXNjYWxlKSlcIixcclxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCJjZW50ZXIgY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzJweF0gYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInctWzRweF0gaC1bNHB4XVwiIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJzdWVyO1xyXG4iXSwibmFtZXMiOlsiY2xzeCIsInRocm90dGxlIiwiQXJyb3dSaWdodCIsInVzZUV2ZW50IiwiUHVyc3VlciIsImV2ZW50IiwiZWwiLCJ0YXJnZXQiLCJlbE5vZGVOYW1lIiwibm9kZU5hbWUiLCJwcmltaXRpdmVOb2RlcyIsIkJVVFRPTiIsIkEiLCJpc01hdGNoZWRQcmltaXRpdmVOb2RlIiwicHVyc3VlclgiLCJwdXJzdWVyWSIsImNsaWVudFgiLCJjbGllbnRZIiwiY2lyY2xlUmFkaXVzIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZGl2IiwiY2xhc3NOYW1lIiwibWl4QmxlbmRNb2RlIiwidHJhbnNmb3JtIiwidHJhbnNmb3JtT3JpZ2luIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/pursuer.tsx\n"));

/***/ })

});