import { gameboard } from "./gameboard"
import { player } from "./players"


function game () {
    let player1 = player("John", false)
    let player2 = player("Computer", true)
    let player1Gameboard = gameboard()
    let player2Gameboard = gameboard()

    return {
        player1
    }
}

export {game}