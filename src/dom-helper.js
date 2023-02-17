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
                field.addEventListener('dragenter', (e) => {
                    PubSub.publish('drag', e)})
                field.addEventListener('dragOver', (e) => {
                    PubSub.publish('drag', e)})
                field.addEventListener('dragleave', (e) => {
                    PubSub.publish('dragLeave', e)})
                field.addEventListener('drop', (e) => {
                    PubSub.publish('drop', e)})
                if (user == "computer") {
                    field.addEventListener('click', () => {
                        PubSub.publish('button-click', [j, i]);
                    })
                }
                row.appendChild(field)
            }
            owner.appendChild(row)
        }
    main.appendChild(owner)

    this.draggAndDrop()

    },

    draggAndDrop () {
        var dragover = function (msg, data) {
            data.preventDefault();
            data.target.classList.add('drag-over');
        }
        var dragleave = function (msg, data) {
            data.preventDefault();
            data.target.classList.remove('drag-over');
        }
        var drop = function (msg, data) {
            data.target.classList.remove('drag-over');

            // get the draggable element
            const id = data.dataTransfer.getData('text/plain');
            const draggable = document.getElementById(id);

            // add it to the drop target
            data.target.appendChild(draggable);

            // display the draggable element
            draggable.classList.remove('hide');
        }

        var dragstart = function(message, data) {
            data.dataTransfer.setData('text/plain', data.target.id);
            setTimeout(() => {
                data.target.classList.add('hide');
            }, 0);
        }

        PubSub.subscribe('drag', dragover);
        PubSub.subscribe('dragLeave', dragleave);
        PubSub.subscribe('drop', drop);
        PubSub.subscribe('dragstart', dragstart);
    

    },
    
    
    drawShipsManual() {
        let main = document.getElementById("main")
        let shipList = ["carrier", "battleship", "cruiser", "submarine", "destroyer"]

        let shipContainer = document.createElement("div")
        shipContainer.id = "shipcontainer"

        shipList.forEach(el => {
            let el1 = document.createElement("div")
            el1.id = el
            el1.className = "ship"
            el1.draggable = true
            el1.addEventListener('dragstart', (e) => {
                PubSub.publish('dragstart', e)
            })
            shipContainer.appendChild(el1)
        })
  
        main.appendChild(shipContainer)
    },

    updateCell (user, x, y, type)
        {
            let cell = document.getElementById(user + "x"+x+"y"+ y)
            switch (type) {
                case "miss":
                    cell.classList.add("miss")
                    break
                case "hit":
                    cell.classList.add("hit")
            }
        },

    markShips(board, user) {
        if (user !== "computer") {
        board.forEach(element => {
            let cell = document.getElementById(user + "x"+element.x+"y"+element.y)
            {cell.textContent = "x"}
        });

        }
        else {
            
        board.forEach(element => {
            let cell = document.getElementById(user + "x"+element.x+"y"+element.y)
            { if (element.hit == true) {   
                cell.textContent = "x"
            }
            }})

        }
    }
}

}

export {domHelper}