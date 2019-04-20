// Pierwsze zadanie

const firstWord = [`Hello`];
const secondWord = [`World`];
const arrayOfWords = [...firstWord, ...secondWord];

arrayOfWords.forEach(elem => console.log(elem));

// Drugie zadanie

const multiply = (a, b = 1) => a * b;

// Trzecie zadanie

let average = (...args) => args.reduce((prev, curr) => prev + curr) / args.length;

// Czwarte zadanie

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

// Piąte zadanie 

const weirdArray = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = weirdArray;

console.log(firstName, lastName);
