module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/hooks.js":
/*!*****************************!*\
  !*** ./components/hooks.js ***!
  \*****************************/
/*! exports provided: useScroll, useWindowSize, useLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useScroll\", function() { return useScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWindowSize\", function() { return useWindowSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLocalStorage\", function() { return useLocalStorage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useScroll() {\n  const {\n    0: lastScrollTop,\n    1: setLastScrollTop\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: bodyOffset,\n    1: setBodyOffset\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: scrollY,\n    1: setScrollY\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(bodyOffset.top);\n  const {\n    0: scrollX,\n    1: setScrollX\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(bodyOffset.left);\n  const {\n    0: scrollDirection,\n    1: setScrollDirection\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n\n  const listener = e => {\n    setBodyOffset(document.body.getBoundingClientRect());\n    setScrollY(-bodyOffset.top);\n    setScrollX(bodyOffset.left);\n    setScrollDirection(lastScrollTop > -bodyOffset.top ? \"down\" : \"up\");\n    setLastScrollTop(-bodyOffset.top);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    window.addEventListener(\"scroll\", listener);\n    return () => {\n      window.removeEventListener(\"scroll\", listener);\n    };\n  });\n  return {\n    scrollY,\n    scrollX,\n    scrollDirection\n  };\n}\nfunction useWindowSize() {\n  const isClient = false;\n\n  function getSize() {\n    return {\n      width: isClient ? window.innerWidth : undefined,\n      height: isClient ? window.innerHeight : undefined\n    };\n  }\n\n  const {\n    0: windowSize,\n    1: setWindowSize\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getSize);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (!isClient) {\n      return false;\n    }\n\n    function handleResize() {\n      setWindowSize(getSize());\n    }\n\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n\n  return windowSize;\n}\nfunction useLocalStorage(key, initialValue) {\n  // State to store our value\n  // Pass initial state function to useState so logic is only executed once\n  const {\n    0: storedValue,\n    1: setStoredValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    try {\n      // Get from local storage by key\n      const item = window.localStorage.getItem(key); // Parse stored json or if none return initialValue\n\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      // If error also return initialValue\n      console.log(error);\n      return initialValue;\n    }\n  }); // Return a wrapped version of useState's setter function that ...\n  // ... persists the new value to localStorage.\n\n  const setValue = value => {\n    try {\n      // Allow value to be a function so we have same API as useState\n      const valueToStore = value instanceof Function ? value(storedValue) : value; // Save state\n\n      setStoredValue(valueToStore); // Save to local storage\n\n      window.localStorage.setItem(key, JSON.stringify(valueToStore));\n    } catch (error) {\n      // A more advanced implementation would handle the error case\n      console.log(error);\n    }\n  };\n\n  return [storedValue, setValue];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvb2tzLmpzPzVhNTEiXSwibmFtZXMiOlsidXNlU2Nyb2xsIiwibGFzdFNjcm9sbFRvcCIsInNldExhc3RTY3JvbGxUb3AiLCJ1c2VTdGF0ZSIsImJvZHlPZmZzZXQiLCJzZXRCb2R5T2Zmc2V0Iiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJ0b3AiLCJzY3JvbGxYIiwic2V0U2Nyb2xsWCIsImxlZnQiLCJzY3JvbGxEaXJlY3Rpb24iLCJzZXRTY3JvbGxEaXJlY3Rpb24iLCJsaXN0ZW5lciIsImUiLCJkb2N1bWVudCIsImJvZHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZVdpbmRvd1NpemUiLCJpc0NsaWVudCIsImdldFNpemUiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwiaGFuZGxlUmVzaXplIiwidXNlTG9jYWxTdG9yYWdlIiwia2V5IiwiaW5pdGlhbFZhbHVlIiwic3RvcmVkVmFsdWUiLCJzZXRTdG9yZWRWYWx1ZSIsIml0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2V0VmFsdWUiLCJ2YWx1ZSIsInZhbHVlVG9TdG9yZSIsIkZ1bmN0aW9uIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTQSxTQUFULEdBQXFCO0FBQzFCLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQyxzREFBUSxDQUFDLENBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9B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R0FBR0MsS0FBSyxJQUFJO0FBQ3hCLFFBQUk7QUFDRjtBQUNBLFlBQU1DLFlBQVksR0FDaEJELEtBQUssWUFBWUUsUUFBakIsR0FBNEJGLEtBQUssQ0FBQ1gsV0FBRCxDQUFqQyxHQUFpRFcsS0FEbkQsQ0FGRSxDQUlGOztBQUNBVixvQkFBYyxDQUFDVyxZQUFELENBQWQsQ0FMRSxDQU1GOztBQUNBN0IsWUFBTSxDQUFDb0IsWUFBUCxDQUFvQlcsT0FBcEIsQ0FBNEJoQixHQUE1QixFQUFpQ08sSUFBSSxDQUFDVSxTQUFMLENBQWVILFlBQWYsQ0FBakM7QUFDRCxLQVJELENBUUUsT0FBT0wsS0FBUCxFQUFjO0FBQ2Q7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGLEdBYkQ7O0FBZUEsU0FBTyxDQUFDUCxXQUFELEVBQWNVLFFBQWQsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob29rcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNjcm9sbCgpIHtcbiAgY29uc3QgW2xhc3RTY3JvbGxUb3AsIHNldExhc3RTY3JvbGxUb3BdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtib2R5T2Zmc2V0LCBzZXRCb2R5T2Zmc2V0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2Nyb2xsWSwgc2V0U2Nyb2xsWV0gPSB1c2VTdGF0ZShib2R5T2Zmc2V0LnRvcCk7XG4gIGNvbnN0IFtzY3JvbGxYLCBzZXRTY3JvbGxYXSA9IHVzZVN0YXRlKGJvZHlPZmZzZXQubGVmdCk7XG4gIGNvbnN0IFtzY3JvbGxEaXJlY3Rpb24sIHNldFNjcm9sbERpcmVjdGlvbl0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGxpc3RlbmVyID0gZSA9PiB7XG4gICAgc2V0Qm9keU9mZnNldChkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICBzZXRTY3JvbGxZKC1ib2R5T2Zmc2V0LnRvcCk7XG4gICAgc2V0U2Nyb2xsWChib2R5T2Zmc2V0LmxlZnQpO1xuICAgIHNldFNjcm9sbERpcmVjdGlvbihsYXN0U2Nyb2xsVG9wID4gLWJvZHlPZmZzZXQudG9wID8gXCJkb3duXCIgOiBcInVwXCIpO1xuICAgIHNldExhc3RTY3JvbGxUb3AoLWJvZHlPZmZzZXQudG9wKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxpc3RlbmVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuZXIpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgc2Nyb2xsWSxcbiAgICBzY3JvbGxYLFxuICAgIHNjcm9sbERpcmVjdGlvblxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcbiAgY29uc3QgaXNDbGllbnQgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JztcblxuICBmdW5jdGlvbiBnZXRTaXplKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoZ2V0U2l6ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzQ2xpZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIHNldFdpbmRvd1NpemUoZ2V0U2l6ZSgpKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudCBhbmQgdW5tb3VudFxuXG4gIHJldHVybiB3aW5kb3dTaXplO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlKGtleSwgaW5pdGlhbFZhbHVlKSB7XG4gIC8vIFN0YXRlIHRvIHN0b3JlIG91ciB2YWx1ZVxuICAvLyBQYXNzIGluaXRpYWwgc3RhdGUgZnVuY3Rpb24gdG8gdXNlU3RhdGUgc28gbG9naWMgaXMgb25seSBleGVjdXRlZCBvbmNlXG4gIGNvbnN0IFtzdG9yZWRWYWx1ZSwgc2V0U3RvcmVkVmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBHZXQgZnJvbSBsb2NhbCBzdG9yYWdlIGJ5IGtleVxuICAgICAgY29uc3QgaXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgLy8gUGFyc2Ugc3RvcmVkIGpzb24gb3IgaWYgbm9uZSByZXR1cm4gaW5pdGlhbFZhbHVlXG4gICAgICByZXR1cm4gaXRlbSA/IEpTT04ucGFyc2UoaXRlbSkgOiBpbml0aWFsVmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElmIGVycm9yIGFsc28gcmV0dXJuIGluaXRpYWxWYWx1ZVxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFJldHVybiBhIHdyYXBwZWQgdmVyc2lvbiBvZiB1c2VTdGF0ZSdzIHNldHRlciBmdW5jdGlvbiB0aGF0IC4uLlxuICAvLyAuLi4gcGVyc2lzdHMgdGhlIG5ldyB2YWx1ZSB0byBsb2NhbFN0b3JhZ2UuXG4gIGNvbnN0IHNldFZhbHVlID0gdmFsdWUgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBBbGxvdyB2YWx1ZSB0byBiZSBhIGZ1bmN0aW9uIHNvIHdlIGhhdmUgc2FtZSBBUEkgYXMgdXNlU3RhdGVcbiAgICAgIGNvbnN0IHZhbHVlVG9TdG9yZSA9XG4gICAgICAgIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShzdG9yZWRWYWx1ZSkgOiB2YWx1ZTtcbiAgICAgIC8vIFNhdmUgc3RhdGVcbiAgICAgIHNldFN0b3JlZFZhbHVlKHZhbHVlVG9TdG9yZSk7XG4gICAgICAvLyBTYXZlIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlVG9TdG9yZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBBIG1vcmUgYWR2YW5jZWQgaW1wbGVtZW50YXRpb24gd291bGQgaGFuZGxlIHRoZSBlcnJvciBjYXNlXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBbc3RvcmVkVmFsdWUsIHNldFZhbHVlXTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hooks.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hooks */ \"./components/hooks.js\");\nvar _jsxFileName = \"/Users/williamforte/Canvas/uncle-steven/pages/about.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction About() {\n  const initialValues = {\n    trans: \"Transmission\",\n    auto: \"Auto Repair\"\n  };\n  const newwindow = Object(_components_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useWindowSize\"])();\n  return __jsx(\"div\", {\n    className: \"jsx-284617109\" + \" \" + \"body\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"/background_about.jpg\",\n    className: \"jsx-284617109\" + \" \" + 'bgimg',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    id: \"servicewrapper\",\n    className: \"jsx-284617109\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    id: \"services\",\n    className: \"jsx-284617109\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    id: \"title\",\n    className: \"jsx-284617109\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }, \"Services We Offer\"), __jsx(\"li\", {\n    className: \"jsx-284617109\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, initialValues.trans), __jsx(\"li\", {\n    className: \"jsx-284617109\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, initialValues.auto))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"284617109\",\n    __self: this\n  }, \".body.jsx-284617109{float:left;width:100%;position:relative;overflow:hidden;height:600px;}.bgimg.jsx-284617109{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) scale(1.1,1.1);-ms-transform:translate(-50%,-50%) scale(1.1,1.1);transform:translate(-50%,-50%) scale(1.1,1.1);width:100%;z-index:0;}#servicewrapper.jsx-284617109{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:900;width:80%;height:300px;background:rgba(255,255,255,.7);}#services.jsx-284617109{float:left;width:80%;padding:10%;}#services.jsx-284617109 li.jsx-284617109{float:left;width:100%;font:18px 'Mukta';}#services.jsx-284617109 #title.jsx-284617109{font:30px 'Mukta';margin-bottom:10px;margin-left:-10px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtZm9ydGUvQ2FudmFzL3VuY2xlLXN0ZXZlbi9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmtCLEFBR3NCLEFBT08sQUFRQSxBQVVQLEFBS0EsQUFLTyxXQWxDUCxBQXlCRCxBQUtDLE9BdkJILEFBUUEsQUFvQlcsR0FUUCxDQXpCTSxBQThCQSxJQXZCVCxBQVFBLE9BV1gsRUFsQmlELEFBUWYsRUFtQmQsR0FsQ0YsQUE4QmxCLGVBS0EsQ0FsQ2UsYUFDZix1RUFjYyxZQUNGLFVBQ0csYUFDbUIsVUFYckIsV0FDRCxVQUNaLENBVUEiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW1mb3J0ZS9DYW52YXMvdW5jbGUtc3RldmVuL3BhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSAnLi4vY29tcG9uZW50cy9ob29rcyc7XG5cbmZ1bmN0aW9uIEFib3V0KCkge1xuXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4gICAgdHJhbnM6IFwiVHJhbnNtaXNzaW9uXCIsXG4gICAgYXV0bzogXCJBdXRvIFJlcGFpclwiXG4gIH1cblxuICBjb25zdCBuZXd3aW5kb3cgPSB1c2VXaW5kb3dTaXplKClcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0nYmdpbWcnIHNyYz0nL2JhY2tncm91bmRfYWJvdXQuanBnJy8+XG4gICAgICA8ZGl2IGlkPVwic2VydmljZXdyYXBwZXJcIj5cbiAgICAgICAgPHVsIGlkPVwic2VydmljZXNcIj5cbiAgICAgICAgICA8bGkgaWQ9XCJ0aXRsZVwiPlNlcnZpY2VzIFdlIE9mZmVyPC9saT5cbiAgICAgICAgICA8bGk+e2luaXRpYWxWYWx1ZXMudHJhbnN9PC9saT5cbiAgICAgICAgICA8bGk+e2luaXRpYWxWYWx1ZXMuYXV0b308L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5iZ2ltZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjEsMS4xKTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG4gICAgICAgICNzZXJ2aWNld3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB6LWluZGV4OiA5MDA7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjcpO1xuICAgICAgICB9XG4gICAgICAgICNzZXJ2aWNlcyB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgI3NlcnZpY2VzIGxpIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmb250OiAxOHB4ICdNdWt0YSc7XG4gICAgICAgIH1cbiAgICAgICAgI3NlcnZpY2VzICN0aXRsZSB7XG4gICAgICAgICAgZm9udDogMzBweCAnTXVrdGEnO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXX0= */\\n/*@ sourceURL=/Users/williamforte/Canvas/uncle-steven/pages/about.js */\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkFib3V0IiwiaW5pdGlhbFZhbHVlcyIsInRyYW5zIiwiYXV0byIsIm5ld3dpbmRvdyIsInVzZVdpbmRvd1NpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFFZixRQUFNQyxhQUFhLEdBQUc7QUFDcEJDLFNBQUssRUFBRSxjQURhO0FBRXBCQyxRQUFJLEVBQUU7QUFGYyxHQUF0QjtBQUtBLFFBQU1DLFNBQVMsR0FBR0MsdUVBQWEsRUFBL0I7QUFHQSxTQUNFO0FBQUEsdUNBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBdUIsT0FBRyxFQUFDLHVCQUEzQjtBQUFBLHVDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxNQUFFLEVBQUMsZ0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxNQUFFLEVBQUMsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLE1BQUUsRUFBQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSixhQUFhLENBQUNDLEtBQW5CLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0QsYUFBYSxDQUFDRSxJQUFuQixDQUhGLENBREYsQ0FGRjtBQUFBO0FBQUE7QUFBQSxnbUhBREY7QUFzREQ7O0FBRWNILG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICcuLi9jb21wb25lbnRzL2hvb2tzJztcblxuZnVuY3Rpb24gQWJvdXQoKSB7XG5cbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbiAgICB0cmFuczogXCJUcmFuc21pc3Npb25cIixcbiAgICBhdXRvOiBcIkF1dG8gUmVwYWlyXCJcbiAgfVxuXG4gIGNvbnN0IG5ld3dpbmRvdyA9IHVzZVdpbmRvd1NpemUoKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdiZ2ltZycgc3JjPScvYmFja2dyb3VuZF9hYm91dC5qcGcnLz5cbiAgICAgIDxkaXYgaWQ9XCJzZXJ2aWNld3JhcHBlclwiPlxuICAgICAgICA8dWwgaWQ9XCJzZXJ2aWNlc1wiPlxuICAgICAgICAgIDxsaSBpZD1cInRpdGxlXCI+U2VydmljZXMgV2UgT2ZmZXI8L2xpPlxuICAgICAgICAgIDxsaT57aW5pdGlhbFZhbHVlcy50cmFuc308L2xpPlxuICAgICAgICAgIDxsaT57aW5pdGlhbFZhbHVlcy5hdXRvfTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJnaW1nIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMSwxLjEpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIH1cbiAgICAgICAgI3NlcnZpY2V3cmFwcGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHotaW5kZXg6IDkwMDtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XG4gICAgICAgIH1cbiAgICAgICAgI3NlcnZpY2VzIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgICAgfVxuICAgICAgICAjc2VydmljZXMgbGkge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZvbnQ6IDE4cHggJ011a3RhJztcbiAgICAgICAgfVxuICAgICAgICAjc2VydmljZXMgI3RpdGxlIHtcbiAgICAgICAgICBmb250OiAzMHB4ICdNdWt0YSc7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });