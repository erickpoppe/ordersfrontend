"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/crearorden/page",{

/***/ "(app-pages-browser)/./src/app/crearorden/page.js":
/*!************************************!*\
  !*** ./src/app/crearorden/page.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CartPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/cartSlice */ \"(app-pages-browser)/./src/redux/slices/cartSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CartPage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { handleSubmit, register } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const submitHandler = async (formData)=>{\n        try {\n            const url = \"https://dev-core-invoice-service-q642kqwota-uc.a.run.app/orders/\";\n            const headers = {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            };\n            const payload = {\n                products: [\n                    {\n                        product_id: formData.product_id,\n                        quantity: formData.quantity,\n                        discount: formData.discount\n                    }\n                ],\n                customer_id: 1,\n                client_id: 1,\n                branch_id: 1,\n                pos_id: 1,\n                user_id: 1,\n                doc_sector_id: 17,\n                payment_method_id: 1,\n                currency_id: 1,\n                currency_conversion_factor: 1,\n                additional_discount: 0,\n                offline: 1\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(url, payload, {\n                headers\n            });\n            console.log(\"Order created:\", response.data);\n        } catch (error) {\n            alert(\"Error creating the order\");\n            console.error(\"Error creating order:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card  p-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mb-2 text-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"Crear orden\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"mx-auto max-w-screen-md\",\n                        onSubmit: handleSubmit(submitHandler),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"N\\xfamero ID del producto :\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ...register(\"product_id\"),\n                                type: \"number\",\n                                id: \"product_id\",\n                                className: \"border rounded p-1 ml-2\",\n                                placeholder: \"ID producto...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \" Cantidad:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ...register(\"quantity\"),\n                                type: \"number\",\n                                id: \"quantity\",\n                                className: \"border rounded p-1 ml-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Descuento: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 73,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ...register(\"discount\"),\n                                type: \"number\",\n                                id: \"discount\",\n                                className: \"border rounded p-1 ml-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4 flex justify-between\",\n                                style: {\n                                    marginTop: \"1rem\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"primary-button\",\n                                    children: \"Crear orden\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_s(CartPage, \"rHUvbTb1YJPytmaKk5pstRTEnbQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = CartPage;\nvar _c;\n$RefreshReg$(_c, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXJvcmRlbi9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDZjtBQUNIO0FBQ2dCO0FBQ2hCO0FBQ21EO0FBRTlELFNBQVNPOztJQUNwQixNQUFNQyxTQUFTUiwwREFBU0E7SUFFeEIsTUFBTSxFQUFFUyxZQUFZLEVBQUVDLFFBQVEsRUFBRSxHQUFHUCx3REFBT0E7SUFFMUMsTUFBTVEsZ0JBQWdCLE9BQU9DO1FBQ3pCLElBQUk7WUFDQSxNQUFNQyxNQUFNO1lBQ1osTUFBTUMsVUFBVTtnQkFDWkMsUUFBUTtnQkFDUixnQkFBZ0I7WUFDcEI7WUFFQSxNQUFNQyxVQUFVO2dCQUNaQyxVQUFVO29CQUNOO3dCQUNJQyxZQUFZTixTQUFTTSxVQUFVO3dCQUMvQkMsVUFBVVAsU0FBU08sUUFBUTt3QkFDM0JDLFVBQVVSLFNBQVNRLFFBQVE7b0JBQy9CO2lCQUNIO2dCQUNEQyxhQUFhO2dCQUNiQyxXQUFXO2dCQUNYQyxXQUFXO2dCQUNYQyxRQUFRO2dCQUNSQyxTQUFTO2dCQUNUQyxlQUFlO2dCQUNmQyxtQkFBbUI7Z0JBQ25CQyxhQUFhO2dCQUNiQyw0QkFBNEI7Z0JBQzVCQyxxQkFBcUI7Z0JBQ3JCQyxTQUFTO1lBQ2I7WUFFQSxNQUFNQyxXQUFXLE1BQU01Qiw2Q0FBS0EsQ0FBQzZCLElBQUksQ0FBQ3BCLEtBQUtHLFNBQVM7Z0JBQUVGO1lBQVE7WUFDMURvQixRQUFRQyxHQUFHLENBQUMsa0JBQWtCSCxTQUFTSSxJQUFJO1FBQy9DLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxNQUFPO1lBQ1BKLFFBQVFHLEtBQUssQ0FBQyx5QkFBeUJBO1FBQzNDO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0U7a0JBQ0csNEVBQUNBO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQ1YsNEVBQUNFO3NDQUFFOzs7Ozs7Ozs7OztrQ0FFUCw4REFBQ0M7d0JBQUtILFdBQVU7d0JBQTBCSSxVQUFVbkMsYUFBYUU7OzBDQUM3RCw4REFBQzRCOzBDQUFJOzs7Ozs7MENBQ0wsOERBQUNNO2dDQUNJLEdBQUduQyxTQUFTLGFBQWE7Z0NBQzFCb0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSFAsV0FBVTtnQ0FDVlEsYUFBWTs7Ozs7OzBDQUVoQiw4REFBQ1Q7MENBQUk7Ozs7OzswQ0FDTCw4REFBQ007Z0NBQ0ksR0FBR25DLFNBQVMsV0FBVztnQ0FDeEJvQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIUCxXQUFVOzs7Ozs7MENBRWQsOERBQUNEOzBDQUFJOzs7Ozs7MENBQ0wsOERBQUNNO2dDQUNJLEdBQUduQyxTQUFTLFdBQVc7Z0NBQ3hCb0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSFAsV0FBVTs7Ozs7OzBDQUVkLDhEQUFDRDtnQ0FBSUMsV0FBVTtnQ0FBNEJTLE9BQU87b0NBQUVDLFdBQVc7Z0NBQU87MENBQ2xFLDRFQUFDQztvQ0FBT1gsV0FBVTs4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vRDtHQWhGd0JqQzs7UUFDTFAsc0RBQVNBO1FBRVdHLG9EQUFPQTs7O0tBSHRCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NyZWFyb3JkZW4vcGFnZS5qcz84YmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBzYXZlQ2xpZW50SWQsIHNhdmVTaGlwcGluZ0FkZHJlc3MgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvY2FydFNsaWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRQYWdlKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyIH0gPSB1c2VGb3JtKCk7XG5cbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKGZvcm1EYXRhKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vZGV2LWNvcmUtaW52b2ljZS1zZXJ2aWNlLXE2NDJrcXdvdGEtdWMuYS5ydW4uYXBwL29yZGVycy9cIjtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogZm9ybURhdGEucHJvZHVjdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBmb3JtRGF0YS5xdWFudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50OiBmb3JtRGF0YS5kaXNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGN1c3RvbWVyX2lkOiAxLFxuICAgICAgICAgICAgICAgIGNsaWVudF9pZDogMSxcbiAgICAgICAgICAgICAgICBicmFuY2hfaWQ6IDEsXG4gICAgICAgICAgICAgICAgcG9zX2lkOiAxLFxuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IDEsXG4gICAgICAgICAgICAgICAgZG9jX3NlY3Rvcl9pZDogMTcsXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2RfaWQ6IDEsXG4gICAgICAgICAgICAgICAgY3VycmVuY3lfaWQ6IDEsXG4gICAgICAgICAgICAgICAgY3VycmVuY3lfY29udmVyc2lvbl9mYWN0b3I6IDEsXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbF9kaXNjb3VudDogMCxcbiAgICAgICAgICAgICAgICBvZmZsaW5lOiAxLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgcGF5bG9hZCwgeyBoZWFkZXJzIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPcmRlciBjcmVhdGVkOlwiLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGBFcnJvciBjcmVhdGluZyB0aGUgb3JkZXJgKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBvcmRlcjpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgIHAtNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5DcmVhciBvcmRlbjwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1zY3JlZW4tbWRcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdEhhbmRsZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TsO6bWVybyBJRCBkZWwgcHJvZHVjdG8gOjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwicHJvZHVjdF9pZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb2R1Y3RfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMSBtbC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIklEIHByb2R1Y3RvLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiBDYW50aWRhZDo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInF1YW50aXR5XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVhbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMSBtbC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRlc2N1ZW50bzogPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJkaXNjb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRpc2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwLTEgbWwtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGZsZXgganVzdGlmeS1iZXR3ZWVuXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnktYnV0dG9uXCI+Q3JlYXIgb3JkZW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJMaW5rIiwiUmVhY3QiLCJ1c2VGb3JtIiwiYXhpb3MiLCJzYXZlQ2xpZW50SWQiLCJzYXZlU2hpcHBpbmdBZGRyZXNzIiwiQ2FydFBhZ2UiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZWdpc3RlciIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtRGF0YSIsInVybCIsImhlYWRlcnMiLCJBY2NlcHQiLCJwYXlsb2FkIiwicHJvZHVjdHMiLCJwcm9kdWN0X2lkIiwicXVhbnRpdHkiLCJkaXNjb3VudCIsImN1c3RvbWVyX2lkIiwiY2xpZW50X2lkIiwiYnJhbmNoX2lkIiwicG9zX2lkIiwidXNlcl9pZCIsImRvY19zZWN0b3JfaWQiLCJwYXltZW50X21ldGhvZF9pZCIsImN1cnJlbmN5X2lkIiwiY3VycmVuY3lfY29udmVyc2lvbl9mYWN0b3IiLCJhZGRpdGlvbmFsX2Rpc2NvdW50Iiwib2ZmbGluZSIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIm1hcmdpblRvcCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/crearorden/page.js\n"));

/***/ })

});