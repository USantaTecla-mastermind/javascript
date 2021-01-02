const TOKENS = 4;
const MAX_ATTEMPTS = 10;
let attempts = parseInt(prompt("Dame el número de intentos"));
let blacks = parseInt(prompt("Dame el número de muertos"));
let whites = parseInt(prompt("Dame el número de heridos"));
alert("Has perdido? " + (attempts == MAX_ATTEMPTS && blacks < TOKENS));


