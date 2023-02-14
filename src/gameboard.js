// create the main gameboard

module.exports.func = function gameboard () { return {

    
    coordinates: [],
    missedShots: [],
    evaluatePlacement(ship, x, y) {
        let possiblePlacements = {
            right: [],
            left: [],
            top: [],
            bottom: []
        }
        for (let i=0; i<ship.length; i++) {
            let coordsRight = {
                "x" : (x + i),
                "y" : y
            }
            let coordsLeft = {
                "x" : (x - i),
                "y" : y
            }
            let coordsTop = {
                "x" : x,
                "y" : (y + i)
            }
            let coordsBottom = {
                "x" : x,
                "y" : (y - i)
            }
        possiblePlacements.right.push(coordsRight)
        possiblePlacements.left.push(coordsLeft)
        possiblePlacements.top.push(coordsTop)
        possiblePlacements.bottom.push(coordsBottom)
        }
        possiblePlacements.right.forEach(element => {
            if(element.x > 10 || element.y > 10 || element.x < 1 || element.y < 1 || (this.coordinates.forEach(element1 => {
                if (element1.x == element.x && element1.y == element.y) {return true}
            }))) {
                possiblePlacements.right = []
                return
            }
        })
        possiblePlacements.left.forEach(element => {
            if(element.x > 10 || element.y > 10 || element.x < 1 || element.y < 1 || (this.coordinates.forEach(element1 => {
                if (element1.x == element.x && element1.y == element.y) {return true}
            }))) {
                possiblePlacements.left = []
                return
            }
        })
        possiblePlacements.top.forEach(element => {
            if(element.x > 10 || element.y > 10 || element.x < 1 || element.y < 1 || (this.coordinates.forEach(element1 => {
                if (element1.x == element.x && element1.y == element.y) {return true}
            }))) {
                possiblePlacements.top = []
                return
            }
        })
        possiblePlacements.bottom.forEach(element => {
            if(element.x > 10 || element.y > 10 || element.x < 1 || element.y < 1 || (this.coordinates.forEach(element1 => {
                if (element1.x == element.x && element1.y == element.y) {return true}
            }))) {
                possiblePlacements.bottom = []
                return
            }
        })

    console.log(possiblePlacements)
    console.log(this.coordinates)
    return possiblePlacements.right.length
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


