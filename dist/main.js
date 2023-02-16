/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom-helper.js":
/*!***************************!*\
  !*** ./src/dom-helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domHelper": () => (/* binding */ domHelper)
/* harmony export */ });
function domHelper() { return {

    drawBoard() {
    let main = document.getElementById("main")
        for (let i = 10; i>0; i--) {
            let row = document.createElement('div')
            row.className = "row"
            for (let j = 1; j<11; j++) {
                let field = document.createElement('div')
                field.className = "field"
                field.id = "x" + j + "y" + i
                row.appendChild(field)
            }
            main.appendChild(row)
        }
    },

    markShips(board) {
        board.forEach(element => {
            let cell = document.getElementById("x"+element.x+"y"+element.y)
            {cell.textContent = "x"}
        });

        
    }
}

}



/***/ }),

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
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ships */ "./src/ships.js");




function game(playername) { return {
    player1: (0,_players__WEBPACK_IMPORTED_MODULE_1__.player)(playername, false),
    player2 : (0,_players__WEBPACK_IMPORTED_MODULE_1__.player)("computer", true),
    player1Gameboard : (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)(),
    cpuGameboard: (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)(),
    currentTurn: "",

    deployShips(player) {
        let playerboard = null
        let randomNumber = () => {
            let result = Math.floor(Math.random() * 10) + 1
            return result}
        let carrier = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(5, "carrier")
        let battleship = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(4, "battleship")
        let cruiser = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(3, "cruiser")
        let submarine = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(3, "submarine")
        let destroyer = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(2, "destroyer")
        let shipArr = []
        shipArr.push(carrier, battleship, cruiser, submarine,destroyer)
        if(player == this.player1) {playerboard = this.player1Gameboard} else {playerboard = this.cpuGameboard}
        
        shipArr.forEach(ship => {
            if (playerboard.placeShip(ship,randomNumber(), randomNumber())) {return} else {playerboard.placeShip(ship,randomNumber(), randomNumber())}})



        return playerboard.coordinatess

    }

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
        let toRemove = []
        for (let i = 0; i<possiblePlacements.length; i ++) {
            if (possiblePlacements[i].x > 10 || possiblePlacements[i].y >10 || possiblePlacements[i].x <1 || possiblePlacements[i].y <1) {
                toRemove.push(possiblePlacements[i].pos)
            }
        }

        toRemove = toRemove.filter((value, index, array) => array.indexOf(value) === index)
        if (toRemove) {
            toRemove.forEach(el => {
                possiblePlacements = possiblePlacements.filter(function(value, index, array){
                return value.pos !== el
            }) 

            })

        }

        let notUnique = []
        for (let i = 0; i<possiblePlacements.length; i ++) {
            this.coordinates.forEach(el => {
            if (possiblePlacements[i].x == el.x && possiblePlacements[i].y  == el.y) {
                notUnique.push(possiblePlacements[i].pos)
            }
        })
        }

        notUnique = notUnique.filter((value, index, array) => array.indexOf(value) === index)
        if (notUnique) {
            notUnique.forEach(el => {
                possiblePlacements = possiblePlacements.filter(function(value, index, array){
                return value.pos !== el
            }) 

            })
            return possiblePlacements
        }



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



/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
// create a factory for individual ships

function ship (length, name) {return {
    name: name,
    length: length,
    hits: 0,
    hitReceived() {
        this.hits = this.hits + 1
        if (this.length == this.hits) {
            this.isSunk = true
        }
    },
    isSunk: false,
}}



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
/* harmony import */ var _dom_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-helper.js */ "./src/dom-helper.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");



let dom = (0,_dom_helper_js__WEBPACK_IMPORTED_MODULE_0__.domHelper)()
dom.drawBoard()
let newGame = (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.game)("John")

newGame.deployShips(newGame.player1)
newGame.deployShips(newGame.player2)
console.log(newGame)
dom.markShips(newGame.player1Gameboard.coordinates)
})();

/******/ })()
;
//# sourceMappingURL=main.js.map