document.getElementById("game").style.visibility = "hidden";
document.getElementById("first").style.visibility = "hidden";
var count = 1;
var notWin = 0;
var stop = 0;
var turn;
var bot;
var player;
const board = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function colorWin(pos1, pos2, pos3) {
    pos1.style.color = "red";
    pos2.style.color = "red";
    pos3.style.color = "red";
}

function checkWin(winner) {
    for (let cnt = 0; cnt < 8; ++cnt) {
        let a = document.getElementById("text" + board[cnt][0]).innerText;
        let b = document.getElementById("text" + board[cnt][1]).innerText;
        let c = document.getElementById("text" + board[cnt][2]).innerText;
        if (a === b && b === c && a !== '') {
            document.getElementById("win").textContent = winner + " WIN";
            var x = document.getElementById("text" + board[cnt][0]);
            var y = document.getElementById("text" + board[cnt][1]);
            var z = document.getElementById("text" + board[cnt][2]);
            colorWin(x, y, z);
            notWin = 1;
        }
    }
}


function startGamePlayer() {
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("game").style.visibility = "visible";
    for (let cnt = 1; cnt <= 9; ++cnt) {
        document.getElementById(cnt).addEventListener("click", function fill() {
            if (notWin == 0) {
                if (count % 2 == 1) {
                    if (document.getElementById("text" + cnt).textContent === '') {
                        document.getElementById("text" + cnt).textContent = 'X';
                        if (count > 3) {
                            checkWin('X');
                        }
                        ++count;
                    }
                } else {
                    if (document.getElementById("text" + cnt).textContent === '') {
                        document.getElementById("text" + cnt).textContent = '0';
                        if (count > 3) {
                            checkWin('0');
                        }
                        ++count;
                    }
                }
            }
            if (notWin == 0) {
                if (count == 10) {
                    document.getElementById("win").textContent = "DRAW";
                    document.getElementById("text".cnt).textContent = 'X';
                    notWin = 1;
                }
            }
        });
    }
}

function fillBotGame() {

}

function botStart() {
    turn = 0;
    player = '0';
    bot = 'X';
    document.getElementById("game").style.visibility = "visible";
    document.getElementById("bot").style.visibility = "hidden";
    document.getElementById("me").style.visibility = "hidden";
    fillBotGame();
}

function playerStart() {
    turn = 1;
    player = 'X';
    bot = '0';
    document.getElementById("game").style.visibility = "visible";
    document.getElementById("bot").style.visibility = "hidden";
    document.getElementById("me").style.visibility = "hidden";
    fillBotGame();
}

function startGameBot() {
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("first").style.visibility = "visible";
}