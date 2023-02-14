const player = require ('../players')

test("create new player", () => {
    let player1 = player.func("John", false)
    expect(player1.name).toBe("John")
})