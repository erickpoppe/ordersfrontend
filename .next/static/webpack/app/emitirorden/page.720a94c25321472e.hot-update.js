"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/emitirorden/page",{

/***/ "(app-pages-browser)/./src/app/emitirorden/page.js":
/*!*************************************!*\
  !*** ./src/app/emitirorden/page.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CartPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/cartSlice */ \"(app-pages-browser)/./src/redux/slices/cartSlice.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CartPage() {\n    _s();\n    const [orden, setOrden] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { handleSubmit, register } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const submitHandler = async (formData)=>{\n        try {\n            const ordenId = formData.orden_id; // Get the orden_id from the form data\n            setOrden(ordenId);\n            const customerId = 1; // Set the customer_id\n            const url = \"https://dev-core-invoice-service-q642kqwota-uc.a.run.app/orders/\".concat(ordenId, \"/emit?customer_id=\").concat(customerId);\n            const headers = {\n                Accept: \"application/json\"\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].put(url, null, {\n                headers\n            }); // Use axios.put for a PUT request\n            alert(\"Orden nueva emitida con ID: \".concat(response.data.id, \" y \"));\n            console.log(\"Order created:\", response.data);\n        } catch (error) {\n            alert(\"Error creating the order\");\n            console.error(\"Error creating order:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card  p-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mb-2 text-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"Emitir orden\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/emitirorden/page.js\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/emitirorden/page.js\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"mx-auto max-w-screen-md\",\n                        onSubmit: handleSubmit(submitHandler),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"N\\xfamero de la orden :\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/emitirorden/page.js\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ...register(\"orden_id\"),\n                                type: \"number\",\n                                id: \"orden_id\",\n                                className: \"border rounded p-1 ml-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/emitirorden/page.js\",\n                                lineNumber: 49,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4 flex justify-between\",\n                                style: {\n                                    marginTop: \"1rem\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"primary-button\",\n                                    children: \"Emitir orden\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/emitirorden/page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/emitirorden/page.js\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/emitirorden/page.js\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/emitirorden/page.js\",\n                lineNumber: 43,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/emitirorden/page.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/emitirorden/page.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(CartPage, \"5rBJiskYIMFc2cTgdVO3r5/ksy0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = CartPage;\nvar _c;\n$RefreshReg$(_c, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZW1pdGlyb3JkZW4vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ2Y7QUFDUztBQUNJO0FBQ2hCO0FBQ21EO0FBRTlELFNBQVNROztJQUVwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVEsU0FBU1gsMERBQVNBO0lBRXhCLE1BQU0sRUFBRVksWUFBWSxFQUFFQyxRQUFRLEVBQUUsR0FBR1Qsd0RBQU9BO0lBRTFDLE1BQU1VLGdCQUFnQixPQUFPQztRQUN6QixJQUFJO1lBQ0EsTUFBTUMsVUFBVUQsU0FBU0UsUUFBUSxFQUFFLHNDQUFzQztZQUN6RVAsU0FBU007WUFFVCxNQUFNRSxhQUFhLEdBQUcsc0JBQXNCO1lBRTVDLE1BQU1DLE1BQU0sbUVBQStGRCxPQUE1QkYsU0FBUSxzQkFBK0IsT0FBWEU7WUFFM0csTUFBTUUsVUFBVTtnQkFDWkMsUUFBUTtZQUNaO1lBRUEsTUFBTUMsV0FBVyxNQUFNakIsNkNBQUtBLENBQUNrQixHQUFHLENBQUNKLEtBQUssTUFBTTtnQkFBRUM7WUFBUSxJQUFJLGtDQUFrQztZQUU1RkksTUFBTSwrQkFBZ0QsT0FBakJGLFNBQVNHLElBQUksQ0FBQ0MsRUFBRSxFQUFDO1lBQ3REQyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCTixTQUFTRyxJQUFJO1FBQy9DLEVBQUUsT0FBT0ksT0FBTztZQUNaTCxNQUFPO1lBQ1BHLFFBQVFFLEtBQUssQ0FBQyx5QkFBeUJBO1FBQzNDO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7a0JBQ0csNEVBQUNBO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQ1YsNEVBQUNFO3NDQUFFOzs7Ozs7Ozs7OztrQ0FFUCw4REFBQ0M7d0JBQUtILFdBQVU7d0JBQTBCSSxVQUFVdkIsYUFBYUU7OzBDQUM3RCw4REFBQ2dCOzBDQUFJOzs7Ozs7MENBQ0wsOERBQUNNO2dDQUNJLEdBQUd2QixTQUFTLFdBQVc7Z0NBQ3hCd0IsTUFBSztnQ0FDTFgsSUFBRztnQ0FDSEssV0FBVTs7Ozs7OzBDQUVkLDhEQUFDRDtnQ0FBSUMsV0FBVTtnQ0FBNEJPLE9BQU87b0NBQUVDLFdBQVc7Z0NBQU87MENBQ2xFLDRFQUFDQztvQ0FBT1QsV0FBVTs4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vRDtHQXJEd0J2Qjs7UUFHTFIsc0RBQVNBO1FBRVdJLG9EQUFPQTs7O0tBTHRCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2VtaXRpcm9yZGVuL3BhZ2UuanM/NjFlYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHNhdmVDbGllbnRJZCwgc2F2ZVNoaXBwaW5nQWRkcmVzcyB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9jYXJ0U2xpY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydFBhZ2UoKSB7XG5cbiAgICBjb25zdCBbb3JkZW4sIHNldE9yZGVuXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyIH0gPSB1c2VGb3JtKCk7XG5cbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKGZvcm1EYXRhKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBvcmRlbklkID0gZm9ybURhdGEub3JkZW5faWQ7IC8vIEdldCB0aGUgb3JkZW5faWQgZnJvbSB0aGUgZm9ybSBkYXRhXG4gICAgICAgICAgICBzZXRPcmRlbihvcmRlbklkKTtcblxuICAgICAgICAgICAgY29uc3QgY3VzdG9tZXJJZCA9IDE7IC8vIFNldCB0aGUgY3VzdG9tZXJfaWRcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vZGV2LWNvcmUtaW52b2ljZS1zZXJ2aWNlLXE2NDJrcXdvdGEtdWMuYS5ydW4uYXBwL29yZGVycy8ke29yZGVuSWR9L2VtaXQ/Y3VzdG9tZXJfaWQ9JHtjdXN0b21lcklkfWA7XG5cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQodXJsLCBudWxsLCB7IGhlYWRlcnMgfSk7IC8vIFVzZSBheGlvcy5wdXQgZm9yIGEgUFVUIHJlcXVlc3RcblxuICAgICAgICAgICAgYWxlcnQoYE9yZGVuIG51ZXZhIGVtaXRpZGEgY29uIElEOiAke3Jlc3BvbnNlLmRhdGEuaWR9IHkgYCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9yZGVyIGNyZWF0ZWQ6XCIsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoYEVycm9yIGNyZWF0aW5nIHRoZSBvcmRlcmApO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIG9yZGVyOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCAgcC01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPkVtaXRpciBvcmRlbjwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1zY3JlZW4tbWRcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdEhhbmRsZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TsO6bWVybyBkZSBsYSBvcmRlbiA6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJvcmRlbl9pZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm9yZGVuX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwLTEgbWwtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGZsZXgganVzdGlmeS1iZXR3ZWVuXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnktYnV0dG9uXCI+RW1pdGlyIG9yZGVuPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwiYXhpb3MiLCJzYXZlQ2xpZW50SWQiLCJzYXZlU2hpcHBpbmdBZGRyZXNzIiwiQ2FydFBhZ2UiLCJvcmRlbiIsInNldE9yZGVuIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXIiLCJzdWJtaXRIYW5kbGVyIiwiZm9ybURhdGEiLCJvcmRlbklkIiwib3JkZW5faWQiLCJjdXN0b21lcklkIiwidXJsIiwiaGVhZGVycyIsIkFjY2VwdCIsInJlc3BvbnNlIiwicHV0IiwiYWxlcnQiLCJkYXRhIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJzdHlsZSIsIm1hcmdpblRvcCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/emitirorden/page.js\n"));

/***/ })

});