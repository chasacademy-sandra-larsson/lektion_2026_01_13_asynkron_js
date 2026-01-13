setTimeout(() => {
    console.log("Asynk kod");
}, 10);


console.log("Synkron JS start");

for(let i = 0; i < 3; i++) {
    console.log("Synk loop" + i);
}

console.log("Synk end");


