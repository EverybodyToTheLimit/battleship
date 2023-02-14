import { player } from "../players"

player

test("create new player", () => {
    let player1 = player("John", false)
    expect(player1.name).toBe("John")
})