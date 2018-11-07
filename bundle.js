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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/app.js":
/*!*******************************!*\
  !*** ./src/javascript/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./src/javascript/map.js\");\n/* harmony import */ var _city_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city.js */ \"./src/javascript/city.js\");\n/* harmony import */ var _route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route.js */ \"./src/javascript/route.js\");\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9hcHAuanM/OGE5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBNYXAgZnJvbSAnLi9tYXAuanMnXG5pbXBvcnQgQ2l0eSBmcm9tICcuL2NpdHkuanMnXG5pbXBvcnQgUm91dGUgZnJvbSAnLi9yb3V0ZS5qcydcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/javascript/app.js\n");

/***/ }),

/***/ "./src/javascript/city.js":
/*!********************************!*\
  !*** ./src/javascript/city.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass City {\n  constructor(coordinateX, coordinateY, name){\n\n    this.coordinateX = coordinateX\n    this.coordinateY = coordinateY\n    this.pos = [coordinateX, coordinateY]\n    this.name = name\n    // console.log( this.pos);\n  }\n\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (City);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC9jaXR5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvY2l0eS5qcz8zYzE0Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENpdHkge1xuICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlWCwgY29vcmRpbmF0ZVksIG5hbWUpe1xuXG4gICAgdGhpcy5jb29yZGluYXRlWCA9IGNvb3JkaW5hdGVYXG4gICAgdGhpcy5jb29yZGluYXRlWSA9IGNvb3JkaW5hdGVZXG4gICAgdGhpcy5wb3MgPSBbY29vcmRpbmF0ZVgsIGNvb3JkaW5hdGVZXVxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAvLyBjb25zb2xlLmxvZyggdGhpcy5wb3MpO1xuICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENpdHlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/javascript/city.js\n");

/***/ }),

