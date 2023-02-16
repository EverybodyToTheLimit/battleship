// create the main gameboard

function gameboard () { return {

    
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
        let toRemove = []
        for (let i = 0; i<possiblePlacements.length; i ++) {
            if (possiblePlacements[i].x > 10 || possiblePlacements[i].y >10 || possiblePlacements[i].x <1 || possiblePlacements[i].y <1) {
                toRemove.push(possiblePlacements[i].pos)
            }
        }

        toRemove = toRemove.filter((value, index, array) => array.indexOf(value) === index)
        if (toRemove) {
            toRemove.forEach(el => {
                possiblePlacements = possiblePlacements.filter(function(value, index, array){
                return value.pos !== el
            }) 

            })
            return possiblePlacements
        }


        // possiblePlacements.forEach(element => {
        //     if(element.x > 10 || element.y > 10 || element.x < 1 || element.y < 1)
        //     {
        //         possiblePlacements.element.x
        //         return false
        //     } } )

        // possiblePlacements.forEach(element => {
        //     if (this.coordinates.forEach(element1 => {
        //         if (element1.x == element.x && element1.y == element.y) {return false}
        //     }))
        //     {return false} 
        //     else 
        //     {
        //         placementsClone.push(element)
        //         return placementsClone
        //     }
        // })
    
        

    let uniqueResult = [...new Set(placementsClone.map(item=>item.pos))]


    // uniqueResult.forEach(element => {
    // possiblePlacements = possiblePlacements.filter(el => {
    //     return el.pos !== element})
    // return possiblePlacements
    // })


    if (possiblePlacements.length == 0) {return false}
    else return possiblePlacements
    },


    placeShip(ship, x, y) {
        let evaluation = this.evaluatePlacement(ship, x, y)
        console.log(evaluation)
        if (evaluation == false) return false
        else {
            let options = [...new Set(evaluation.map(item=>item.pos))]
            let selection = options[Math.floor(Math.random() * options.length)]
            evaluation = evaluation.filter(el => el.pos == selection)
            let i = evaluation.length
            evaluation.forEach(el => {
                let placedShip = {
                    x: el.x,
                    y: el.y,
                    name: ship.name,
                    hit: false
                }
                this.coordinates.push(placedShip)
            })
            return evaluation
        }
    },

    receiveAttack(x, y) {
        let hitCheck = this.coordinates.find(element => {
            if (element.x == x && element.y == y) {
                return element
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

export {gameboard}