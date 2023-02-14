const gameboard = require ('../gameboard')
const ship = require("../ships")

test("Ship placed succesfully", () => {
    let newShip = ship.func(4)
    let newGameboard = gameboard.func()
    newGameboard.placeShip(newShip, 1, 1)
    expect(newGameboard.coordinates).toHaveLength(4);
})