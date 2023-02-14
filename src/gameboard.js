// create the main gameboard

module.exports.func = function gameboard () { return {

    
    coordinates: [],

    missedShots: [],

    evaluatePlacement(ship, x, y) {
        let possiblePlacements = []
        let placementsClone = []
        
        for (let i=0; i<ship.length; i++) {
            let coordsRight = {
                "x" : (x + i),
                "y" : y,
                "pos": 1
            }
            let coordsLeft = {
                "x" : (x - i),
                "y" : y,
                "pos": 2
            }
            let coordsTop = {
                "x" : x,
                "y" : (y + i),
                "pos": 3
            }
            let coordsBottom = {
                "x" : x,
                "y" : (y - i),
                "pos": 4
            }
        possiblePlacements.push(coordsRight, coordsLeft, coordsTop, coordsBottom)
        }

        possiblePlacements.forEach(element => {
            if(element.x > 10 || element.y > 10 || element.x < 1 || element.y < 1 || (this.coordinates.forEach(element1 => {
                if (element1.x == element.x && element1.y == element.y) {return true}
            }))) {
                placementsClone.push(element)
                return placementsClone
            }
        })

    let uniqueResult = [...new Set(placementsClone.map(item=>item.pos))]


    uniqueResult.forEach(element => {
    possiblePlacements = possiblePlacements.filter(el => {
        return el.pos !== element})
    return possiblePlacements
    })

    
    if (possiblePlacements.length == 0) {return false}
    else return possiblePlacements
    },


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


