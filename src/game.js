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
        let destroyer = ship(3, "destroyer")
        if(player == this.player1Name) {playerboard = this.player1Gameboard} else {playerboard = this.cpuGameboard}
        let test = playerboard.placeShip(carrier,randomNumber(), randomNumber())
        playerboard.placeShip(battleship,randomNumber(), randomNumber())
        playerboard.placeShip(destroyer,randomNumber(), randomNumber())
        playerboard.placeShip(cruiser,randomNumber(), randomNumber())
        playerboard.placeShip(submarine,randomNumber(), randomNumber())
        return playerboard.coordinates

    }
}

}



export {game}