/***/ "./src/javascript/map.js":
/*!*******************************!*\
  !*** ./src/javascript/map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _city_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city.js */ \"./src/javascript/city.js\");\n/* harmony import */ var _route_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route.js */ \"./src/javascript/route.js\");\n// import { SFtoLA, SFcord } from './app'\n\n\n\n\n\n// Atlantic\nconst BOS = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-71.0589, 42.3601, \"BOS\")\nconst BKN = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-73.9442, 40.6782, \"BKN\")\nconst NYC = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-74.0060, 40.7128, \"NYC\")\nconst PHI = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-75.1652, 39.9526, \"PHI\")\nconst TOR = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-79.3832, 43.6532, \"TOR\")\n\n// Central\nconst CHI = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-87.6298, 41.8781, \"CHI\")\nconst CLE = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-81.6944, 41.4993, \"CLE\")\nconst DET = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-83.0458, 42.3314, \"DET\")\nconst IND = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-86.1581, 39.7684, \"IND\")\nconst MIL = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-87.9065, 43.0389, \"MIL\")\n\n// Southeast\nconst ATL = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-84.3880, 33.7490, \"ATL\")\nconst CHA = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-80.8431, 35.2271, \"CHA\")\nconst MIA = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-80.1918, 25.7617, \"MIA\")\nconst ORL = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-81.3792, 28.5383, \"ORL\")\nconst WAS = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-77.0369, 38.9072, \"WAS\")\n\n//Northwest\nconst DEN = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-104.9903, 39.7392, \"DEN\")\nconst MIN = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-93.2650, 44.9778, \"MIN\")\nconst OKC = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-97.5164, 35.4676, \"OKC\")\nconst POR = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-122.6587, 45.5122, \"POR\")\nconst UTA = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-111.8910, 40.7608, \"UTA\")\n\n// Pacific\nconst OAK = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-122.414, 37.776, \"OAK\")\nconst LA = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-118.2437, 34.0522, \"LA\")\nconst PHX = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-112.0740, 33.4484, \"PHX\")\nconst SAC = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-121.4944, 38.5816, \"SAC\")\n\n\n//Southwest\nconst DAL = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-96.7970, 32.7767, \"DAL\")\nconst HOU = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-95.3698, 29.7604, \"HOU\")\nconst MEM = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-90.0490, 35.1495, \"MEM\")\nconst NOP = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-90.0715, 29.9511, \"NOP\")\nconst SAS = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-98.4936, 29.4241, \"SAS\")\n\nconst center = new _city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-98.5795, 39.8283, \"center\" )\n\nmapboxgl.accessToken = 'pk.eyJ1Ijoic3RlcGhlbmxpMzA1IiwiYSI6ImNqbncyaWR0ZzFsc2MzcW1rNWczbnVqeDYifQ.afmueMPaXRJ1f4XXcG0IgA';\nlet map = new mapboxgl.Map({\n    container: 'map',\n    style: 'mapbox://styles/mapbox/streets-v9',\n    center: center.pos,\n    zoom: 4\n});\nmap.addControl(new mapboxgl.NavigationControl())\n\n\n\nfunction createRoute(cities){\n  let result = []\n  for (let i = 0; i < cities.length - 1; i++) {\n    let city1 = cities[i]\n    let city2 = cities[i + 1]\n    let newRoute = new _route_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](city1, city2)\n    result.push(newRoute)\n  }\n  return result\n}\n\nfunction drawRoute(route){\n  map.addSource( `${route.getID()}-line`, {\n    \"type\":\"geojson\",\n    \"data\": route.route()\n  }),\n\n  map.addLayer({\n      \"id\": `${route.getID()}-line`,\n      \"source\": `${route.getID()}-line`,\n      \"type\": \"line\",\n      \"paint\": {\n          \"line-width\": 2,\n          \"line-color\": \"#FDB927\"\n      }\n  });\n}\n\nfunction drawAirplane(planeData){\n  map.addSource( 'plane', {\n    \"type\": \"geojson\",\n    \"data\": planeData\n  });\n\n  map.addLayer({\n    \"id\": 'plane',\n    \"source\": 'plane',\n    \"type\": \"symbol\",\n    \"layout\": {\n      \"icon-image\": \"airport-15\",\n      \"icon-rotate\": [\"get\", \"bearing\"],\n      \"icon-rotation-alignment\": \"map\",\n      \"icon-allow-overlap\": true,\n      \"icon-ignore-placement\": true\n    }\n  });\n}\n\n\nconst steps = 100\n\n// route.route().features[0].geometry.coordinates = route.arc()\nfunction annimateAirplane(planeObject, fullArc, counter = 0){\n\n  planeObject.features[0].geometry.coordinates = fullArc[counter];\n  map.getSource('plane').setData(planeObject);\n\n\n  planeObject.features[0].properties.bearing = turf.bearing(\n      turf.point(fullArc[counter >= steps ? counter - 1 : counter]),\n      turf.point(fullArc[counter >= steps ? counter : counter + 1])\n  );\n\n  if (counter < fullArc.length){\n    requestAnimationFrame(() => annimateAirplane(planeObject, fullArc, counter + 1))\n  }\n}\n\nconst flyOAK = document.getElementById('OAK')\n\n\nfunction flying(){\n  // put in a list of cities in this array\n  let cities = [OAK,LA, PHX, HOU, DAL, OKC, MIA, PHI, MEM, ORL, CHA, BOS, NYC, TOR, CLE, MIN, UTA, POR, OAK]\n  let routes = createRoute(cities)\n  let planeObject =\n    {\n      \"type\": \"FeatureCollection\",\n      \"features\": [{\n        \"type\": \"Feature\",\n        \"properties\": {},\n        \"geometry\": {\n          \"type\": \"Point\"\n        }\n      }]\n    };\n\n  let fullArc = []\n  for (var i = 0; i < routes.length; i++) {\n    drawRoute(routes[i])\n    fullArc.push(...routes[i].arc(steps))\n  }\n  planeObject.features[0].geometry.coordinates = routes[0].origin.pos\n  drawAirplane(planeObject)\n  annimateAirplane(planeObject, fullArc);\n\n}\n\nflyOAK.addEventListener('click', () => flying())\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (map);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC9tYXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9tYXAuanM/OTA4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBTRnRvTEEsIFNGY29yZCB9IGZyb20gJy4vYXBwJ1xuXG5pbXBvcnQgQ2l0eSBmcm9tICcuL2NpdHkuanMnXG5pbXBvcnQgUm91dGUgZnJvbSAnLi9yb3V0ZS5qcydcblxuXG4vLyBBdGxhbnRpY1xuY29uc3QgQk9TID0gbmV3IENpdHkoLTcxLjA1ODksIDQyLjM2MDEsIFwiQk9TXCIpXG5jb25zdCBCS04gPSBuZXcgQ2l0eSgtNzMuOTQ0MiwgNDAuNjc4MiwgXCJCS05cIilcbmNvbnN0IE5ZQyA9IG5ldyBDaXR5KC03NC4wMDYwLCA0MC43MTI4LCBcIk5ZQ1wiKVxuY29uc3QgUEhJID0gbmV3IENpdHkoLTc1LjE2NTIsIDM5Ljk1MjYsIFwiUEhJXCIpXG5jb25zdCBUT1IgPSBuZXcgQ2l0eSgtNzkuMzgzMiwgNDMuNjUzMiwgXCJUT1JcIilcblxuLy8gQ2VudHJhbFxuY29uc3QgQ0hJID0gbmV3IENpdHkoLTg3LjYyOTgsIDQxLjg3ODEsIFwiQ0hJXCIpXG5jb25zdCBDTEUgPSBuZXcgQ2l0eSgtODEuNjk0NCwgNDEuNDk5MywgXCJDTEVcIilcbmNvbnN0IERFVCA9IG5ldyBDaXR5KC04My4wNDU4LCA0Mi4zMzE0LCBcIkRFVFwiKVxuY29uc3QgSU5EID0gbmV3IENpdHkoLTg2LjE1ODEsIDM5Ljc2ODQsIFwiSU5EXCIpXG5jb25zdCBNSUwgPSBuZXcgQ2l0eSgtODcuOTA2NSwgNDMuMDM4OSwgXCJNSUxcIilcblxuLy8gU291dGhlYXN0XG5jb25zdCBBVEwgPSBuZXcgQ2l0eSgtODQuMzg4MCwgMzMuNzQ5MCwgXCJBVExcIilcbmNvbnN0IENIQSA9IG5ldyBDaXR5KC04MC44NDMxLCAzNS4yMjcxLCBcIkNIQVwiKVxuY29uc3QgTUlBID0gbmV3IENpdHkoLTgwLjE5MTgsIDI1Ljc2MTcsIFwiTUlBXCIpXG5jb25zdCBPUkwgPSBuZXcgQ2l0eSgtODEuMzc5MiwgMjguNTM4MywgXCJPUkxcIilcbmNvbnN0IFdBUyA9IG5ldyBDaXR5KC03Ny4wMzY5LCAzOC45MDcyLCBcIldBU1wiKVxuXG4vL05vcnRod2VzdFxuY29uc3QgREVOID0gbmV3IENpdHkoLTEwNC45OTAzLCAzOS43MzkyLCBcIkRFTlwiKVxuY29uc3QgTUlOID0gbmV3IENpdHkoLTkzLjI2NTAsIDQ0Ljk3NzgsIFwiTUlOXCIpXG5jb25zdCBPS0MgPSBuZXcgQ2l0eSgtOTcuNTE2NCwgMzUuNDY3NiwgXCJPS0NcIilcbmNvbnN0IFBPUiA9IG5ldyBDaXR5KC0xMjIuNjU4NywgNDUuNTEyMiwgXCJQT1JcIilcbmNvbnN0IFVUQSA9IG5ldyBDaXR5KC0xMTEuODkxMCwgNDAuNzYwOCwgXCJVVEFcIilcblxuLy8gUGFjaWZpY1xuY29uc3QgT0FLID0gbmV3IENpdHkoLTEyMi40MTQsIDM3Ljc3NiwgXCJPQUtcIilcbmNvbnN0IExBID0gbmV3IENpdHkoLTExOC4yNDM3LCAzNC4wNTIyLCBcIkxBXCIpXG5jb25zdCBQSFggPSBuZXcgQ2l0eSgtMTEyLjA3NDAsIDMzLjQ0ODQsIFwiUEhYXCIpXG5jb25zdCBTQUMgPSBuZXcgQ2l0eSgtMTIxLjQ5NDQsIDM4LjU4MTYsIFwiU0FDXCIpXG5cblxuLy9Tb3V0aHdlc3RcbmNvbnN0IERBTCA9IG5ldyBDaXR5KC05Ni43OTcwLCAzMi43NzY3LCBcIkRBTFwiKVxuY29uc3QgSE9VID0gbmV3IENpdHkoLTk1LjM2OTgsIDI5Ljc2MDQsIFwiSE9VXCIpXG5jb25zdCBNRU0gPSBuZXcgQ2l0eSgtOTAuMDQ5MCwgMzUuMTQ5NSwgXCJNRU1cIilcbmNvbnN0IE5PUCA9IG5ldyBDaXR5KC05MC4wNzE1LCAyOS45NTExLCBcIk5PUFwiKVxuY29uc3QgU0FTID0gbmV3IENpdHkoLTk4LjQ5MzYsIDI5LjQyNDEsIFwiU0FTXCIpXG5cbmNvbnN0IGNlbnRlciA9IG5ldyBDaXR5KC05OC41Nzk1LCAzOS44MjgzLCBcImNlbnRlclwiIClcblxubWFwYm94Z2wuYWNjZXNzVG9rZW4gPSAncGsuZXlKMUlqb2ljM1JsY0dobGJteHBNekExSWl3aVlTSTZJbU5xYm5jeWFXUjBaekZzYzJNemNXMXJOV2N6Ym5WcWVEWWlmUS5hZm11ZU1QYVhSSjFmNFhYY0cwSWdBJztcbmxldCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICBjb250YWluZXI6ICdtYXAnLFxuICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICBjZW50ZXI6IGNlbnRlci5wb3MsXG4gICAgem9vbTogNFxufSk7XG5tYXAuYWRkQ29udHJvbChuZXcgbWFwYm94Z2wuTmF2aWdhdGlvbkNvbnRyb2woKSlcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlKGNpdGllcyl7XG4gIGxldCByZXN1bHQgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNpdGllcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBsZXQgY2l0eTEgPSBjaXRpZXNbaV1cbiAgICBsZXQgY2l0eTIgPSBjaXRpZXNbaSArIDFdXG4gICAgbGV0IG5ld1JvdXRlID0gbmV3IFJvdXRlKGNpdHkxLCBjaXR5MilcbiAgICByZXN1bHQucHVzaChuZXdSb3V0ZSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGRyYXdSb3V0ZShyb3V0ZSl7XG4gIG1hcC5hZGRTb3VyY2UoIGAke3JvdXRlLmdldElEKCl9LWxpbmVgLCB7XG4gICAgXCJ0eXBlXCI6XCJnZW9qc29uXCIsXG4gICAgXCJkYXRhXCI6IHJvdXRlLnJvdXRlKClcbiAgfSksXG5cbiAgbWFwLmFkZExheWVyKHtcbiAgICAgIFwiaWRcIjogYCR7cm91dGUuZ2V0SUQoKX0tbGluZWAsXG4gICAgICBcInNvdXJjZVwiOiBgJHtyb3V0ZS5nZXRJRCgpfS1saW5lYCxcbiAgICAgIFwidHlwZVwiOiBcImxpbmVcIixcbiAgICAgIFwicGFpbnRcIjoge1xuICAgICAgICAgIFwibGluZS13aWR0aFwiOiAyLFxuICAgICAgICAgIFwibGluZS1jb2xvclwiOiBcIiNGREI5MjdcIlxuICAgICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJhd0FpcnBsYW5lKHBsYW5lRGF0YSl7XG4gIG1hcC5hZGRTb3VyY2UoICdwbGFuZScsIHtcbiAgICBcInR5cGVcIjogXCJnZW9qc29uXCIsXG4gICAgXCJkYXRhXCI6IHBsYW5lRGF0YVxuICB9KTtcblxuICBtYXAuYWRkTGF5ZXIoe1xuICAgIFwiaWRcIjogJ3BsYW5lJyxcbiAgICBcInNvdXJjZVwiOiAncGxhbmUnLFxuICAgIFwidHlwZVwiOiBcInN5bWJvbFwiLFxuICAgIFwibGF5b3V0XCI6IHtcbiAgICAgIFwiaWNvbi1pbWFnZVwiOiBcImFpcnBvcnQtMTVcIixcbiAgICAgIFwiaWNvbi1yb3RhdGVcIjogW1wiZ2V0XCIsIFwiYmVhcmluZ1wiXSxcbiAgICAgIFwiaWNvbi1yb3RhdGlvbi1hbGlnbm1lbnRcIjogXCJtYXBcIixcbiAgICAgIFwiaWNvbi1hbGxvdy1vdmVybGFwXCI6IHRydWUsXG4gICAgICBcImljb24taWdub3JlLXBsYWNlbWVudFwiOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuXG5jb25zdCBzdGVwcyA9IDEwMFxuXG4vLyByb3V0ZS5yb3V0ZSgpLmZlYXR1cmVzWzBdLmdlb21ldHJ5LmNvb3JkaW5hdGVzID0gcm91dGUuYXJjKClcbmZ1bmN0aW9uIGFubmltYXRlQWlycGxhbmUocGxhbmVPYmplY3QsIGZ1bGxBcmMsIGNvdW50ZXIgPSAwKXtcblxuICBwbGFuZU9iamVjdC5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcyA9IGZ1bGxBcmNbY291bnRlcl07XG4gIG1hcC5nZXRTb3VyY2UoJ3BsYW5lJykuc2V0RGF0YShwbGFuZU9iamVjdCk7XG5cblxuICBwbGFuZU9iamVjdC5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLmJlYXJpbmcgPSB0dXJmLmJlYXJpbmcoXG4gICAgICB0dXJmLnBvaW50KGZ1bGxBcmNbY291bnRlciA+PSBzdGVwcyA/IGNvdW50ZXIgLSAxIDogY291bnRlcl0pLFxuICAgICAgdHVyZi5wb2ludChmdWxsQXJjW2NvdW50ZXIgPj0gc3RlcHMgPyBjb3VudGVyIDogY291bnRlciArIDFdKVxuICApO1xuXG4gIGlmIChjb3VudGVyIDwgZnVsbEFyYy5sZW5ndGgpe1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBhbm5pbWF0ZUFpcnBsYW5lKHBsYW5lT2JqZWN0LCBmdWxsQXJjLCBjb3VudGVyICsgMSkpXG4gIH1cbn1cblxuY29uc3QgZmx5T0FLID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ09BSycpXG5cblxuZnVuY3Rpb24gZmx5aW5nKCl7XG4gIC8vIHB1dCBpbiBhIGxpc3Qgb2YgY2l0aWVzIGluIHRoaXMgYXJyYXlcbiAgbGV0IGNpdGllcyA9IFtPQUssTEEsIFBIWCwgSE9VLCBEQUwsIE9LQywgTUlBLCBQSEksIE1FTSwgT1JMLCBDSEEsIEJPUywgTllDLCBUT1IsIENMRSwgTUlOLCBVVEEsIFBPUiwgT0FLXVxuICBsZXQgcm91dGVzID0gY3JlYXRlUm91dGUoY2l0aWVzKVxuICBsZXQgcGxhbmVPYmplY3QgPVxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgICBcImZlYXR1cmVzXCI6IFt7XG4gICAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfTtcblxuICBsZXQgZnVsbEFyYyA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcm91dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZHJhd1JvdXRlKHJvdXRlc1tpXSlcbiAgICBmdWxsQXJjLnB1c2goLi4ucm91dGVzW2ldLmFyYyhzdGVwcykpXG4gIH1cbiAgcGxhbmVPYmplY3QuZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMgPSByb3V0ZXNbMF0ub3JpZ2luLnBvc1xuICBkcmF3QWlycGxhbmUocGxhbmVPYmplY3QpXG4gIGFubmltYXRlQWlycGxhbmUocGxhbmVPYmplY3QsIGZ1bGxBcmMpO1xuXG59XG5cbmZseU9BSy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGZseWluZygpKVxuXG5leHBvcnQgZGVmYXVsdCBtYXBcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/javascript/map.js\n");

