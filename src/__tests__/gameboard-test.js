import { gameboard } from "../gameboard"
import { ship } from "../ships"

test("Ship placed succesfully", () => {
    let newShip = ship(4, "battleship")
    let newGameboard = gameboard()
    newGameboard.placeShip(newShip, 1, 1)
    expect(newGameboard.coordinates).toHaveLength(4);
})

test("Missed attack works", () => {
    let newShip = ship(4, "battleship")
    let newGameboard = gameboard()
    newGameboard.placeShip(newShip, 4, 3)
    newGameboard.receiveAttack(1,1)
    expect(newGameboard.missedShots).toHaveLength(1);
})

test("Hit attack works", () => {
    let newShip = ship(4, "battleship")
    let newGameboard = gameboard()
    newGameboard.placeShip(newShip, 4,3)
    expect(newGameboard.receiveAttack(4,3)).toBe("battleship");
})

test("game over assesment", () => {
    let newShip = ship(1, "mine")
    let newGameboard = gameboard()
    newGameboard.placeShip(newShip, 1, 1)
    newGameboard.receiveAttack(1,1)
    expect(newGameboard.checkGameEnd()).toBe(true);
})

test("game not over assesment", () => {
    let newShip = ship(1, "mine")
    let newShip2 = ship(1, "mine1")
    let newGameboard = gameboard()
    newGameboard.placeShip(newShip, 1, 1)
    newGameboard.placeShip(newShip2, 3, 3)
    newGameboard.receiveAttack(1,1)
    expect(newGameboard.checkGameEnd()).toBe(false);
})

test("placement out of bounds", () => {
    let newShip = ship(4, "battleship")
    let newShip1 = ship(4, "battleship")
    let newGameboard = gameboard()
    expect(newGameboard.placeShip(newShip, -4, 3)).toBe(false)
    expect(newGameboard.placeShip(newShip1, 5, 14)).toBe(false)
    expect(newGameboard.evaluatePlacement(newShip, 9, -1)).toBe(false)
})