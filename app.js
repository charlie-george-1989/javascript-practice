// GENERAL LOOPS
document.body.innerHTML = `<h1>General Loops</h1>`

// Loops (For when you know how many iterations there are going to be)
for(let i = 0; i < 10; i++) {

    if(i === 4) {
        console.log(i + ' is my lucky number.');
        // Restart loop
        continue;
    }

    if(i === 8) {
        break;
    }

    console.log('Number ' + i);
}

let i = 4;

// While Loop (For when you DO NOT know how many iterations there are going to be)
while(i === 4) {
    console.log('Hello');
    break;
}