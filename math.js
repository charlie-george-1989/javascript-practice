// MATH
document.body.innerHTML = `<h1>Math</h1>`
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.8);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(8, 2);
val = Math.max(8, 2);
val = Math.floor(Math.random() * 10);

console.log(val);