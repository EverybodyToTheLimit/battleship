// create the main gameboard

module.exports.func = function gameboard () { return {

    
    coordinates: [],
    missedShots: [],
    placeShip(ship, x, y) {
        let i = ship.length
        while (i>0) {
            let placedShip = {
                x: x, 
                y: (y + i),
                name: ship.name,
                hit: false
            }
            this.coordinates.push(placedShip)
            i--
        }
    },
    receiveAttack(x, y) {
        let hitCheck = this.coordinates.find(element => {
            if (element.x == x && element.y == y) {
                return element.name
            }})
        if (hitCheck) {
            hitCheck.hit = true
            return hitCheck.name
        }
        else {
            let missedShot = {x, y}
            this.missedShots.push(missedShot)
            return {
                "missed" : missedShot
            }
        }
    },

    checkGameEnd() {
        let result = true
        console.log(this.coordinates)
        this.coordinates.forEach(element => {
            if (element.hit == false) {
                result = false
            }
        } 
        )
    return result
    }
}
}


