// RANDOM BACKGROUND COLOR

const h1 = document.querySelector("h1");
const colorbtn = document.querySelector("#colorbtn");

colorbtn.addEventListener("click", randomColor);

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);

    return `rgb(${r},${g},${b})`;
};

function randomColor() {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    h1.style.color = " #fff";
}

// RANDOM BUTTON COLORS ON CLICK WITH THIS
const buttons = document.querySelectorAll(".randomButton");

for (let button of buttons) {
    button.addEventListener("click", colorize);
}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}

// KEYBOARD EVENT

const input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
    console.log(event.key); // what kind of key
    console.log(event.code); // where/position on the keyboard
});

// KEYBOARD EVENT IN BROWSER IN GENERAL
window.addEventListener("keyup", () => console.log("Key Up"));

// FORM PREVENT DEFAULT STOPPED THE RELOAD BY SUBMIT

const form = document.querySelector("#shelterForm");
const inputShelter = document.querySelector("#shelterInput");
const list = document.querySelector("#cats");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Submitted!");
    const catName = inputShelter.value;
    const newLi = document.createElement("LI");
    newLi.innerText = catName;
    list.append(newLi);
    inputShelter.value = "";
});

// ON CHANGE ON INPUT
const changeForm = document.querySelector("#changeForm");
const changeInput = document.querySelector("#changeInput");

changeInput.addEventListener("change", changeValueInput);

function changeValueInput(event) {
    console.log(event.target.value);
}

const inputInput = document.querySelector("#inputInput");
const exampleText = document.querySelector(".exampleText");
inputInput.addEventListener("input", inputValueInput);

function inputValueInput(event) {
    const input = inputInput.value;
    console.log(event.target.value);
    console.log(input);
    exampleText.innerText = input;
}

// EVENT DELEGATION

const formTweet = document.querySelector("#formTweet");
const tweetList = document.querySelector("#tweets");
const userName = document.querySelector("#username");
const tweet = document.querySelector("#tweet");

formTweet.addEventListener("submit", submitTweet);

function submitTweet(event) {
    event.preventDefault();
    const newTweet = document.createElement("LI");
    newTweet.innerText = `${userName.value}: ${tweet.value}`;
    tweetList.append(newTweet);
    userName.value = "";
    tweet.value = "";
}

tweetList.addEventListener("click", removeTweet);

function removeTweet(event) {
    event.target.nodeName === "LI" && event.target.remove();
}
