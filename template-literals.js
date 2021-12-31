// TEMPLATE LITERALS
document.body.innerHTML = `<h1>TEMPLATE LITERALS</h1>`

const firstName = 'Charlie';
const age = 32;
const job = 'Web Developer';
const city = 'Oxford';

function greeting() {
  return 'Hello, ' + firstName + '.';
}

// Without template strings (es5)
html = '<ul><li>Name: ' + firstName + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + ' </li></ul>';

html =
  '<ul>' +
    '<li>Name: ' + firstName + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + ' </li>' +
  '</ul>';

// With template literals (es6)
html = `
  <ul>
    <li>Name: ${firstName}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>Math: ${2 + 2}</li>
    <li>Function: ${greeting()}</li>
    <li>Conditional: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`

document.body.innerHTML = html;
