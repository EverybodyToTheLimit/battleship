const ship = require("../ships")


test("Can ship sink?", () => {
    let newShip = ship.func(2, "john")
    let i = 1
    while (i<3) {
        newShip.hitReceived()
        i++
    }
    expect(newShip.isSunk).toBe(true)
})