/* NESTED */

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//         }, 1000);
//     }, 1000);
// }, 1000);

/* CALLBACK  */

// const changeColor = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext();
//     }, delay);
// };

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("yellow", 1000);
//     });
// });

/* WITH PROMISE */

const colorChanger = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

// colorChanger("red", 1000)
//     .then(() => colorChanger("orange", 1000))
//     .then(() => colorChanger("yellow", 1000))
//     .then(() => colorChanger("green", 1000))
//     .then(() => colorChanger("blue", 1000))
//     .then(() => colorChanger("indigo", 1000))
//     .then(() => colorChanger("violet", 1000));

/* ASYNC AWAIT */

async function rainbow() {
    await colorChanger("red", 1000);
    await colorChanger("orange", 1000);
    await colorChanger("yellow", 1000);
    await colorChanger("green", 1000);
    await colorChanger("blue", 1000);
    await colorChanger("indigo", 1000);
    await colorChanger("violet", 1000);
}
// rainbow()
// .then(() => console.log("rainbow done"));

async function printRainbow() {
    await rainbow();
    console.log("rainbow done");
}

printRainbow();

/* EXAMPLE TRY CATCH ERROR HANDLING*/
async function users() {
    try {
        const response = await fetch("/api/users");
        const data = response.json();
    } catch (error) {
        console.log(`Something went wrong: ${error}`);
    }
}
