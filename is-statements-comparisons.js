// IF STATEMENTS AND COMPARISON OPERATORS
document.body.innerHTML = `<h1>If Statements and Comparison Operators</h1>`

const id = 100;

// // Equal to value
// if (id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Not equal to value
// if (id != 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Equal to value and type
// if (id === '100') {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Not equal to value and type
// if (id !== '100') {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Check if something exists without getting error if it does not
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID.');
// }

// // Check if something exists without getting error if it does not
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID.');
// }

// // Greater or less than
// if (id <= 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

const colour = 'red';

// // If else
// if (colour === 'red') {
//   console.log('Colour is red.');
// } else if (colour === 'blue') {
//   console.log('Colour is blue.');
// } else {
//   console.log('Colour is not red or blue.');
// }

// Logical Operators
// AND &&
const firstName = 'Charlie';
const age = 32;
if (age > 0 && age < 12) {
  console.log(`${firstName} is a child.`);
} else if (age >= 13 && age <= 19) {
  console.log(`${firstName} is a teenager.`);
} else {
  console.log(`${firstName} is an adult.`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${firstName} can not run in the race.`);
} else {
  console.log(`${firstName} is registered for the race.`);
}

// Ternary Operator
console.log(age < 100 ? 'CORRECT' : 'INCORRECT');