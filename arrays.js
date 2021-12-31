// ARRAYS AND METHODS
document.body.innerHTML = `<h1>Arrays and Methods</h1>`

// Create some arrays
const numbers = [1,2,3,4,5];
const numbers2 = new Array(6,7,8,9,10);
const fruit = ['Apple', 'Orange', 'Banana', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if something is an array
val = Array.isArray(numbers);

// Get single value
val = numbers[4];

// Insert into array
numbers[2] = 100;
numbers[2] = 3;

// Find index of value
val = numbers.indexOf(100);

// MUTATING ARRAYS
// Add to end
numbers.push(250);
numbers.push(500);

// Add on to front
numbers.unshift(120);

// Remove from end
numbers.pop();

// Remove from front
numbers.shift();

// Splice values (parameters are ones removed)
numbers.splice(5,5);

// Reverse
numbers.reverse();
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = val.sort();

// Use the "compare function" to sort numbers
val = val.sort(function(x,y) {
  return x - y;
});

// Use the above method in reverse to reverse the order
val = val.sort(function(x,y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 4;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);