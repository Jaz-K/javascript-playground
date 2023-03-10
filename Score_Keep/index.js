// REFACTORED VERSION
const playerOne = {
    counter: document.querySelector(".player1"),
    score: 0,
    btn: document.querySelector("#btnPlayer1"),
};

const playerTwo = {
    counter: document.querySelector(".player2"),
    score: 0,
    btn: document.querySelector("#btnPlayer2"),
};

const input = document.querySelector("#playingTo");
const btnReset = document.querySelector("#reset");

let maxScore = 3;
let gameOver = false;

input.addEventListener("change", setPlayingTo);
playerOne.btn.addEventListener("click", countUpOne);
playerTwo.btn.addEventListener("click", countUpTwo);
btnReset.addEventListener("click", reset);

function updateScores(player, opponent) {
    if (!gameOver) {
        player.score += 1;
        player.counter.textContent = player.score;
        if (player.score === maxScore) {
            gameOver === true;
            player.counter.classList.add("won");
            opponent.counter.classList.add("lose");
            player.btn.disabled = true;
            opponent.btn.disabled = true;
        }
    }
}

function setPlayingTo() {
    console.log(input.value);
    maxScore = parseInt(this.value);
    reset();
}

function countUpOne() {
    updateScores(playerOne, playerTwo);
}

function countUpTwo() {
    updateScores(playerTwo, playerOne);
}

function reset() {
    gameOver = false;
    for (let player of [playerOne, playerTwo]) {
        player.btn.disabled = false;
        player.score = 0;
        player.counter.textContent = 0;
        player.counter.classList.remove("won", "lose");
    }
}

// LONG VERSION

/* const playerOneCounter = document.querySelector(".player1");
const playerTwoCounter = document.querySelector(".player2");
const input = document.querySelector("#playingTo");
const btnPlayerOne = document.querySelector("#btnPlayer1");
const btnPlayerTwo = document.querySelector("#btnPlayer2");
const btnReset = document.querySelector("#reset");

let maxScore = 3;
console.log("max score", maxScore);
let playerOneScore = 0;
let playerTwoScore = 0;
let gameOver = false;

input.addEventListener("change", setPlayingTo);
btnPlayerOne.addEventListener("click", countUpOne);
btnPlayerTwo.addEventListener("click", countUpTwo);
btnReset.addEventListener("click", reset);

function setPlayingTo() {
    console.log(input.value);
    maxScore = parseInt(this.value);
    reset();
}

function countUpOne() {
    if (!gameOver) {
        playerOneScore += 1;
        playerOneCounter.textContent = playerOneScore;
        if (playerOneScore === maxScore) {
            gameOver === true;
            playerOneCounter.classList.add("won");
            playerTwoCounter.classList.add("lose");
            btnPlayerOne.disabled = true;
            btnPlayerTwo.disabled = true;
        }
    }
}

function countUpTwo() {
    if (!gameOver) {
        playerTwoScore += 1;
        playerTwoCounter.textContent = playerTwoScore;
        if (playerTwoScore === maxScore) {
            playerTwoCounter.classList.add("won");
            playerOneCounter.classList.add("lose");
            btnPlayerTwo.disabled = true;
            btnPlayerOne.disabled = true;
        }
    }
}

function reset() {
    gameOver = false;
    btnPlayerOne.disabled = false;
    btnPlayerTwo.disabled = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneCounter.textContent = 0;
    playerTwoCounter.textContent = 0;
    playerOneCounter.classList.remove("won", "lose");
    playerTwoCounter.classList.remove("won", "lose");
} */
