// DATES AND TIMES
document.body.innerHTML = `<h1>Dates and Times</h1>`

let val;

const today = new Date();
const birthday = new Date('12-21-1989');

val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();


console.log(val);