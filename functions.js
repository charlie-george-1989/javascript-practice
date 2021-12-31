// FUNCTION DECLARATIONS AND EXPRESSIONS
document.body.innerHTML = `<h1>Function Declarations and Expressions</h1>`

// Function Declarations
function greet(firstName = 'Charlie', lastName = 'George') {
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('John'));

// Function Expressions
const square = function(x) {
  return x*x;
}

console.log(square(8));

// Immediately invokable function expressions - IIFEs
(function(firstName) {
  console.log('Hello ' + firstName);
})('Charlie');

// Property Methods
const todo = {
  add: function() {
    console.log('Add todo...');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function() {
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();