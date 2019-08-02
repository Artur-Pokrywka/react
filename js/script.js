// ZADANIE 1
const a = 'Hello';
const b = 'World';

console.log(a, b);


// ZADANIE 2
const multiply = (a, b = 1) => a * b;

console.log(multiply(3, 7));
console.log(multiply(9));


// ZADANIE 3
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const average = (...args) => args.reduce(reducer) / args.length;

console.log(average(4, 6, 8, 10));

// ZADANIE 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const average = (...args) => args.reduce(reducer) / args.length;

console.log(average(11, ...grades));


// ZADANIE 5
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,firstname, , lastname] = array;

console.log(firstname, lastname);