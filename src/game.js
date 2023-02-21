import { domHelper } from "./dom-helper"
import { gameboard } from "./gameboard"
import { player } from "./players"
import { ship } from "./ships"
import PubSub from 'pubsub-js'

function game(playername) { return {
    player1: player(playername, false),
    player2 : player("computer", true),
    player1Gameboard : gameboard(),
    cpuGameboard: gameboard(),
    currentTurn: "",

    refresh() {
        let dom = domHelper()
        // dom.drawBoard(this.player2.name)
        dom.drawBoard(this.player1.name)
        dom.markShips(this.player1Gameboard.coordinates, this.player1.name)
    },

    deployShips(player) {
        let playerboard = null
        let randomNumber = () => {
            let result = Math.floor(Math.random() * 10) + 1
            return result}
        let carrier = ship(5, "carrier")
        let battleship = ship(4, "battleship")
        let cruiser = ship(3, "cruiser")
        let submarine = ship(3, "submarine")
        let destroyer = ship(2, "destroyer")
        let shipArr = []
        shipArr.push(carrier, battleship, cruiser, submarine,destroyer)
        if(player == this.player1) {playerboard = this.player1Gameboard} else {playerboard = this.cpuGameboard}
        
        shipArr.forEach(ship => {
            if (playerboard.placeShip(ship,randomNumber(), randomNumber())) {return} else {playerboard.placeShip(ship,randomNumber(), randomNumber())}})



        return playerboard.coordinatess

    },

    deployShipManual(shipName, x, y) {
        let shipArr = [{"name" : "carrier", "length" : 5}, {"name" : "battleship" , "length" : 4}, {"name" : "cruiser" , "length" : 3}, {"name" : "submarine" , "length" : 3}, {"name" : "destroyer" , "length" : 2}]
        let shipLength = shipArr.find(el => {
                if (el.name == shipName)
                {return el.length}
            })
        let newShip = ship(shipLength.length, shipName)
        if (!this.player1Gameboard.placeShip(newShip, x, y)) {
            let details = {newShip, x, y}
            PubSub.publish('no-option', details)
        }

        return this.player1Gameboard.coordinates
    }


}

}

function mainGameLoop () {
    let dom = domHelper()
    let newGame = game("John")

    var clear = function (msg,data) {

        dom.clearBoard(newGame.player1Gameboard.coordinates, newGame.player1.name)
        newGame.player1Gameboard.coordinates = []
        dom.drawShipsManual()
        dom.markShips(newGame.player1Gameboard.coordinates, newGame.player1.name)
    }

    var randomise = function (msg,data) {
        dom.clearBoard(newGame.player1Gameboard.coordinates, newGame.player1.name)
        newGame.player1Gameboard.coordinates = []
        newGame.deployShips(newGame.player1)
        dom.markShips(newGame.player1Gameboard.coordinates, newGame.player1.name)
        dom.removeShipSection()
        dom.drawBoard(newGame.player2.name)
        dom.winnerTakeover(newGame.player1.name)
    }

    newGame.deployShips(newGame.player2)
    newGame.cpuGameboard.populateMoves()
    newGame.refresh()
    dom.drawShipsManual()
    var shipDroppped = function (msg, data) {
        newGame.deployShipManual(data[0].id, data[1].x, data[2].y)
        dom.markShips(newGame.player1Gameboard.coordinates, newGame.player1.name)
        if (dom.checkIfAllShipsPlaced()) dom.drawBoard(newGame.player2.name)
    }

    var mySubscriber = function (msg, data) {
        let result = newGame.cpuGameboard.receiveAttack(data[0], data[1])
        if (typeof result == "object") {
        dom.updateCell("computer", data[0], data[1],"miss")
        }
        else {dom.updateCell("computer", data[0], data[1],"hit")}
        if (newGame.cpuGameboard.checkGameEnd()) dom.winnerTakeover(newGame.player1.name)

        let cpuCoordinates = newGame.cpuGameboard.launchAttack()
        let resultcpu = newGame.player1Gameboard.receiveAttack(cpuCoordinates[0], cpuCoordinates[1])
        if (typeof resultcpu == "object") {
        dom.updateCell(newGame.player1.name, cpuCoordinates[0], cpuCoordinates[1],"miss")
        }
        else {
            dom.updateCell(newGame.player1.name, cpuCoordinates[0], cpuCoordinates[1],"hit");
            newGame.cpuGameboard.hitHunt(cpuCoordinates)
        }
        
        
        if (newGame.player1Gameboard.checkGameEnd()) {
            dom.winnerTakeover(newGame.player2.name)
            return
        }
    };
    var token = PubSub.subscribe('button-click', mySubscriber);
    PubSub.subscribe('drop', shipDroppped);
    PubSub.subscribe('deploy-random', randomise);
    PubSub.subscribe('clear-board', clear);

    

}



export {
        game,
        mainGameLoop
    }