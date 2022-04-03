function restartGame() {
    setTimeout("location.reload(true);", 1000);
}

function Random() {
    const numberButtons = document.getElementById("inputButtons").value;
    console.log(numberButtons);
    var random = Math.random() * numberButtons;
    const number = Math.floor(random);
    console.log(number);
    document.getElementById(number).value = 1;
}

function generateButtons() {
    var numberOfButtons = document.getElementById("inputButtons").value;
    for (let buttons = 0; buttons <= numberOfButtons; ++buttons) {
        let btn = document.createElement("button");
        btn.addEventListener("click", function() {
            const buttonValue = document.getElementById(this.id).value;
            if (buttonValue == 1) {
                document.getElementById(this.id).style.backgroundColor = "green";
                document.getElementById('message').textContent = "YOU WIN";
            } else {
                document.getElementById(this.id).style.backgroundColor = "red";
                document.getElementById('message').textContent = "YOU LOSE";
            }
        });
        btn.value = 0;
        btn.innerHTML = buttons;
        btn.id = buttons;
        btn.className = "btn btn-primary btn-lg";
        document.body.appendChild(btn);
    }
    Random();
}