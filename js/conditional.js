
const part1 = document.querySelector('.part1');

const inputString = document.querySelector('.string');
const inputBigger = document.querySelector('.bigger');
const inputEqual = document.querySelector('.equal');

let outString = document.querySelector('.out-string');
let outBigger = document.querySelector('.out-bigger');
let outEqual = document.querySelector('.out-equal');

const btnString = document.querySelector('.btn-string');
const btnBigger = document.querySelector('.btn-bigger');
const btnEqual = document.querySelector('.btn-equal');

btnString.addEventListener('click', () => {
    // haal de waarde van de input van class string,
    // stop het in een variabele.
    // Vergelijk de variabele met de string 'Mondriaan'
    // Zijn ze gelijk, dan toon in out-string element
});

btnBigger.addEventListener('click', () => {
    // haal de waarde van de input van class bigger
    // stop het in een variabele.
    // Is de waarde van de variabele groter dan 10,
    // dan toon het in element out-bigger
});

btnEqual.addEventListener('click', () => {
    // haal de waarde van de input van class equal
    // stop het in een variabele.
    // Is de waarde van de variabele gelijk 20,
    // dan toon SUCCES! in element out-equal
    // en anders toon FOUT!
});