// TYPE CONVERSION
document.body.innerHTML = `<h1>TYPE CONVERSION</h1>`

let val;

// Number to String
val = String(555);
val = String(4+3);

// Boolean to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5.555');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);
val = parseInt('100.303');
val = parseFloat('100.303');

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));

// TYPE COERSION
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);