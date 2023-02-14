// create the main gameboard

module.exports.func = function gameboard () { return {

    
    coordinates: [],
    missedShots: [],
    placeShip(ship, x, y) {
        let i = ship.length
        while (i>0) {
            let ship = new Object(x, y + i)
            this.coordinates.push(ship)
            i--
        }
    },
    receiveAttack(x, y) {
        let hitCheck = this.coordinates.find(element => element == {x, y})
        if (hitCheck) {
        }
        else {
            let missedShot = new Object(x, y)
            this.missedShots.push(missedShot)
        }
    }
}
}


