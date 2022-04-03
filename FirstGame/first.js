var random = Math.random() * 6;
const number = Math.floor(random);
console.log(number);
document.getElementById(number).value = 1;

function checkWinner(id) {
    if (document.getElementById(id).value == 1) {
        document.getElementById(id).style.backgroundColor = "green";
        document.getElementById('message').textContent = "YOU WIN";
    } else {
        document.getElementById(id).style.backgroundColor = "red";
        document.getElementById('message').textContent = "YOU LOSE";
    }
}

function restartGame() {
    setTimeout("location.reload(true);", 1000);
}

function generateButtons() {
    var numberButtons = document.getElementById("numberOfButtons").value;
    console.log(numberButtons);

}