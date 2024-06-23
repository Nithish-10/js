// variable = A container that stores a value.

// 1.declaration let x;
// 2.assignment x=100;


let x;
x=10;
console.log(x);

let y=100;
console.log(y);

let a =22;
let price= 10.99;
let gpa=8.60;

console.log(typeof a); // displays the type of variable

console.log(`My age is ${a}`);
console.log(`The price is $ ${price} `);
console.log(`My GPa is ${gpa}`);

//STRING

let firstName= "Sathish";
let secondName= "kumar";

console.log(typeof firstName);
console.log(`Your name is ${firstName} ${secondName}`);

//BOOLEAN 

let online = false;
let forSale= true;

console.log(typeof online);
console.log(`Nithish is online ${online}`);
console.log(`Is this car for sale: ${forSale}`);

let fullName= "Sathish Kumar";
let age = 22;
let student= false;

document.getElementById("fullName").textContent = fullName;
document.getElementById("age").textContent = `My age is ${age}`;
document.getElementById("student").textContent = `Enrolled: ${student}`;