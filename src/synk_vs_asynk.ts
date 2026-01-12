// Enkel setTimeout funktion
console.log('Start');

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.error('Error:', error));

setTimeout(() => {
    console.log('Asyncronous code start after 100ms');
}, 100);


console.log('Synchronous code start');

for (let i = 0; i < 3; i++) {
    console.log(`Synchronous loop: ${i}`);
}

console.log('Synchronous code end');



// Gör nestlade timeouts
setTimeout(() => {
    console.log('First timeout');
    setTimeout(() => {
        console.log('Second timeout');
    }, 100);
}, 100);





