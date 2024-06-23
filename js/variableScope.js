// Variable Scope = where a variable is recognized and accessible (local and global).


// Variables declared within a function have local scope. They are accessible only within the function in which they are declared.

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

function1();
function2();

// Variables declared outside of any function have global scope. They are accessible from any part of the script, including inside functions.

let y = 3;
function function11(){
    console.log(y);
}

function function12(){
    console.log(y);
}

function11();
function12();