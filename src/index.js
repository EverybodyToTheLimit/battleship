import { domHelper } from "./dom-helper.js";
import { game} from "./game.js";

let dom = domHelper()
dom.drawBoard()
let newGame = game("John")

newGame.deployShips(newGame.player1)
newGame.deployShips(newGame.player2)
console.log(newGame)
dom.markShips(newGame.player1Gameboard.coordinates)