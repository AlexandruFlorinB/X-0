function mainEvent () {
    let choice = document.getElementById("player1").value
    let nrMoves = 1
    let onGoing = true
    let cells = document.querySelectorAll('#xo tr td')
    for (let i = 0; i < cells.length; ++i) {
        let cell = cells[i]
        cell.onclick = function(e) {
            if (cell.innerHTML == "" && onGoing) {
                if (choice == "x" && nrMoves % 2 == 1) {
                    cell.innerHTML = "x"
                } else if (choice == "x" && nrMoves % 2 == 0) {
                    cell.innerHTML = "0"
                }
                if (choice == "0" && nrMoves % 2 == 1) {
                    cell.innerHTML = "0"
                } else if (choice == "0" && nrMoves % 2 == 0) {
                    cell.innerHTML = "x"
                }
                ++nrMoves;
                let winner = isWinner()
                if (winner == 10 && nrMoves == 10) {
                    document.getElementById("message").innerHTML = "Draw"
                    onGoing = false
                } else if (winner == 10) {
                    return
                } else if (winner == choice) {
                    document.getElementById("message").innerHTML = "The first player wins!"
                    onGoing = false
                } else {
                    document.getElementById("message").innerHTML = "The second player wins!"
                    onGoing = false
                }   
            }
        }
    }
}

function isWinner() {
    let cell1 = document.querySelector('#xo tr:nth-child(1) td:nth-child(1)').innerHTML
    let cell2 = document.querySelector('#xo tr:nth-child(1) td:nth-child(2)').innerHTML
    let cell3 = document.querySelector('#xo tr:nth-child(1) td:nth-child(3)').innerHTML
    let cell4 = document.querySelector('#xo tr:nth-child(2) td:nth-child(1)').innerHTML
    let cell5 = document.querySelector('#xo tr:nth-child(2) td:nth-child(2)').innerHTML
    let cell6 = document.querySelector('#xo tr:nth-child(2) td:nth-child(3)').innerHTML
    let cell7 = document.querySelector('#xo tr:nth-child(3) td:nth-child(1)').innerHTML
    let cell8 = document.querySelector('#xo tr:nth-child(3) td:nth-child(2)').innerHTML
    let cell9 = document.querySelector('#xo tr:nth-child(3) td:nth-child(3)').innerHTML
    if (cell1 == cell2 && cell2 == cell3 && cell3 != "") {
        return cell3
    }
    if (cell4 == cell5 && cell5 == cell6 && cell6 != "") {
        return cell6
    }
    if (cell7 == cell8 && cell8 == cell9 && cell9 != "") {
        return cell9
    }
    if (cell1 == cell4 && cell4 == cell7 && cell7 != "") {
        return cell7
    }
    if (cell2 == cell5 && cell5 == cell8 && cell8 != "") {
        return cell3
    }
    if (cell3 == cell6 && cell6 == cell9 && cell9 != "") {
        return cell9
    }
    if (cell1 == cell5 && cell5 == cell9 && cell9 != "") {
        return cell9
    }
    if (cell3 == cell5 && cell5 == cell7 && cell7 != "") {
        return cell7
    }
    return 10
}

function resetGame() {
    document.getElementById("player1").value = ""
    document.getElementById("player2").value = ""
    document.getElementById("message").innerText = ""
    document.querySelector('#xo tr:nth-child(1) td:nth-child(1)').innerHTML = ""
    document.querySelector('#xo tr:nth-child(1) td:nth-child(2)').innerHTML = ""
    document.querySelector('#xo tr:nth-child(1) td:nth-child(3)').innerHTML = ""
    document.querySelector('#xo tr:nth-child(2) td:nth-child(1)').innerHTML = ""
    document.querySelector('#xo tr:nth-child(2) td:nth-child(2)').innerHTML = ""
    document.querySelector('#xo tr:nth-child(2) td:nth-child(3)').innerHTML = ""
    document.querySelector('#xo tr:nth-child(3) td:nth-child(1)').innerHTML = ""
    document.querySelector('#xo tr:nth-child(3) td:nth-child(2)').innerHTML = ""
    document.querySelector('#xo tr:nth-child(3) td:nth-child(3)').innerHTML = ""
}