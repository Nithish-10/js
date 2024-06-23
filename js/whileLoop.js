// alert("Hello!");
// While

/*

let userName ;
while(userName === "" || userName === null)
{
    userName = prompt(`Enter your name: `);
}
console.log(`Hello ${userName}`);

*/

// do_while

/*
do
{
    userName = prompt(`Enter your name: `);
}while(userName === "" || userName === null)
console.log(`Hello ${userName}`);

*/


let loggedIn = false;
let userName;
let password;

while(!loggedIn)
{
    userName = prompt(`Enter your userName: `);
    password = prompt(`Enter your password: `);

    if(userName === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid Credentials! Please try again");
    }
}