// Ternary Operator = a shortcut to if{} and else{} statement
//                    it helps to assign the value based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

/*
let age = 21;
let eligibility;
eligibility = age >= 18 ? "You are eligible to vote" : "You are NOT eligible to vote";
console.log(eligibility);
*/

/*
let time = 16;
let greeting = time < 12? "GoodMorning" : "GoodAfternoon";
console.log(greeting);
*/

/*
let isStudent = true;
let message = isStudent ? "You are a student" : "You are NOT a student"
console.log(message);
*/

let purchaseAmount = 99; 
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`your total is $${purchaseAmount - purchaseAmount  *(discount / 100)}`);
