import { domHelper } from "./dom-helper.js";
import { game} from "./game.js";

let dom = domHelper()
dom.drawBoard()
let newGame = game()

dom.markShips(newGame.deployShips(newGame.player1))