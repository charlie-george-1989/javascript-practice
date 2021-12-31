// OBJECT LITERALS
document.body.innerHTML = `<h1>Object Literals</h1>`

let val;

const person = {
  firstName: 'Charlie',
  lastName: 'George',
  age: 32,
  email: 'charliegeorgeanimation@live.co.uk',
  hobbies: ['gym', 'coding', 'cinema', 'gaming'],
  address: {
    houseNumber: '2',
    town: 'Wantage',
    city: 'Oxford',
    postCode: 'OX12 9as'
  },
  getBirthYear: function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
}

val = person;

// Get specific value (standard way)
val = person.firstName;

// Get specific value (non-standard way)
val = person['firstName'];

val = person.address.town;
val = person.getBirthYear();

console.log(val);