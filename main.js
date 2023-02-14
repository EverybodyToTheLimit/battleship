/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/players.js");




function game () {
    let player1 = (0,_players__WEBPACK_IMPORTED_MODULE_1__.player)("John", false)
    let player2 = (0,_players__WEBPACK_IMPORTED_MODULE_1__.player)("Computer", true)
    let player1Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)()
    let player2Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)()

    return {
        player1
    }
}



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard)
/* harmony export */ });
// create the main gameboard

function gameboard () { return {

    
    coordinates: [],

    missedShots: [],

    evaluatePlacement(ship, x, y) {
        let possiblePlacements = []
        let placementsClone = []
        
        for (let i=0; i<ship.length; i++) {
            let coordsRight = {
                "x" : (x + i),
                "y" : y,
                "pos": 1
            }
            let coordsLeft = {
                "x" : (x - i),
                "y" : y,
                "pos": 2
            }
            let coordsTop = {
                "x" : x,
                "y" : (y + i),
                "pos": 3
            }
            let coordsBottom = {
                "x" : x,
                "y" : (y - i),
                "pos": 4
            }
        possiblePlacements.push(coordsRight, coordsLeft, coordsTop, coordsBottom)
        }

        possiblePlacements.forEach(element => {
            if(element.x > 10 || element.y > 10 || element.x < 1 || element.y < 1 || (this.coordinates.forEach(element1 => {
                if (element1.x == element.x && element1.y == element.y) {return true}
            }))) {
                placementsClone.push(element)
                return placementsClone
            }
        })

    let uniqueResult = [...new Set(placementsClone.map(item=>item.pos))]


    uniqueResult.forEach(element => {
    possiblePlacements = possiblePlacements.filter(el => {
        return el.pos !== element})
    return possiblePlacements
    })


    if (possiblePlacements.length == 0) {return false}
    else return possiblePlacements
    },


    placeShip(ship, x, y) {
        let evaluation = this.evaluatePlacement(ship, x, y)
        if (evaluation == false) return false
        else {
            let options = [...new Set(evaluation.map(item=>item.pos))]
            let selection = options[Math.floor(Math.random() * options.length)]
            evaluation = evaluation.filter(el => el.pos == selection)
            let i = evaluation.length
            evaluation.forEach(el => {
                let placedShip = {
                    x: el.x,
                    y: el.y,
                    name: ship.name,
                    hit: false
                }
                this.coordinates.push(placedShip)
            })
            return evaluation
        }
    },

    receiveAttack(x, y) {
        let hitCheck = this.coordinates.find(element => {
            if (element.x == x && element.y == y) {
                return element
            }})
        if (hitCheck) {
            hitCheck.hit = true
            return hitCheck.name
        }
        else {
            let missedShot = {x, y}
            this.missedShots.push(missedShot)
            return {
                "missed" : missedShot
            }
        }
    },

    checkGameEnd() {
        let result = true
        this.coordinates.forEach(element => {
            if (element.hit == false) {
                result = false
            }
        } 
        )
    return result
    }
}
}



/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
function player (name, cpu) { return {

    name: name,
    cpu: cpu,
    currentTurn: false
}
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");


console.log((0,_game_js__WEBPACK_IMPORTED_MODULE_0__.game)())
})();

/******/ })()
;
//# sourceMappingURL=main.js.map