document.getElementById("game").style.visibility = "hidden";
var word;
var wordFild = [];
var tryes = 0;
var letterTryes = [];

function start() {
    word = document.getElementById("inputWord").value;
    document.getElementById("inputWord").value = '';
    document.getElementById("startGame").style.visibility = "hidden";
    document.getElementById("game").style.visibility = "visible";
    generateFild();
}

function generateFild() {
    for (let letter = 0; letter < word.length; ++letter) {
        if (word[letter] == ' ') {
            wordFild.push('|');
        } else {
            wordFild.push('_');
        }
    }
    document.getElementById("unknowWord").textContent = wordFild.join(" ");
}

function update() {
    ++tryes;
    document.getElementById("image").src = "photo/hangmandie" + tryes + ".png";
    if (tryes == 5) {
        document.getElementById("win").textContent = "YOU LOSE";
        document.getElementById("letter").style.visibility = "hidden";
        document.getElementById("tryLetter").style.visibility = "hidden";
        document.getElementById("unknowWord").style.visibility = "hidden";
    }

}

function checkWin() {
    let ok = 1;
    for (let letter = 0; letter < wordFild.length; ++letter) {
        if (wordFild[letter] == '_') {
            ok = 0;
        }
    }
    if (ok) {
        document.getElementById("win").textContent = "YOU WIN";
        document.getElementById("letter").style.visibility = "hidden";
        document.getElementById("tryLetter").style.visibility = "hidden";
    }
}

function isInVector(tryLetter) {
    for (let count = 0; count < letterTryes.length; ++count) {
        if (letterTryes[count] == tryLetter) {
            return 1;
        }
    }
    return 0;
}

function check() {
    const tryLetter = document.getElementById("letter").value;
    if (tryLetter != ' ') {
        if (isInVector(tryLetter)) {
            alert("ALREDY EXIST AND TRYES");
        }
        document.getElementById("letter").value = '';
        let ok = 0;
        for (let letter = 0; letter < word.length; ++letter) {
            if (tryLetter == word[letter]) {
                wordFild[letter] = word[letter];
                checkWin();
                ok = 1;
                document.getElementById("unknowWord").textContent = wordFild.join(" ");
            }

        }

        if (!isInVector(tryLetter)) {
            if (ok == 0) {
                update();
            }
        }

        if (!isInVector(tryLetter)) {
            letterTryes.push(tryLetter);
            document.getElementById("letterTryes").textContent = letterTryes.join(",");
        }
    }


}