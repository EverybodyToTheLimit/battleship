// create the main gameboard

function gameboard () { return {

    possibleMoves: [],

    coordinates: [],

    missedShots: [],

    targetOptions: [],

    evaluatePlacement(ship, x, y) {
        let possiblePlacements = []
        x = parseInt(x)
        y = parseInt(y)
        
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

        }

        let notUnique = []
        for (let i = 0; i<possiblePlacements.length; i ++) {
            this.coordinates.forEach(el => {
            if (possiblePlacements[i].x == el.x && possiblePlacements[i].y  == el.y) {
                notUnique.push(possiblePlacements[i].pos)
            }
        })
        }

        notUnique = notUnique.filter((value, index, array) => array.indexOf(value) === index)
        if (notUnique) {
            notUnique.forEach(el => {
                possiblePlacements = possiblePlacements.filter(function(value, index, array){
                return value.pos !== el
            }) 

            })
            return possiblePlacements
        }



    if (possiblePlacements.length == 0) {return false}
    else return possiblePlacements
    },


    placeShip(ship, x, y) {
        let evaluation = this.evaluatePlacement(ship, x, y)
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

    populateMoves() {
        for(let x =  1; x<11; x++) {
            for (let y = 1; y<11; y++) {
                this.possibleMoves.push([x, y])
            }
        }
    },

    launchAttack() {

        if (this.targetOptions.length == 0) {
        const randomIndex = Math.floor(Math.random() * this.possibleMoves.length);
        let result = this.possibleMoves[randomIndex]
        this.possibleMoves.splice(randomIndex,1)
        return result
        }
        else {
            let result = this.targetOptions[0];
            this.targetOptions.splice(0,1)
            return result
        }

    },

    hitHunt(coords) {
        let tempArray = []
        tempArray.push([coords[0] -1 , coords[1]], [coords[0] +1 , coords[1]], [coords[0], coords[1] -1], [coords[0], coords[1] + 1])
        tempArray = tempArray.filter(function(el) {
            return el[0] < 11 && el[0] > 0 && el[1] < 11 && el[1]
        })
        tempArray.forEach(el => {
            for (let i=0; i<this.possibleMoves.length; i++) {
                if (el[0] == this.possibleMoves[i][0] && el[1] == this.possibleMoves[i][1]) {
                    this.targetOptions.push(el)
                    this.possibleMoves.splice(i, 1)
                }
            }
            }
        )


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