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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CartPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/cartSlice */ \"(app-pages-browser)/./src/redux/slices/cartSlice.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CartPage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const submitHandler = async (data)=>{\n        try {\n            const url = \"https://dev-core-invoice-service-q642kqwota-uc.a.run.app/clients/?customer_id=1&branch_id=1&pos_id=1\";\n            const headers = {\n                \"Accept\": \"application/json\",\n                \"Content-Type\": \"application/json\"\n            };\n            const payload = {\n                \"products\": [\n                    {\n                        \"product_id\": data,\n                        \"quantity\": 2,\n                        \"discount\": 1\n                    }\n                ],\n                \"customer_id\": 1,\n                \"client_id\": 1,\n                \"branch_id\": 1,\n                \"pos_id\": 1,\n                \"user_id\": 1,\n                \"doc_sector_id\": 17,\n                \"payment_method_id\": 1,\n                \"currency_id\": 1,\n                \"currency_conversion_factor\": 1,\n                \"additional_discount\": 0,\n                \"offline\": 1\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(url, payload, {\n                headers\n            });\n        } catch (error) {\n            alert(\"Error creando la orden\");\n            console.error(\"Error creating client:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card  p-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mb-2 text-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"Crear orden\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                            lineNumber: 63,\n                            columnNumber: 50\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"mx-auto max-w-screen-md\",\n                        onSubmit: handleSubmit(submitHandler),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"N\\xfamero ID del producto :\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"idproduct\",\n                                className: \"border rounded p-1 ml-2\",\n                                placeholder: \"ID producto...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \" Cantidad:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"quantity\",\n                                className: \"border rounded p-1 ml-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 76,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Descuento: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"discount\",\n                                className: \"border rounded p-1 ml-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 82,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4 flex justify-between\",\n                                style: {\n                                    marginTop: \"1rem\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"primary-button\",\n                                    children: \"Crear orden\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n                lineNumber: 62,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n            lineNumber: 61,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/order/ordersfrontend/src/app/crearorden/page.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(CartPage, \"KME1zYUhY2NvidYaRfueh4WGRHw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = CartPage;\nvar _c;\n$RefreshReg$(_c, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXJvcmRlbi9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMEM7QUFDYjtBQUNIO0FBQ2M7QUFDZDtBQUNpRDtBQUU1RCxTQUFTTzs7SUFDcEIsTUFBTUMsU0FBU1IsMERBQVNBO0lBRXhCLE1BQU0sRUFDRlMsWUFBWSxFQUNmLEdBQUdOLHdEQUFPQTtJQUVYLE1BQU1PLGdCQUFnQixPQUFPQztRQUN6QixJQUFJO1lBQ0EsTUFBTUMsTUFBTTtZQUNaLE1BQU1DLFVBQVU7Z0JBQ1osVUFBVTtnQkFDVixnQkFBZ0I7WUFDcEI7WUFHQSxNQUFNQyxVQUFVO2dCQUNaLFlBQVk7b0JBQ1I7d0JBQ0ksY0FBY0g7d0JBQ2QsWUFBWTt3QkFDWixZQUFZO29CQUNoQjtpQkFDSDtnQkFDRCxlQUFlO2dCQUNmLGFBQWE7Z0JBQ2IsYUFBYTtnQkFDYixVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsaUJBQWlCO2dCQUNqQixxQkFBcUI7Z0JBQ3JCLGVBQWU7Z0JBQ2YsOEJBQThCO2dCQUM5Qix1QkFBdUI7Z0JBQ3ZCLFdBQVc7WUFDZjtZQUVBLE1BQU1JLFdBQVcsTUFBTVgsNkNBQUtBLENBQUNZLElBQUksQ0FBQ0osS0FBS0UsU0FBUztnQkFBRUQ7WUFBUTtRQUk5RCxFQUFFLE9BQU9JLE9BQU87WUFDWkMsTUFBTztZQUNQQyxRQUFRRixLQUFLLENBQUMsMEJBQTBCQTtRQUM1QztJQUVKO0lBR0EscUJBQ0ksOERBQUNHO2tCQUNHLDRFQUFDQTtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFlLDRFQUFDRTtzQ0FBRTs7Ozs7Ozs7Ozs7a0NBQ2hDLDhEQUFDQzt3QkFDR0gsV0FBVTt3QkFDVkksVUFBVWhCLGFBQWFDOzswQ0FFM0IsOERBQUNVOzBDQUFJOzs7Ozs7MENBQ0wsOERBQUNNO2dDQUNHQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIUCxXQUFVO2dDQUNWUSxhQUFZOzs7Ozs7MENBRWhCLDhEQUFDVDswQ0FBSTs7Ozs7OzBDQUNELDhEQUFDTTtnQ0FDR0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSFAsV0FBVTs7Ozs7OzBDQUVsQiw4REFBQ0Q7MENBQUk7Ozs7OzswQ0FDRCw4REFBQ007Z0NBQ0dDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hQLFdBQVU7Ozs7OzswQ0FFZCw4REFBQ0Q7Z0NBQUlDLFdBQVU7Z0NBQTRCUyxPQUFPO29DQUFFQyxXQUFXO2dDQUFPOzBDQUNsRSw0RUFBQ0M7b0NBQU9YLFdBQVU7OENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTL0Q7R0F2RndCZDs7UUFDTFAsc0RBQVNBO1FBSXBCRyxvREFBT0E7OztLQUxTSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NyZWFyb3JkZW4vcGFnZS5qcz84YmRhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VGb3JtfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge3NhdmVDbGllbnRJZCwgc2F2ZVNoaXBwaW5nQWRkcmVzc30gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL2NhcnRTbGljZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0UGFnZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3Qge1xuICAgICAgICBoYW5kbGVTdWJtaXRcbiAgICB9ID0gdXNlRm9ybSgpXG5cbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2Rldi1jb3JlLWludm9pY2Utc2VydmljZS1xNjQya3F3b3RhLXVjLmEucnVuLmFwcC9jbGllbnRzLz9jdXN0b21lcl9pZD0xJmJyYW5jaF9pZD0xJnBvc19pZD0xJztcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICAgICAgXCJwcm9kdWN0c1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdF9pZFwiOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNjb3VudFwiOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY3VzdG9tZXJfaWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImNsaWVudF9pZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiYnJhbmNoX2lkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJwb3NfaWRcIjogMSxcbiAgICAgICAgICAgICAgICBcInVzZXJfaWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImRvY19zZWN0b3JfaWRcIjogMTcsXG4gICAgICAgICAgICAgICAgXCJwYXltZW50X21ldGhvZF9pZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiY3VycmVuY3lfaWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImN1cnJlbmN5X2NvbnZlcnNpb25fZmFjdG9yXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJhZGRpdGlvbmFsX2Rpc2NvdW50XCI6IDAsXG4gICAgICAgICAgICAgICAgXCJvZmZsaW5lXCI6IDFcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIHBheWxvYWQsIHsgaGVhZGVycyB9KTtcblxuXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGBFcnJvciBjcmVhbmRvIGxhIG9yZGVuYCk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjbGllbnQ6JywgZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkICBwLTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1sZ1wiPjxiPkNyZWFyIG9yZGVuPC9iPjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXNjcmVlbi1tZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdEhhbmRsZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk7Dum1lcm8gSUQgZGVsIHByb2R1Y3RvIDo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaWRwcm9kdWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMSBtbC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSUQgcHJvZHVjdG8uLi5cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiBDYW50aWRhZDo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVhbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMSBtbC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+RGVzY3VlbnRvOiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGlzY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMSBtbC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgZmxleCBqdXN0aWZ5LWJldHdlZW5cIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJpbWFyeS1idXR0b25cIj5DcmVhciBvcmRlbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJMaW5rIiwiUmVhY3QiLCJ1c2VGb3JtIiwiYXhpb3MiLCJzYXZlQ2xpZW50SWQiLCJzYXZlU2hpcHBpbmdBZGRyZXNzIiwiQ2FydFBhZ2UiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzdWJtaXRIYW5kbGVyIiwiZGF0YSIsInVybCIsImhlYWRlcnMiLCJwYXlsb2FkIiwicmVzcG9uc2UiLCJwb3N0IiwiZXJyb3IiLCJhbGVydCIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/crearorden/page.js\n"));

/***/ })

});