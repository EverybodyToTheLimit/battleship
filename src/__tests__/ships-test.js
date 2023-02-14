import { ship } from "../ships"

test("Can ship sink?", () => {
    let newShip = ship(2, "destroyer")
    let i = 1
    while (i<3) {
        newShip.hitReceived()
        i++
    }
    expect(newShip.isSunk).toBe(true)
})

