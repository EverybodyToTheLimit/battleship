const gameboard = require ('../gameboard')
const ship = require("../ships")

test("Ship placed succesfully", () => {
    let newShip = ship.func(4, "battleship")
    let newGameboard = gameboard.func()
    newGameboard.placeShip(newShip, 1, 1)
    expect(newGameboard.coordinates).toHaveLength(4);
})

test("Missed attack works", () => {
    let newShip = ship.func(4, "battleship")
    let newGameboard = gameboard.func()
    newGameboard.placeShip(newShip, 4, 3)
    newGameboard.receiveAttack(1,1)
    expect(newGameboard.missedShots).toHaveLength(1);
})

test("Hit attack works", () => {
    let newShip = ship.func(4, "battleship")
    let newGameboard = gameboard.func()
    newGameboard.placeShip(newShip, 4, 3)
    newGameboard.receiveAttack(4,4)
    expect(newGameboard.receiveAttack(4,4)).toBe("battleship");
})

test("game over assesment", () => {
    let newShip = ship.func(4, "battleship")
    let newGameboard = gameboard.func()
    newGameboard.placeShip(newShip, 4, 3)
    newGameboard.receiveAttack(4,4)
    newGameboard.receiveAttack(4,5)
    newGameboard.receiveAttack(4,6)
    newGameboard.receiveAttack(4,7)
    expect(newGameboard.checkGameEnd()).toBe(true);
})

test("game not over assesment", () => {
    let newShip = ship.func(4, "battleship")
    let newGameboard = gameboard.func()
    newGameboard.placeShip(newShip, 4, 3)
    newGameboard.receiveAttack(4,5)
    newGameboard.receiveAttack(4,6)
    newGameboard.receiveAttack(4,7)
    expect(newGameboard.checkGameEnd()).toBe(false);
})

test("placement out of bounds", () => {
    let newShip = ship.func(4, "battleship")
    let newShip1 = ship.func(4, "battleship")
    let newGameboard = gameboard.func()
    newGameboard.placeShip(newShip, 4, 3)
    newGameboard.placeShip(newShip1, 5, 4)
    expect(newGameboard.evaluatePlacement(newShip, 9, -1)).toBe(false)
})