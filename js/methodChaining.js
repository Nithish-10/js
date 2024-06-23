// Method Chaining = Calling one method after another in one continues line of code.

// No method chaining ------

let userName = window.prompt("Enter the userName: ");
/*
userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();
let extraChars= userName.slice(1);
extraChars = extraChars.toLowerCase();
userName = letter + extraChars;
console.log(userName);  
*/
//  Method Chaining -------

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(userName);
