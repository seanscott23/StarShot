/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Level1.js":
/*!***********************!*\
  !*** ./src/Level1.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level1; });\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacles */ \"./src/obstacles.js\");\n\n\nclass Level1 {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.obstacle1 =  new _obstacles__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, {\n    height: 60,\n    width: 50,\n    x: 500,\n    y: 100,\n  });\n   this.obstacle2 = new _obstacles__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, {\n    height: 60,\n    width: 50,\n    x: 600,\n    y: 100,\n  });\n   this.obstacle3 = new _obstacles__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, {\n    height: 60,\n    width: 50,\n    x: 700,\n    y: 100,\n  });\n    this.obstacles = [this.obstacle1, this.obstacle2, this.obstacle3];\n  }\n\n  draw(){\n     this.obstacle1.draw();\n     this.obstacle2.draw();\n     this.obstacle3.draw();\n  }\n\n\n  \n\n}\n\n//# sourceURL=webpack:///./src/Level1.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Level1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Level1 */ \"./src/Level1.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\n  const canvas = document.querySelector(\"canvas\");\n   const ctx = canvas.getContext(\"2d\");\n  const level1 = new _Level1__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n \n\n const startGame = () => {\n  canvas.width = window.innerWidth - 350;\n  canvas.height = window.innerHeight;\n  document.getElementById(\"game-over\").style.display = none;\n }\n \n  startGame();\n\n\n  const rectangle = {\n    height: 30,\n    jumping: true,\n    width: 30,\n    old_x: 160,\n    old_y: 0,\n    x: 350,\n    x_velocity: 0,\n    y: 0,\n    y_velocity: 0,\n  };\n\n\n  const controller = {\n    left: false,\n    right: false,\n    up: false,\n    keyListener: function (event) {\n      let key_state = event.type == \"keydown\" ? true : false;\n      switch (event.keyCode) {\n        case 37:\n          controller.left = key_state;\n          break;\n        case 38:\n          controller.up = key_state;\n          break;\n        case 39:\n          controller.right = key_state;\n          break;\n      }\n    },\n  };\n\n  const loop = () => {\n///if player is not in the air, jump\n    if (controller.up && rectangle.jumping === false) {\n      rectangle.y_velocity -= 20;\n      rectangle.jumping = true;\n    }\n////sets velocity to left\n    if (controller.left) {\n      rectangle.x_velocity -= 0.5;\n    }\n///sets velocity to right\n    if (controller.right) {\n      rectangle.x_velocity += 0.5;\n    }\n\n    if(isgameOver()){\n      rectangle.x_velocity = 0;\n      rectangle.y_velocity = 0;\n      displayResetScreen()\n    }\n    ///speeds up the player\n    rectangle.y_velocity += 1.5;\n    rectangle.x += rectangle.x_velocity;\n    rectangle.y += rectangle.y_velocity;\n    rectangle.x_velocity *= 0.9;\n    rectangle.y_velocity *= 0.9;\n\n    ////to make sure player is on the ground\n    if (rectangle.y > 180 - 16 - 32) {\n      rectangle.jumping = false;\n      rectangle.y = 180 - 16 - 32;\n      rectangle.y_velocity = 0;\n    }\n\n//////bounces off of the left or right wall\n    if (rectangle.x < 300) {\n      rectangle.x_velocity = -rectangle.x_velocity * 2;\n    } else if (rectangle.x > window.innerWidth - 400) {\n      rectangle.x_velocity = -rectangle.x_velocity * 2;\n    }\n\n    // const getDistance = (x, y, x2, y2) => {\n      \n    //    let x_distance = x2 - x;\n    //    let y_distance = y2 - y;\n    //    return Math.sqrt(Math.pow(x_distance, 2) + Math.pow(y_distance, 2));\n    //  };\n\n     const getXDistance = (x, x2) => {\n      return x2 - x - 30;\n     }\n\n\n    // const distance =  getDistance(\n    //   rectangle.x, rectangle.y,\n    //    level1.obstacle1.rectangle2.x, level1.obstacle1.rectangle2.y);\n\n     const distance = getXDistance(rectangle.x, level1.obstacle1.rectangle2.x);\n    \n      const isgameOver = (distance) => {\n        if (distance <= 1) {\n          return true\n        }\n        return false\n  }\n\n  \n\n\n    ctx.fillStyle = \"gray\";\n    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);\n    ctx.fillStyle = \"green\";\n    ctx.beginPath();\n    ctx.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);\n    ctx.fill();\n    ctx.strokeStyle = \"black\";\n    ctx.lineWidth = 3;\n    ctx.beginPath();\n    ctx.moveTo(0, 160);\n    ctx.lineTo(window.innerWidth, 160);\n    ctx.stroke();\n    level1.draw();\n    window.requestAnimationFrame(loop);\n  };\n\n  window.addEventListener(\"keydown\", controller.keyListener);\n  window.addEventListener(\"keyup\", controller.keyListener);\n  window.requestAnimationFrame(loop);\n});\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//   let x = 100;\n//   let y = 660;\n//   let dx = (Math.random - 0.5) * 8;\n//   let dy = (Math.random - 0.5) * 8;\n//   let radius = 30;\n\n//   function animate() {\n//     requestAnimationFrame(animate);\n//     ctx.clearRect(0, 0, innerWidth, innerHeight)\n//     ctx.lineWidth = 5;\n//      ctx.beginPath();\n//     ctx.arc(x, y, radius, 0, Math.PI * 2, false)\n//     ctx.fill();\n//     ctx.fillStyle ='green';\n//     ctx.strokeStyle = \"green\";\n//     ctx.stroke();\n \n//     if(x + radius > innerWidth || x - radius < 0){\n//       dx = -dx\n//     }\n\n//     if( y + radius > innerHeight || y - radius < 0){\n//       dy = -dy\n//     }\n//     x += dx;\n\n//   }\n\n//   animate();\n \n//   // const game = new Game();\n//   // new GameView(game, ctx).start();\n// // });\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Obstacle; });\n\nclass Obstacle {\n  constructor(ctx, options){\n    this.ctx = ctx;\n    this.rectangle2 = {\n       height: options.height,\n       width: options.width,\n       x: options.x,\n       y: options.y,\n     };\n  }\n\n  draw() {\n      this.ctx.rect(this.rectangle2.x, this.rectangle2.y, this.rectangle2.width, this.rectangle2.height);\n      this.ctx.fillStyle = \"black\";\n      this.ctx.fill();\n   }\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/obstacles.js?");

/***/ })

/******/ });