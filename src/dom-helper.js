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