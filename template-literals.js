// TEMPLATE LITERALS
document.body.innerHTML = `<h1>TEMPLATE LITERALS</h1>`

const firstName = 'Charlie';
const age = 32;
const job = 'Web Developer';
const city = 'Oxford';

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
  </ul>
`

document.body.innerHTML = html;
