// String Slicing = creating a substring from a portion of another string.
                    // String.slice(start,end)

/*
const fullName = "Sathish kumar";

let a = fullName.slice(0, 7);  //FirstName
let b = fullName.slice(8, 13); //LastName
let c = fullName.slice(0, 1); //1stchar
let d = fullName.slice(-1 ); //lastchar

console.log(a);
console.log(b);
console.log(c);
console.log(d);

*/

const email = "sathish1234@gmail.com";

let userName = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(userName);
console.log(extension);