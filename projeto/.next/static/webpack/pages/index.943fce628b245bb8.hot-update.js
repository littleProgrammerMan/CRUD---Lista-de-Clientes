"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_input___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/input/ */ \"./src/components/input/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), clients = ref[0], setClients = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref2[0], setEmail = ref2[1];\n    var handleSubmitCreateClient = function(e) {\n        e.preventDefault();\n        if (!name && email) return;\n        setClients(clients.concat({\n            id: new Date().getMilliseconds().toString(),\n            name: name,\n            email: email\n        }));\n        setName(\"\");\n        setEmail(\"\");\n    };\n    var handleSubmitUpdateClient = function(e) {\n        e.preventDefault();\n        if (!name && email) return;\n        setClients(clients.concat({\n            id: new Date().getMilliseconds().toString(),\n            name: name,\n            email: email\n        }));\n        setName(\"\");\n        setEmail(\"\");\n    };\n    var handleDeleteClient = function(id) {\n        setClients(clients.filter(function(client) {\n            return client.id !== id;\n        }));\n    };\n    var handleChangeName = function(text) {\n        setName(text);\n    };\n    var handleChangeEmail = function(text) {\n        setEmail(text);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        margin: \"4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                color: \"white\",\n                justifyContent: \"space-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        color: \"black\",\n                        fontSize: \"2xl\",\n                        children: \"Lista de Clientes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        colorScheme: \"blue\",\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                marginY: \"1rem\",\n                as: \"form\",\n                onSubmit: handleSubmitCreateClient,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input___WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"name\",\n                        label: \"Nome\",\n                        value: name,\n                        type: \"text\",\n                        onChange: function(e) {\n                            return handleChangeName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input___WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"email\",\n                        label: \"Email\",\n                        value: email,\n                        type: \"email\",\n                        onChange: function(e) {\n                            return handleChangeEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        fontSize: \"sm\",\n                        alignSelf: \"flex-end\",\n                        colorScheme: \"blue\",\n                        type: \"submit\",\n                        children: \"Cadastro\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.TableContainer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                    variant: \"simple\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Thead, {\n                            bgColor: \"blue.500\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        textColor: \"white\",\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        textColor: \"white\",\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        textColor: \"white\",\n                                        children: \"Action\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tbody, {\n                            children: clients.map(function(client) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tr, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: client.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: client.email\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                                justifyContent: \"space-between\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                        size: \"sm\",\n                                                        fontSize: \"smaller\",\n                                                        colorScheme: \"yellow\",\n                                                        children: \"Editar\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                                        lineNumber: 109,\n                                                        columnNumber: 21\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                        size: \"sm\",\n                                                        fontSize: \"smaller\",\n                                                        colorScheme: \"red\",\n                                                        onClick: function() {\n                                                            return handleDeleteClient(client.id);\n                                                        },\n                                                        children: \"Remover\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                                        lineNumber: 112,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                                lineNumber: 108,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, clients.email, true, {\n                                    fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gladstonsilvacosta/Desktop/GitHub/CRUD-Lista-de-Clientes/projeto/src/pages/index.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"Gfaf+wZ1Y+fmanvomg9WDBY2rVM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQzlCOzs7OztnQ0FDQztzQ0FDUiw4REFBQzVDLG1EQUFLO3NDQUNITyxPQUFPLENBQUNzQyxHQUFHLENBQUMsU0FBQ3JCLE1BQU07cURBQ2xCLDhEQUFDdkIsZ0RBQUU7O3NEQUNELDhEQUFDRSxnREFBRTtzREFBRXFCLE1BQU0sQ0FBQ2YsSUFBSTs7Ozs7aURBQU07c0RBQ3RCLDhEQUFDTixnREFBRTtzREFBRXFCLE1BQU0sQ0FBQ2IsS0FBSzs7Ozs7aURBQU07c0RBQ3ZCLDhEQUFDUixnREFBRTtzREFDRCw0RUFBQ1Isa0RBQUk7Z0RBQUNtQyxjQUFjLEVBQUMsZUFBZTs7a0VBQ2xDLDhEQUFDcEMsb0RBQU07d0RBQUNvRCxJQUFJLEVBQUMsSUFBSTt3REFBQ2YsUUFBUSxFQUFDLFNBQVM7d0RBQUNDLFdBQVcsRUFBQyxRQUFRO2tFQUFDLFFBRTFEOzs7Ozs2REFBUztrRUFDVCw4REFBQ3RDLG9EQUFNO3dEQUFDb0QsSUFBSSxFQUFDLElBQUk7d0RBQUNmLFFBQVEsRUFBQyxTQUFTO3dEQUFDQyxXQUFXLEVBQUMsS0FBSzt3REFBQ2UsT0FBTyxFQUFFO21FQUFNekIsa0JBQWtCLENBQUNFLE1BQU0sQ0FBQ1AsRUFBRSxDQUFDO3lEQUFBO2tFQUFFLFNBRXJHOzs7Ozs2REFBUzs7Ozs7O3FEQUNKOzs7OztpREFDSjs7bUNBWkVWLE9BQU8sQ0FBQ0ksS0FBSzs7Ozt5Q0FhakI7NkJBQ04sQ0FBQzs7Ozs7Z0NBQ0k7Ozs7Ozt3QkFDRjs7Ozs7b0JBQ087Ozs7OztZQUNiLENBQ047Q0FDSDtHQXpHdUJMLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgVlN0YWNrLFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIFRleHQsXG4gIEJveCxcbiAgVGFibGUsXG4gIFRoZWFkLFxuICBUYm9keSxcbiAgVHIsXG4gIFRoLFxuICBUZCxcbiAgVGFibGVDb250YWluZXIsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCBJbnB1dEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXQvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjbGllbnRzLCBzZXRDbGllbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdENyZWF0ZUNsaWVudCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghbmFtZSAmJiBlbWFpbCkgcmV0dXJuO1xuXG4gICAgc2V0Q2xpZW50cyhjbGllbnRzLmNvbmNhdCh7IGlkOiBuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpLnRvU3RyaW5nKCksIG5hbWUsIGVtYWlsIH0pKTtcblxuICAgIHNldE5hbWUoXCJcIik7XG4gICAgc2V0RW1haWwoXCJcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0VXBkYXRlQ2xpZW50ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFuYW1lICYmIGVtYWlsKSByZXR1cm47XG5cbiAgICBzZXRDbGllbnRzKGNsaWVudHMuY29uY2F0KHsgaWQ6IG5ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCkudG9TdHJpbmcoKSwgbmFtZSwgZW1haWwgfSkpO1xuXG4gICAgc2V0TmFtZShcIlwiKTtcbiAgICBzZXRFbWFpbChcIlwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVDbGllbnQgPSAoaWQpID0+IHtcbiAgICBzZXRDbGllbnRzKGNsaWVudHMuZmlsdGVyKGNsaWVudCA9PiBjbGllbnQuaWQgIT09IGlkKSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZU5hbWUgPSAodGV4dCkgPT4ge1xuICAgIHNldE5hbWUodGV4dCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlRW1haWwgPSAodGV4dCkgPT4ge1xuICAgIHNldEVtYWlsKHRleHQpO1xuICB9OyAgXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG1hcmdpbj1cIjRcIj5cbiAgICAgIDxGbGV4IGNvbG9yPVwid2hpdGVcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgPFRleHQgY29sb3I9XCJibGFja1wiIGZvbnRTaXplPVwiMnhsXCI+XG4gICAgICAgICAgTGlzdGEgZGUgQ2xpZW50ZXNcbiAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJibHVlXCI+KzwvQnV0dG9uPlxuICAgICAgPC9GbGV4PlxuXG4gICAgICA8VlN0YWNrIG1hcmdpblk9XCIxcmVtXCIgYXM9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdENyZWF0ZUNsaWVudH0+XG4gICAgICAgIDxJbnB1dEZvcm1cbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgbGFiZWw9XCJOb21lXCJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0Rm9ybVxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBmb250U2l6ZT1cInNtXCJcbiAgICAgICAgICBhbGlnblNlbGY9XCJmbGV4LWVuZFwiXG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJibHVlXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIENhZGFzdHJvXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9WU3RhY2s+XG5cbiAgICAgIDxUYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgPFRhYmxlIHZhcmlhbnQ9XCJzaW1wbGVcIj5cbiAgICAgICAgICA8VGhlYWQgYmdDb2xvcj1cImJsdWUuNTAwXCI+XG4gICAgICAgICAgICA8VHI+XG4gICAgICAgICAgICAgIDxUaCB0ZXh0Q29sb3I9XCJ3aGl0ZVwiPk5hbWU8L1RoPlxuICAgICAgICAgICAgICA8VGggdGV4dENvbG9yPVwid2hpdGVcIj5FbWFpbDwvVGg+XG4gICAgICAgICAgICAgIDxUaCB0ZXh0Q29sb3I9XCJ3aGl0ZVwiPkFjdGlvbjwvVGg+XG4gICAgICAgICAgICA8L1RyPlxuICAgICAgICAgIDwvVGhlYWQ+XG4gICAgICAgICAgPFRib2R5PlxuICAgICAgICAgICAge2NsaWVudHMubWFwKChjbGllbnQpID0+IChcbiAgICAgICAgICAgICAgPFRyIGtleT17Y2xpZW50cy5lbWFpbH0+XG4gICAgICAgICAgICAgICAgPFRkPntjbGllbnQubmFtZX08L1RkPlxuICAgICAgICAgICAgICAgIDxUZD57Y2xpZW50LmVtYWlsfTwvVGQ+XG4gICAgICAgICAgICAgICAgPFRkPlxuICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgZm9udFNpemU9XCJzbWFsbGVyXCIgY29sb3JTY2hlbWU9XCJ5ZWxsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICBFZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgZm9udFNpemU9XCJzbWFsbGVyXCIgY29sb3JTY2hlbWU9XCJyZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVDbGllbnQoY2xpZW50LmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8L1RkPlxuICAgICAgICAgICAgICA8L1RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJWU3RhY2siLCJCdXR0b24iLCJGbGV4IiwiVGV4dCIsIkJveCIsIlRhYmxlIiwiVGhlYWQiLCJUYm9keSIsIlRyIiwiVGgiLCJUZCIsIlRhYmxlQ29udGFpbmVyIiwiSW5wdXRGb3JtIiwiSG9tZSIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwiaGFuZGxlU3VibWl0Q3JlYXRlQ2xpZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uY2F0IiwiaWQiLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwidG9TdHJpbmciLCJoYW5kbGVTdWJtaXRVcGRhdGVDbGllbnQiLCJoYW5kbGVEZWxldGVDbGllbnQiLCJmaWx0ZXIiLCJjbGllbnQiLCJoYW5kbGVDaGFuZ2VOYW1lIiwidGV4dCIsImhhbmRsZUNoYW5nZUVtYWlsIiwibWFyZ2luIiwiY29sb3IiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwiY29sb3JTY2hlbWUiLCJtYXJnaW5ZIiwiYXMiLCJvblN1Ym1pdCIsImxhYmVsIiwidmFsdWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJhbGlnblNlbGYiLCJ2YXJpYW50IiwiYmdDb2xvciIsInRleHRDb2xvciIsIm1hcCIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});