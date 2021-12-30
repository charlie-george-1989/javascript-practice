// String Method and Concatination
document.body.innerHTML = `<h1>String Method and Concatination</h1>`

const firstName = 'Charlie';
const lastName = 'George';
const age = '32';
const str = 'Hello there my name is Charlie.';

let val;

val = firstName + lastName;

// Concatination
val = firstName + ' ' + lastName;

// Append
val = 'Charlie ';
val += 'George ';

val = 'Hello, my name is ' + firstName + ' and I am ' + age + '.';

// Escsaping
val = 'That\'s awesome, I can\'t wait.';

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Index
val = firstName[0];

// indexOf
val = firstName.indexOf('h');
val = firstName.lastIndexOf('e');

// charAt
val = firstName.charAt(2);

// Get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');

// replace()
val = str.replace('Charlie', 'Brad');

// include()
val = str.includes('Hello');

// Print in console log
console.log(val);