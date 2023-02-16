function domHelper() { return {

    drawBoard() {
    let main = document.getElementById("main")
        for (let i = 10; i>0; i--) {
            let row = document.createElement('div')
            row.className = "row"
            for (let j = 1; j<11; j++) {
                let field = document.createElement('div')
                field.className = "field"
                field.id = "x" + j + "y" + i
                row.appendChild(field)
            }
            main.appendChild(row)
        }
    },

    markShips(board) {
        board.forEach(element => {
            let cell = document.getElementById("x"+element.x+"y"+element.y)
            {cell.textContent = "x"}
        });

        
    }
}

}

export {domHelper}