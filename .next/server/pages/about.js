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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hooks */ \"./components/hooks.js\");\nvar _jsxFileName = \"/home/wforte/canvas/JandMTransmission/pages/about.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction About() {\n  return __jsx(\"div\", {\n    className: \"jsx-1304233667\" + \" \" + \"body\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"/background_about.jpg\",\n    className: \"jsx-1304233667\" + \" \" + 'bgimg',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    id: \"servicewrapper\",\n    className: \"jsx-1304233667\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    className: \"jsx-1304233667\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"Services we offer\"), __jsx(\"ul\", {\n    id: \"services\",\n    className: \"jsx-1304233667\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    className: \"jsx-1304233667\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, \"Transmission repair\"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1304233667\",\n    __self: this,\n    __source: void 0\n  }, \".body.jsx-1304233667{float:left;width:100%;position:relative;overflow:hidden;height:800px;}.bgimg.jsx-1304233667{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) scale(1.1,1.1);-ms-transform:translate(-50%,-50%) scale(1.1,1.1);transform:translate(-50%,-50%) scale(1.1,1.1);width:100%;z-index:0;}#servicewrapper.jsx-1304233667{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:900;width:80%;padding:10px 5%;border-radius:8px;min-height:400px;height:auto;background:rgba(255,255,255,.6);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);}#services.jsx-1304233667{float:left;width:90%;padding:20px 5%;}#servicewrapper.jsx-1304233667 h3.jsx-1304233667{float:left;font:38px 'Montserrat';}#services.jsx-1304233667 li.jsx-1304233667{float:left;width:100%;font:18px 'Roboto';list-style:none;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dmb3J0ZS9jYW52YXMvSmFuZE1UcmFuc21pc3Npb24vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQixBQUdzQixBQU9PLEFBUUEsQUFjUCxBQUtBLEFBSUEsV0FyQ0EsQUE2QkQsQUFLYSxBQUlaLE9BL0JILEFBUUEsR0FlUSxDQTdCRSxBQXNDQyxJQS9CVixBQVFBLFFBbUJYLENBMUJpRCxBQVFmLEVBY2xDLEdBN0JrQixDQXNDQSxlQXJDSCxDQXNDZixZQXJDQSx1RUFjYyxZQUNGLFVBQ00sZ0JBQ0UsT0FYUCxXQUNELEFBV08sVUFWbkIsT0FXYyxZQUNvQixnQ0FDTCw4REFDN0IiLCJmaWxlIjoiL2hvbWUvd2ZvcnRlL2NhbnZhcy9KYW5kTVRyYW5zbWlzc2lvbi9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvaG9va3MnO1xuXG5mdW5jdGlvbiBBYm91dCgpIHtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdiZ2ltZycgc3JjPScvYmFja2dyb3VuZF9hYm91dC5qcGcnLz5cbiAgICAgIDxkaXYgaWQ9XCJzZXJ2aWNld3JhcHBlclwiPlxuICAgICAgICA8aDM+U2VydmljZXMgd2Ugb2ZmZXI8L2gzPlxuICAgICAgICA8dWwgaWQ9XCJzZXJ2aWNlc1wiPlxuICAgICAgICAgIDxsaT5UcmFuc21pc3Npb24gcmVwYWlyPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYm9keSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgaGVpZ2h0OiA4MDBweDtcbiAgICAgICAgfVxuICAgICAgICAuYmdpbWcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xLDEuMSk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuICAgICAgICAjc2VydmljZXdyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgei1pbmRleDogOTAwO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgcGFkZGluZzogMTBweCA1JTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgfVxuICAgICAgICAjc2VydmljZXMge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgcGFkZGluZzogMjBweCA1JTtcbiAgICAgICAgfVxuICAgICAgICAjc2VydmljZXdyYXBwZXIgaDMge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIGZvbnQ6IDM4cHggJ01vbnRzZXJyYXQnO1xuICAgICAgICB9XG4gICAgICAgICNzZXJ2aWNlcyBsaSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udDogMThweCAnUm9ib3RvJztcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXX0= */\\n/*@ sourceURL=/home/wforte/canvas/JandMTransmission/pages/about.js */\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkFib3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBSWYsU0FDRTtBQUFBLHdDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQXVCLE9BQUcsRUFBQyx1QkFBM0I7QUFBQSx3Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssTUFBRSxFQUFDLGdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUVFO0FBQUksTUFBRSxFQUFDLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBRkYsQ0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRxSEFERjtBQXlERDs7QUFFY0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvaG9va3MnO1xuXG5mdW5jdGlvbiBBYm91dCgpIHtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdiZ2ltZycgc3JjPScvYmFja2dyb3VuZF9hYm91dC5qcGcnLz5cbiAgICAgIDxkaXYgaWQ9XCJzZXJ2aWNld3JhcHBlclwiPlxuICAgICAgICA8aDM+U2VydmljZXMgd2Ugb2ZmZXI8L2gzPlxuICAgICAgICA8dWwgaWQ9XCJzZXJ2aWNlc1wiPlxuICAgICAgICAgIDxsaT5UcmFuc21pc3Npb24gcmVwYWlyPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYm9keSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgaGVpZ2h0OiA4MDBweDtcbiAgICAgICAgfVxuICAgICAgICAuYmdpbWcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xLDEuMSk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuICAgICAgICAjc2VydmljZXdyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgei1pbmRleDogOTAwO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgcGFkZGluZzogMTBweCA1JTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgfVxuICAgICAgICAjc2VydmljZXMge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgcGFkZGluZzogMjBweCA1JTtcbiAgICAgICAgfVxuICAgICAgICAjc2VydmljZXdyYXBwZXIgaDMge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIGZvbnQ6IDM4cHggJ01vbnRzZXJyYXQnO1xuICAgICAgICB9XG4gICAgICAgICNzZXJ2aWNlcyBsaSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udDogMThweCAnUm9ib3RvJztcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

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