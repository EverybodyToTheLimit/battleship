import { gameboard } from "./gameboard"
import { player } from "./players"
import { ship } from "./ships"

function game(playername) { return {
    player1: player(playername, false),
    player2 : player("computer", true),
    player1Gameboard : gameboard(),
    cpuGameboard: gameboard(),
    currentTurn: "",

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

    }

}

}



export {game}