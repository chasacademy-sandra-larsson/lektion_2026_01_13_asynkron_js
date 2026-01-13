

// Fetch är en asynkron funktion och returnar en Promise - som kodare måste man hantera den efter det
// const result = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
// console.log(result)


// Skapa en egen Promise - inte för att ni kommer behöva göra det i egen kod (bara specialfall - men
// att man mer får förståelse för vad en Promise är



const myPromise = new Promise((resolve, reject) => {
    // Vi "simulerar" idén om resolve / reject med att "kasta ett mynta". Krona (resolve) => > 0.5 Klave (reject) < 0.5
    const flipCoin = Math.random();
    if(flipCoin > 0.5) {
        resolve("Resolved - Krona");
    } else {
        reject("Reject - Klave");
    }
});


// Konsumera en promise
// 1. Async / await  (ES8)
async function getResult() {
    try {
        const result = await myPromise;
        console.log("Resultatet: ", result); // Resolved - krona
    } catch(error) {
        console.log("Resultat: ", error);    // Reject - Klave
    }
}

getResult();


// 2. Promise-chaining (ES6)
myPromise
    .then((result) => {console.log("Resultatet: ", result)})
    .catch((error) => {console.log("Resultat: ", error)})
