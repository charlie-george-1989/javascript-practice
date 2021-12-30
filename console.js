// Log to console
document.body.innerHTML = `<h1>CONSOLE</h1>`
console.log('Hello');
console.log(true);
var greeting = 'Greeting';
console.log(greeting);
console.log('Hello');
console.log(123);
// Array
console.log([1,2,3,4]);
// Object literal
console.log(
  {
    a:1,
    b:2
  }
);
console.table({a:1, b:2});
console.error('This is an error');
console.warn('This is an warning');

// Time how long it takes for JS to execute
console.time('Time');
  console.log('This is running');
  console.log('This is running');
  console.log('This is running');
  console.log('This is running');
  console.log('This is running');
  console.log('This is running');
console.timeEnd('Time');
