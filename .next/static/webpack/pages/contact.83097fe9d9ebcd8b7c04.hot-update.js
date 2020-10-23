webpackHotUpdate_N_E("pages/contact",{

/***/ "./services/apiservice.js":
/*!********************************!*\
  !*** ./services/apiservice.js ***!
  \********************************/
/*! exports provided: submitContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitContact\", function() { return submitContact; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ \"./services/error.js\");\n/* harmony import */ var _restservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restservice */ \"./services/restservice.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction submitContact(_x, _x2, _x3, _x4) {\n  return _submitContact.apply(this, arguments);\n}\n\nfunction _submitContact() {\n  _submitContact = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name, message, email, cellphone) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // Request data to post to createprofile route on rest api\n            fetch('http://localhost:3600/contact', {\n              method: 'POST',\n              headers: {\n                \"Content-type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                \"name\": name,\n                \"message\": message,\n                \"cellphone\": cellphone,\n                \"email\": email\n              })\n            })[\"catch\"](function (error) {\n              console.log('Request failed', error);\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _submitContact.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXBpc2VydmljZS5qcz8yMzQzIl0sIm5hbWVzIjpbInN1Ym1pdENvbnRhY3QiLCJuYW1lIiwibWVzc2FnZSIsImVtYWlsIiwiY2VsbHBob25lIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sU0FBZUEsYUFBdEI7QUFBQTtBQUFBOzs7b01BQU8saUJBQTZCQyxJQUE3QixFQUFtQ0MsT0FBbkMsRUFBNENDLEtBQTVDLEVBQW1EQyxTQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0g7QUFDQUMsaUJBQUssQ0FBQywrQkFBRCxFQUFrQztBQUNuQ0Msb0JBQU0sRUFBRSxNQUQyQjtBQUVuQ0MscUJBQU8sRUFBRTtBQUNMLGdDQUFnQjtBQURYLGVBRjBCO0FBS25DQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQix3QkFBUVQsSUFEUztBQUVqQiwyQkFBV0MsT0FGTTtBQUdqQiw2QkFBYUUsU0FISTtBQUlqQix5QkFBU0Q7QUFKUSxlQUFmO0FBTDZCLGFBQWxDLENBQUwsVUFZTyxVQUFTUSxLQUFULEVBQWdCO0FBQ25CQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLEtBQTlCO0FBQ0gsYUFkRDs7QUFGRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Ii4vc2VydmljZXMvYXBpc2VydmljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhdGNoQXhpb3NFcnJvciB9IGZyb20gXCIuL2Vycm9yXCI7XG5pbXBvcnQgeyBwb3N0LCBnZXQgLCBwb3N0RmlsZX0gZnJvbSBcIi4vcmVzdHNlcnZpY2VcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0Q29udGFjdChuYW1lLCBtZXNzYWdlLCBlbWFpbCwgY2VsbHBob25lKSB7XG4gICAgLy8gUmVxdWVzdCBkYXRhIHRvIHBvc3QgdG8gY3JlYXRlcHJvZmlsZSByb3V0ZSBvbiByZXN0IGFwaVxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjM2MDAvY29udGFjdCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IG1lc3NhZ2UsXG4gICAgICAgICAgICBcImNlbGxwaG9uZVwiOiBjZWxscGhvbmUsXG4gICAgICAgICAgICBcImVtYWlsXCI6IGVtYWlsXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgZmFpbGVkJywgZXJyb3IpO1xuICAgIH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/apiservice.js\n");

/***/ })

})