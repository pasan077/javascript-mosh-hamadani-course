// This is my first java script code!
console.log('Hello World');

let name = 'Mosh';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a numebr (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName1 = 'undefined';
let lastName2 = null;
let isApproved = false;

let firstName = 'Mosh';
let age = 30;
let lastName = 'Hamadani';

let interestRate = 0.3;
interestRate = 1;

console.log(interestRate);

let person = {
    name: 'Mosh',
    age: 30
};

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';
console.log(person);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

// Functions

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', lastName);
greet('Mary', 'Smith');

// Type of functions

// performing a task

// calculate a value

function square (number) {
    return number * number;
}

let number = square (2);
console.log(number);