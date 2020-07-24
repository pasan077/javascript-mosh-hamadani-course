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


let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate);
}


let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,

    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

console.log(employee.getWage());

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
};
}

const circle1 = createCircle(1);
circle.draw();

// Constructor Function

function Circle2(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle2(1);
