"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./app/profile/page.tsx":
/*!******************************!*\
  !*** ./app/profile/page.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ProfilePage = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        _id: '',\n        name: '',\n        email: '',\n        password: '',\n        address: ''\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ProfilePage.useEffect\": ()=>{\n            // sessionStorage'dan kullanıcı bilgilerini alıyoruz\n            const userData = sessionStorage.getItem('user');\n            if (userData) {\n                setFormData(JSON.parse(userData)); // session'dan gelen bilgileri formData'ya yüklüyoruz\n            }\n        }\n    }[\"ProfilePage.useEffect\"], []);\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        }); // Form inputları değiştikçe state güncellenir\n    };\n    const handleUpdateUser = async (e)=>{\n        e.preventDefault(); // Formun varsayılan gönderimini engelleriz\n        const userId = formData._id; // Kullanıcının ID'si\n        try {\n            const response = await fetch(\"http://localhost:5000/updateUser/\" + userId, {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(formData)\n            });\n            if (response.ok) {\n                const updatedUser = await response.json();\n                console.log(\"Kullanıcı başarıyla güncellendi:\", updatedUser);\n                alert('Kullanıcı başarıyla güncellendi!');\n                sessionStorage.setItem('user', JSON.stringify(updatedUser)); // Güncellenen kullanıcı bilgilerini session'a kaydediyoruz\n            } else {\n                console.error(\"Kullanıcı güncellenemedi\");\n                alert('Kullanıcı güncellenemedi. Lütfen tekrar deneyin.');\n            }\n        } catch (err) {\n            console.error(\"Sunucu hatası:\", err);\n            alert('Bir hata oluştu, lütfen tekrar deneyin.');\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"profile-page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"auth-form\",\n                onSubmit: handleUpdateUser,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Profil Bilgilerinizi G\\xfcncelleyin\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group mt-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Adınız\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"name\",\n                                className: \"form-control\",\n                                value: formData.name,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group mt-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"E-Postanız\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                name: \"email\",\n                                className: \"form-control\",\n                                value: formData.email,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group mt-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Şifreniz\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                name: \"password\",\n                                className: \"form-control\",\n                                value: formData.password,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group mt-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Adresiniz\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"address\",\n                                className: \"form-control\",\n                                value: formData.address,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"auth-button mt-5 justify-end\",\n                        children: \"G\\xfcncelle\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 65,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\profile\\\\page.tsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProfilePage, \"iohSqOps2JOypF6J6+QihHdJt6g=\");\n_c = ProfilePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9maWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMyRTtBQVUzRSxNQUFNRyxjQUFjOztJQUNoQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQU87UUFDM0NLLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsU0FBUztJQUNiO0lBRUFSLGdEQUFTQTtpQ0FBQztZQUNOLG9EQUFvRDtZQUNwRCxNQUFNUyxXQUFXQyxlQUFlQyxPQUFPLENBQUM7WUFDeEMsSUFBSUYsVUFBVTtnQkFDVk4sWUFBWVMsS0FBS0MsS0FBSyxDQUFDSixZQUFZLHFEQUFxRDtZQUM1RjtRQUNKO2dDQUFHLEVBQUU7SUFFTCxNQUFNSyxlQUFlLENBQUNDO1FBQ2xCLE1BQU0sRUFBRVYsSUFBSSxFQUFFVyxLQUFLLEVBQUUsR0FBR0QsRUFBRUUsTUFBTTtRQUNoQ2QsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDRyxLQUFLLEVBQUVXO1FBQU0sSUFBSSw4Q0FBOEM7SUFDL0Y7SUFFQSxNQUFNRSxtQkFBbUIsT0FBT0g7UUFDNUJBLEVBQUVJLGNBQWMsSUFBSSwyQ0FBMkM7UUFDL0QsTUFBTUMsU0FBU2xCLFNBQVNFLEdBQUcsRUFBRSxxQkFBcUI7UUFFbEQsSUFBSTtZQUNBLE1BQU1pQixXQUFXLE1BQU1DLE1BQU0sc0NBQXNDRixRQUFRO2dCQUN2RUcsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNYixLQUFLYyxTQUFTLENBQUN4QjtZQUN6QjtZQUVBLElBQUltQixTQUFTTSxFQUFFLEVBQUU7Z0JBQ2IsTUFBTUMsY0FBYyxNQUFNUCxTQUFTUSxJQUFJO2dCQUN2Q0MsUUFBUUMsR0FBRyxDQUFDLG9DQUFvQ0g7Z0JBQ2hESSxNQUFNO2dCQUNOdEIsZUFBZXVCLE9BQU8sQ0FBQyxRQUFRckIsS0FBS2MsU0FBUyxDQUFDRSxlQUFlLDJEQUEyRDtZQUM1SCxPQUFPO2dCQUNIRSxRQUFRSSxLQUFLLENBQUM7Z0JBQ2RGLE1BQU07WUFDVjtRQUNKLEVBQUUsT0FBT0csS0FBSztZQUNWTCxRQUFRSSxLQUFLLENBQUMsa0JBQWtCQztZQUNoQ0gsTUFBTTtRQUNWO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0M7Z0JBQUtELFdBQVU7Z0JBQVlFLFVBQVVyQjs7a0NBQ2xDLDhEQUFDc0I7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0o7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSTswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDQztnQ0FDR0MsTUFBSztnQ0FDTHRDLE1BQUs7Z0NBQ0xnQyxXQUFVO2dDQUNWckIsT0FBT2QsU0FBU0csSUFBSTtnQ0FDcEJ1QyxVQUFVOUI7Z0NBQ1YrQixRQUFROzs7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDVDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNJOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNHQyxNQUFLO2dDQUNMdEMsTUFBSztnQ0FDTGdDLFdBQVU7Z0NBQ1ZyQixPQUFPZCxTQUFTSSxLQUFLO2dDQUNyQnNDLFVBQVU5QjtnQ0FDVitCLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHaEIsOERBQUNUO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7MENBQU07Ozs7OzswQ0FDUCw4REFBQ0M7Z0NBQ0dDLE1BQUs7Z0NBQ0x0QyxNQUFLO2dDQUNMZ0MsV0FBVTtnQ0FDVnJCLE9BQU9kLFNBQVNLLFFBQVE7Z0NBQ3hCcUMsVUFBVTlCO2dDQUNWK0IsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdoQiw4REFBQ1Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSTswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDQztnQ0FDR0MsTUFBSztnQ0FDTHRDLE1BQUs7Z0NBQ0xnQyxXQUFVO2dDQUNWckIsT0FBT2QsU0FBU00sT0FBTztnQ0FDdkJvQyxVQUFVOUI7Z0NBQ1YrQixRQUFROzs7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDQzt3QkFBT0gsTUFBSzt3QkFBU04sV0FBVTtrQ0FBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkY7R0ExR01wQztLQUFBQTtBQTRHTixpRUFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxGcm9udGVuZCBXZWJXYXZlIEJvb3RjYW1wXFxlY29tbWVyY2Utc2l0ZS1uZXh0anMtbm9kZWpzXFxjbGllbnRcXGFwcFxccHJvZmlsZVxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENoYW5nZUV2ZW50LCBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgVXNlciB7XHJcbiAgICBfaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgYWRkcmVzczogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBQcm9maWxlUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8VXNlcj4oe1xyXG4gICAgICAgIF9pZDogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBhZGRyZXNzOiAnJyxcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gc2Vzc2lvblN0b3JhZ2UnZGFuIGt1bGxhbsSxY8SxIGJpbGdpbGVyaW5pIGFsxLF5b3J1elxyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgICAgIGlmICh1c2VyRGF0YSkge1xyXG4gICAgICAgICAgICBzZXRGb3JtRGF0YShKU09OLnBhcnNlKHVzZXJEYXRhKSk7IC8vIHNlc3Npb24nZGFuIGdlbGVuIGJpbGdpbGVyaSBmb3JtRGF0YSd5YSB5w7xrbMO8eW9ydXpcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KTsgLy8gRm9ybSBpbnB1dGxhcsSxIGRlxJ9pxZ90aWvDp2Ugc3RhdGUgZ8O8bmNlbGxlbmlyXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZVVzZXIgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBGb3JtdW4gdmFyc2F5xLFsYW4gZ8O2bmRlcmltaW5pIGVuZ2VsbGVyaXpcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBmb3JtRGF0YS5faWQ7IC8vIEt1bGxhbsSxY8SxbsSxbiBJRCdzaVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdXBkYXRlVXNlci9gICsgdXNlcklkLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSwgLy8gR8O8bmNlbGxlbmVuIHZlcmlsZXIgYmFja2VuZCdlIGfDtm5kZXJpbGlyXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS3VsbGFuxLFjxLEgYmHFn2FyxLF5bGEgZ8O8bmNlbGxlbmRpOlwiLCB1cGRhdGVkVXNlcik7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnS3VsbGFuxLFjxLEgYmHFn2FyxLF5bGEgZ8O8bmNlbGxlbmRpIScpO1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRVc2VyKSk7IC8vIEfDvG5jZWxsZW5lbiBrdWxsYW7EsWPEsSBiaWxnaWxlcmluaSBzZXNzaW9uJ2Ega2F5ZGVkaXlvcnV6XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiS3VsbGFuxLFjxLEgZ8O8bmNlbGxlbmVtZWRpXCIpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0t1bGxhbsSxY8SxIGfDvG5jZWxsZW5lbWVkaS4gTMO8dGZlbiB0ZWtyYXIgZGVuZXlpbi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU3VudWN1IGhhdGFzxLE6XCIsIGVycik7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdCaXIgaGF0YSBvbHXFn3R1LCBsw7x0ZmVuIHRla3JhciBkZW5leWluLicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtcGFnZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVVwZGF0ZVVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Qcm9maWwgQmlsZ2lsZXJpbml6aSBHw7xuY2VsbGV5aW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZMSxbsSxejwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkUtUG9zdGFuxLF6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+xZ5pZnJlbml6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRyZXNpbml6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhdXRoLWJ1dHRvbiBtdC01IGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEfDvG5jZWxsZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9maWxlUGFnZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJfaWQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImFkZHJlc3MiLCJ1c2VyRGF0YSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVVwZGF0ZVVzZXIiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJJZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInN0cmluZ2lmeSIsIm9rIiwidXBkYXRlZFVzZXIiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImFsZXJ0Iiwic2V0SXRlbSIsImVycm9yIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaDEiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJidXR0b24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/profile/page.tsx\n"));

/***/ })

});