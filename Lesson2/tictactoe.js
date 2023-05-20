const gamecontroller = (() => {
    let currentPlayer;

    let addPlayers = (player1, player2) =>
    {
        currentPlayer = player1
    }
    
    let createboard = () => {
    }

    let updateboard = (id, board) => {

        if(!checkTileUsed(id, board))
            if(currentPlayer.id == 1) {
                addTick ("X", id)
                currentPlayer = player2
            }
            else {
                addTick ("O", id)
                currentPlayer = player1
            }
            gameboard.display()
    }

    let addTick = (tick, id) => {
        gameboard.update(tick, id)
    }

    let checkTileUsed = (id, board) => {
        return board[id[0]][id[1]] != "-"
    }

    return {createboard, updateboard, addTick, addPlayers}
})();

const gameboard = (() => {
    let board = [["-","-","-"],
                ["-","-","-"],
                ["-","-","-"],];

    let addX = (x, y) => {
        board[y][x] = 'X'
        display()
    }

    let addO = (x, y) => {
        board[y][x] = 'O'
        display()
    }

    let display = () => {
        //wipe gameboard
        let previousboard = document.getElementById("gameboard")
        let child = previousboard.lastElementChild
        while (child) {
            previousboard.removeChild(child)
            child = previousboard.lastElementChild
        }

        // display board
        let gameboardtable = document.getElementById("gameboard").appendChild(document.createElement("table"))
        for (let i = 0; i < board.length; i++) {
            const tablerow = document.createElement("tr")
            tablerow.id = "row" + i
            gameboardtable.appendChild(tablerow)

            for (let j = 0; j < board[i].length; j++) {
                const rowcolumns = document.createElement("td")
                const button = document.createElement("button")
                button.id = `${i}${j}`
                button.innerText = board[i][j]
                button.onclick = sendbuttonID
                rowcolumns.appendChild(button)
                tablerow.appendChild(rowcolumns)
            }
        }
    }

    let sendbuttonID = (event) => {
        let id = event.target.id
        gamecontroller.updateboard(id, board);
    }

    let update = (tick, id) => {
        id = id.toString()
        board[id[0]][id[1]] = tick
        display()
    }

    return {display, addX, addO, update}
})();

const Player = (id) => {

    return {id}
}


player1 = Player(1)
player2 = Player(2)

gamecontroller.addPlayers(player1, player2)
gameboard.display()