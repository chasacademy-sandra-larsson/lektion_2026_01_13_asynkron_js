
// Demonsterar att inbyggda fetch()-funktionen returnerar en Promise
// const result = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
// console.log(result);

// Resolve => Krona
// Reject => Klave
const myPromise = new Promise((resolve, reject) => {
    const flipCoin = Math.random();
    if (flipCoin < 0.5) {
         resolve('Krona');
    } else {
         reject('Klave');
    };
});

// Konsumera en Promise med Promise-chaining (then-catch)
 myPromise
    .then((result) => {console.log('Resultat: ', result);})
    .catch((error) => {console.log('Resultat: ', error);});

// Konsumera en Promise med async/await
// async function consumePromise() {
//     try {
//         const result = await myPromise;
//         console.log('Resultat: ', result);
//     } catch (error) {
//         console.log('Resultat: ', error);
//     }
// }
// consumePromise();

// Asynkrona funktioner behövs när:
// - Nätverksanrop (fetch)
// - Fil-läsning/skrivning
// - Timers (setTimeout)
// - DOM-events
// - Databas-queries
