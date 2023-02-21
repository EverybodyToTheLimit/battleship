import { mainGameLoop } from "./game"

function domHelper() { return {
    

    drawBoard(user) {

    let main = document.getElementById("main")
    let owner = document.createElement('div')
    owner.className = user
        for (let i = 10; i>0; i--) {
            let row = document.createElement('div')
            row.className = "row"
            for (let j = 1; j<11; j++) {
                let field = document.createElement('div')
                field.className = "field"
                field.id = user + "x" + j + "y" + i
                field.dataset.x = j
                field.dataset.y = i
                field.addEventListener('dragenter', (e) => {
                    PubSub.publish('drag', e)})
                field.addEventListener('dragOver', (e) => {
                    PubSub.publish('drag', e)})
                field.addEventListener('dragleave', (e) => {
                    e.preventDefault();
                    PubSub.publish('dragLeave', e)})
                field.addEventListener("drop", (e) => {
                    e.preventDefault()
                    let id = e.dataTransfer.getData('text');
                    let message = []
                    message.push({"id" : id}, {"x": e.target.dataset.x}, {"y": e.target.dataset.y}, {e})

                    PubSub.publish('drop', message)})
                if (user == "computer") {
                    field.addEventListener('click', () => {
                        PubSub.publish('button-click', [j, i]);
                    })
                }
                row.appendChild(field)
            }
            owner.appendChild(row)
        }
    main.insertBefore(owner, main.firstChild)

    this.draggAndDrop()

    },

    draggAndDrop () {

        document.addEventListener("dragover", function(event) {
            event.preventDefault();
          });

        var dragover = function (msg, data) {
            data.preventDefault();
            data.target.classList.add('drag-over');
        }
        var dragleave = function (msg, data) {
            data.preventDefault();
            data.target.classList.remove('drag-over');
        }

        var dragstart = function(message, data) {
            data.preventDefault();
            data.dataTransfer.setData("text", data.target.id);
            setTimeout(() => {
                data.target.classList.add('hide');
            }, 0);
        }

        var drop = function(message, data) {
            data[3].e.target.classList.remove('drag-over')
            let ship = document.getElementById(data[0].id)
            ship.remove()
        }

        var noOption = function(message, data) {
            let ship = document.getElementById(data.newShip.name)
            ship.classList.remove('hide')
        }

        PubSub.subscribe('drag', dragover);
        PubSub.subscribe('dragLeave', dragleave);
        PubSub.subscribe('dragstart', dragstart);
        PubSub.subscribe('drop', drop);
        PubSub.subscribe('no-option', noOption);
    

    },
    
    removeShipSection () {
        let shipSection = document.getElementById("shipcontainer")
        shipSection.remove()
    },
    
    drawShipsManual() {
        let main = document.getElementById("main")
        let shipList = ["carrier", "battleship", "cruiser", "submarine", "destroyer"]
        let clearCheck  = document.getElementById("shipcontainer")
        if (clearCheck !== null) clearCheck.remove()
        let shipContainer = document.createElement("div")
        shipContainer.id = "shipcontainer"

        let shipSection = document.createElement("div")
        shipSection.id = "shipsection"

        let buttons = document.createElement("div")
        buttons.id = "nav-buttons"

        let deployRandom = document.createElement("button")
        deployRandom.id = "deploy-random"
        deployRandom.textContent = "Randomise"
        deployRandom.addEventListener('click', (e) => {
            PubSub.publish('deploy-random', e)
        })

        let clearBoard = document.createElement("button")
        clearBoard.id = "clear-board"
        clearBoard.textContent = "Clear"
        clearBoard.addEventListener('click', (e) => {
            PubSub.publish('clear-board', e)
        })


        shipList.forEach(el => {
            let el1 = document.createElement("div")
            el1.id = el
            el1.className = "ship"
            el1.draggable = true
            el1.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData("text", e.target.id);
                PubSub.publish('dragstart', e)
            })
            shipSection.appendChild(el1)
        })
        buttons.appendChild(clearBoard)
        buttons.appendChild(deployRandom)
        shipContainer.appendChild(shipSection)
        shipContainer.appendChild(buttons)


  
        main.appendChild(shipContainer)
    },

    checkIfAllShipsPlaced() {
        let checkDiv = document.getElementById("shipsection")
        let removeDiv = document.getElementById("shipcontainer")
        if (checkDiv.innerHTML == "") {
            removeDiv.remove()
            return true
        }
        else 
            return false

    },
    
    updateCell (user, x, y, type)
        {
            let cell = document.getElementById(user + "x"+x+"y"+ y)
            switch (type) {
                case "miss":
                    cell.classList.add("miss")
                    cell.classList.add("material-symbols-outlined")
                    cell.textContent = "close"
                    break
                case "hit":
                    cell.classList.add("hit")
                    cell.classList.add("material-symbols-outlined")
                    cell.textContent = "local_fire_department"
            }
        },

    markShips(board, user) {
        if (user !== "computer") {
        board.forEach(element => {
            let cell = document.getElementById(user + "x"+element.x+"y"+element.y)
            {cell.classList.add(element.name)}
        });

        }
        else {
            
        board.forEach(element => {
            let cell = document.getElementById(user + "x"+element.x+"y"+element.y)
            { if (element.hit == true) {   
                cell.classList.add(element.name)
            }
            }})

        }
    },

    winnerTakeover(user) {
        let winnerDiv = document.createElement('div')
        let winnerMsg = document.createElement('div')
        winnerDiv.classList.add("take-over")
        winnerMsg.textContent = user + " wins!"
        winnerMsg.classList.add("winner-message")
        winnerDiv.appendChild(winnerMsg)
        document.body.appendChild(winnerDiv)
    },
    
    clearBoard(board, user) {
        if (user !== "computer") {
            board.forEach(element => {
                let cell = document.getElementById(user + "x"+element.x+"y"+element.y)
                {cell.className = "field"}
            });
    
            }
            else {
                
            board.forEach(element => {
                let cell = document.getElementById(user + "x"+element.x+"y"+element.y)
                { if (element.hit == true) {   
                    cell.className = "field"
                }
                }})
    
            }
    }
}

}

export {domHelper}