/* XHR REQUEST */

// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("LOADED");
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// };

// req.onerror = function () {
//     console.log("EROOR");
//     console.log(this);
// };

// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();

/* FETCH */

fetch("https://swapi.dev/api/people/1")
    .then((req) => {
        console.log("REQUEST", req);
        return req.json();
    })
    .then((res) => console.log("RESPONSE", res))
    .catch((er) => console.log("ERROR", er));

const loadStarwarsPeople = async () => {
    try {
        const request = await fetch("https://swapi.dev/api/people/2");
        const data = await request.json();
        console.log(data);
    } catch (error) {
        console.log("ERROR", error);
    }
};
loadStarwarsPeople();

async function getData() {
    try {
        const request = await fetch("https://swapi.dev/api/people/3");
        const data = await request.json();
        console.log(data);
    } catch (error) {
        console.log("ERROR", error);
    }
}
getData();

/* AXIOS */

// axios
//     .get("https://swapi.dev/api/people/4")
//     .then((res) => console.log("RESPONSE", res))
//     .catch((er) => console.log("ERROR", er));

async function getDataTwo(id) {
    const request = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log("AXIOS REQUEST", request.data);
}
getDataTwo(8);

// AXIOS AND HEADERS use it as second argument

const jokes = document.querySelector("#jokes");
const getJoke = document.querySelector("button");

getJoke.addEventListener("click", getNewJoke);

async function getNewJoke() {
    const jokeText = await getDadJoke();
    const newJoke = document.createElement("LI");
    newJoke.append(jokeText);
    jokes.append(newJoke);
}

async function getDadJoke() {
    try {
        const config = { headers: { Accept: "application/json" } };
        const request = await axios.get("https://icanhazdadjoke.com/", config);
        return request.data.joke;
    } catch (error) {
        return "no jokes available";
    }
}
