"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxGcm9udGVuZCBXZWJXYXZlIEJvb3RjYW1wXFxlY29tbWVyY2Utc2l0ZS1uZXh0anMtbm9kZWpzXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcYXBpXFxuYXZpZ2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4uL2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb24nO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1uYXZpZ2F0aW9uLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/login/page.tsx":
/*!****************************!*\
  !*** ./app/login/page.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Login = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: '',\n        email: '',\n        password: '',\n        address: ''\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault(); // Formun varsayılan gönderimini engelle\n        try {\n            const response = await fetch('http://localhost:5000/login', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(formData)\n            });\n            if (!response.ok) {\n                // Eğer yanıt başarılı değilse, hata mesajını göster\n                const errorData = await response.json();\n                alert(errorData.error || 'E-posta veya şifre yanlış');\n            } else {\n                // Başarılı yanıtı al\n                const result = await response.json();\n                sessionStorage.setItem('user', JSON.stringify(result.user));\n                console.log(\"başarılı\");\n                // Anasayfaya yönlendir\n                (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.redirect)('/home');\n            }\n        } catch (error) {\n            console.error('Sunucu hatası:', error);\n            alert('Bir hata oluştu, lütfen tekrar deneyin.');\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"login-page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"auth-form\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Giriş Yapın\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Email address\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                className: \"form-control\",\n                                name: \"email\",\n                                placeholder: \"Enter email\",\n                                value: formData.email,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                className: \"form-control\",\n                                name: \"password\",\n                                id: \"exampleInputPassword1\",\n                                placeholder: \"Password\",\n                                value: formData.password,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"auth-button\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\login\\\\page.tsx\",\n            lineNumber: 58,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Frontend WebWave Bootcamp\\\\ecommerce-site-nextjs-nodejs\\\\client\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"8ctdB5HkNSJQc9jw6ic0GvsT1wA=\");\n_c = Login;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ0c7QUFTM0MsTUFBTUcsUUFBUTs7SUFDVixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQVc7UUFDL0NLLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFNBQVM7SUFDYjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDbEIsTUFBTSxFQUFFTCxJQUFJLEVBQUVNLEtBQUssRUFBRSxHQUFHRCxFQUFFRSxNQUFNO1FBQ2hDUixZQUFZO1lBQUUsR0FBR0QsUUFBUTtZQUFFLENBQUNFLEtBQUssRUFBRU07UUFBTTtJQUM3QztJQUVBLE1BQU1FLGVBQWUsT0FBT0g7UUFDeEJBLEVBQUVJLGNBQWMsSUFBSSx3Q0FBd0M7UUFFNUQsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSwrQkFBK0I7Z0JBQ3hEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2xCO1lBQ3pCO1lBRUEsSUFBSSxDQUFDWSxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2Qsb0RBQW9EO2dCQUNwRCxNQUFNQyxZQUFZLE1BQU1SLFNBQVNTLElBQUk7Z0JBQ3JDQyxNQUFNRixVQUFVRyxLQUFLLElBQUk7WUFDN0IsT0FBTztnQkFDSCxxQkFBcUI7Z0JBQ3JCLE1BQU1DLFNBQVMsTUFBTVosU0FBU1MsSUFBSTtnQkFDbENJLGVBQWVDLE9BQU8sQ0FBQyxRQUFRVCxLQUFLQyxTQUFTLENBQUNNLE9BQU9HLElBQUk7Z0JBQ3pEQyxRQUFRQyxHQUFHLENBQUM7Z0JBRVosdUJBQXVCO2dCQUN2Qi9CLHlEQUFRQSxDQUFDO1lBQ2I7UUFDSixFQUFFLE9BQU95QixPQUFPO1lBQ1pLLFFBQVFMLEtBQUssQ0FBQyxrQkFBa0JBO1lBQ2hDRCxNQUFNO1FBQ1Y7SUFDSjtJQUVBLHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDQztnQkFBS0QsV0FBVTtnQkFBWUUsVUFBVXZCOztrQ0FDbEMsOERBQUN3QjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDSjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNJOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNHQyxNQUFLO2dDQUNMTixXQUFVO2dDQUNWN0IsTUFBSztnQ0FDTG9DLGFBQVk7Z0NBQ1o5QixPQUFPUixTQUFTRyxLQUFLO2dDQUNyQm9DLFVBQVVqQztnQ0FDVmtDLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHaEIsOERBQUNWO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7MENBQU07Ozs7OzswQ0FDUCw4REFBQ0M7Z0NBQ0dDLE1BQUs7Z0NBQ0xOLFdBQVU7Z0NBQ1Y3QixNQUFLO2dDQUNMdUMsSUFBRztnQ0FDSEgsYUFBWTtnQ0FDWjlCLE9BQU9SLFNBQVNJLFFBQVE7Z0NBQ3hCbUMsVUFBVWpDO2dDQUNWa0MsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdoQiw4REFBQ0U7d0JBQU9MLE1BQUs7d0JBQVNOLFdBQVU7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEU7R0FqRk1oQztLQUFBQTtBQW1GTixpRUFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxGcm9udGVuZCBXZWJXYXZlIEJvb3RjYW1wXFxlY29tbWVyY2Utc2l0ZS1uZXh0anMtbm9kZWpzXFxjbGllbnRcXGFwcFxcbG9naW5cXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbmludGVyZmFjZSBGb3JtRGF0YSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGFkZHJlc3M6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlPEZvcm1EYXRhPih7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBhZGRyZXNzOiAnJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gRm9ybXVuIHZhcnNhecSxbGFuIGfDtm5kZXJpbWluaSBlbmdlbGxlXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9sb2dpbicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBQT1NUIG1ldG9kdW51IGt1bGxhbsSxeW9ydXpcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSwgLy8gS3VsbGFuxLFjxLEgdmVyaWxlcmluaSBKU09OIGZvcm1hdMSxbmRhIGfDtm5kZXJpeW9ydXpcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFxJ9lciB5YW7EsXQgYmHFn2FyxLFsxLEgZGXEn2lsc2UsIGhhdGEgbWVzYWrEsW7EsSBnw7ZzdGVyXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvckRhdGEuZXJyb3IgfHwgJ0UtcG9zdGEgdmV5YSDFn2lmcmUgeWFubMSxxZ8nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEJhxZ9hcsSxbMSxIHlhbsSxdMSxIGFsXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LnVzZXIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmHFn2FyxLFsxLFcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQW5hc2F5ZmF5YSB5w7ZubGVuZGlyXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdCgnL2hvbWUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N1bnVjdSBoYXRhc8SxOicsIGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoJ0JpciBoYXRhIG9sdcWfdHUsIGzDvHRmZW4gdGVrcmFyIGRlbmV5aW4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tcGFnZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkdpcmnFnyBZYXDEsW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWwgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGgtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJyZWRpcmVjdCIsIkxvZ2luIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWRkcmVzcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiZXJyb3JEYXRhIiwianNvbiIsImFsZXJ0IiwiZXJyb3IiLCJyZXN1bHQiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImgxIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJpZCIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.tsx\n"));

/***/ })

});