/***/ }),

/***/ "./src/javascript/route.js":
/*!*********************************!*\
  !*** ./src/javascript/route.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Route {\n  constructor(origin, destination){\n    this.origin = origin\n    this.destination = destination\n    this.originPoint = this.originPoint.bind(this)\n    this.destinationPoint = this.destinationPoint.bind(this)\n    this.distance = this.distance.bind(this)\n    this.route = this.route.bind(this)\n    this.id = `${origin.name}-${destination.name}`\n  }\n\n  getID(){\n    return this.id\n  }\n\n  route() {\n    return ({\n      \"type\": \"FeatureCollection\",\n      \"features\": [{\n        \"type\": \"Feature\",\n        \"geometry\": {\n          \"type\": \"LineString\",\n          \"coordinates\": [\n            this.origin.pos,\n            this.destination.pos\n          ]\n        }\n      }]\n    })\n  };\n\n  originPoint() {\n    // debugger\n    return ({\n      \"type\": \"FeatureCollection\",\n      \"features\": [{\n        \"type\": \"Feature\",\n        \"properties\": {},\n        \"geometry\": {\n          \"type\": \"Point\",\n          \"coordinates\": this.origin.pos\n        }\n      }]\n    })\n  };\n\n  destinationPoint() {\n    return ({\n      \"type\": \"FeatureCollection\",\n      \"features\": [{\n        \"type\": \"Feature\",\n        \"properties\": {},\n        \"geometry\": {\n          \"type\": \"Point\",\n          \"coordinates\": this.destination.pos\n        }\n      }]\n    })\n  };\n\n\ndistance(){\n  // const line = turf.lineString([this.origin, this.destination])\n  // debugger\n  // line =\n  return turf.distance(this.originPoint().features[0], this.destinationPoint().features[0], 'kilometers');\n\n}\n\n\n\narc(steps = 25){\n  const arc = [];\n  const lineLength = this.distance(this.origin.pos,this.destination.pos)\n  for (var i = 0; i < lineLength; i += lineLength / steps ) {\n    // debugger\n    const segment = turf.along(this.route(this.origin.pos, this.destination.pos).features[0], i, 'kilometers')\n    arc.push(segment.geometry.coordinates)\n  }\n  return arc\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Route);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC9yb3V0ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3JvdXRlLmpzP2FmNjIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUm91dGUge1xuICBjb25zdHJ1Y3RvcihvcmlnaW4sIGRlc3RpbmF0aW9uKXtcbiAgICB0aGlzLm9yaWdpbiA9IG9yaWdpblxuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvblxuICAgIHRoaXMub3JpZ2luUG9pbnQgPSB0aGlzLm9yaWdpblBvaW50LmJpbmQodGhpcylcbiAgICB0aGlzLmRlc3RpbmF0aW9uUG9pbnQgPSB0aGlzLmRlc3RpbmF0aW9uUG9pbnQuYmluZCh0aGlzKVxuICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlLmJpbmQodGhpcylcbiAgICB0aGlzLnJvdXRlID0gdGhpcy5yb3V0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5pZCA9IGAke29yaWdpbi5uYW1lfS0ke2Rlc3RpbmF0aW9uLm5hbWV9YFxuICB9XG5cbiAgZ2V0SUQoKXtcbiAgICByZXR1cm4gdGhpcy5pZFxuICB9XG5cbiAgcm91dGUoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBcInR5cGVcIjogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICAgICAgXCJmZWF0dXJlc1wiOiBbe1xuICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gICAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcIkxpbmVTdHJpbmdcIixcbiAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luLnBvcyxcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ucG9zXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0pXG4gIH07XG5cbiAgb3JpZ2luUG9pbnQoKSB7XG4gICAgLy8gZGVidWdnZXJcbiAgICByZXR1cm4gKHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgICBcImZlYXR1cmVzXCI6IFt7XG4gICAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogdGhpcy5vcmlnaW4ucG9zXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfSlcbiAgfTtcblxuICBkZXN0aW5hdGlvblBvaW50KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgICAgIFwiZmVhdHVyZXNcIjogW3tcbiAgICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgICBcInByb3BlcnRpZXNcIjoge30sXG4gICAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gICAgICAgICAgXCJjb29yZGluYXRlc1wiOiB0aGlzLmRlc3RpbmF0aW9uLnBvc1xuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0pXG4gIH07XG5cblxuZGlzdGFuY2UoKXtcbiAgLy8gY29uc3QgbGluZSA9IHR1cmYubGluZVN0cmluZyhbdGhpcy5vcmlnaW4sIHRoaXMuZGVzdGluYXRpb25dKVxuICAvLyBkZWJ1Z2dlclxuICAvLyBsaW5lID1cbiAgcmV0dXJuIHR1cmYuZGlzdGFuY2UodGhpcy5vcmlnaW5Qb2ludCgpLmZlYXR1cmVzWzBdLCB0aGlzLmRlc3RpbmF0aW9uUG9pbnQoKS5mZWF0dXJlc1swXSwgJ2tpbG9tZXRlcnMnKTtcblxufVxuXG5cblxuYXJjKHN0ZXBzID0gMjUpe1xuICBjb25zdCBhcmMgPSBbXTtcbiAgY29uc3QgbGluZUxlbmd0aCA9IHRoaXMuZGlzdGFuY2UodGhpcy5vcmlnaW4ucG9zLHRoaXMuZGVzdGluYXRpb24ucG9zKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVMZW5ndGg7IGkgKz0gbGluZUxlbmd0aCAvIHN0ZXBzICkge1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgY29uc3Qgc2VnbWVudCA9IHR1cmYuYWxvbmcodGhpcy5yb3V0ZSh0aGlzLm9yaWdpbi5wb3MsIHRoaXMuZGVzdGluYXRpb24ucG9zKS5mZWF0dXJlc1swXSwgaSwgJ2tpbG9tZXRlcnMnKVxuICAgIGFyYy5wdXNoKHNlZ21lbnQuZ2VvbWV0cnkuY29vcmRpbmF0ZXMpXG4gIH1cbiAgcmV0dXJuIGFyY1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/javascript/route.js\n");

/***/ })

/******/ });