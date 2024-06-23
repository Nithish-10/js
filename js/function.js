// Function = A section of reusable code. Declare code once, use it whenever you want.
// call the function to execute that code.

/*
function happyBirthday(userName, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${userName}!`);
    console.log("Happy birthday to you!");
    console.log(`you are ${age} years old `);
}
happyBirthday("Sathish", 25);
happyBirthday("Kumar", 22 );
// happyBirthday();

*/

/*
function add(x,y){
    let result = x + y;
    return result;
    // console.log(result); // 5
}
function sub(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}



// add(2,3); // 5
let answer = add(2,3);
console.log(answer); // 5
console.log(add(4,4)); // 8
console.log(sub(3,6)); // -3
console.log(multiply(3,4)); // 12
console.log(divide(10,2)); // 5

*/

/*
function isEven(number){

    if(number%2===0)
    {
        // console.log("Even");
        return true;
    }
    else
    {
        // console.log("Odd");
        return false;
    }
}

// isEven(20);
console.log(isEven(12));
console.log(isEven(43));
*/

/*

// Using ternary Operator
function isEven(number){
    return number%2===0 ? true : false;
}

console.log(isEven(24));
console.log(isEven(53));
*/


function isValidEmail(email){
    /*if(email.includes("@"))
    {
        return true;
    }
    else{
        return false;
    }*/
    return email.includes("@")? true : false;
}

console.log(isValidEmail("Sathish123@gmail.com"));
console.log(isValidEmail("Google.com"));