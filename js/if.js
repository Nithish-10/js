// IF statement = if a condition is true, execute some code. if not, do something else.
/*
let age =  25;
if(age >= 18){
    console.log("YOUR ARE ELIGIBLE TO VOTE");
}
else{
    console.log("YOUR AGE IS BELOW 18 NOT ELIGIBLE TO VOTE");
}
*/

/*
let isStudent = false;
if(isStudent){
    console.log("your are a student");
}
else{
    console.log("your are not a student");
}
*/

/*
let age = 25;
let hasLicense = false;
if(age >= 18)
{
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("You have your license!");
    }
    else{
        console.log("you do not have your license yet!");
    }
}
else{
    console.log("you must be 18 to have a license");
}
*/

const myText=document.getElementById("myText");
const mySubmit=document.getElementById("mySubmit");
const myReset = document.getElementById("myReset");
// const myReset=document.getElementById("myReset");
const Grade=document.getElementById("Grade");

myReset.onclick = function() {
    myText.value = ""; // Clear the input field
    Grade.textContent = ""; // Clear the grade output
};
let percentage = 42;


mySubmit.onclick = function(){
    percentage = myText.value;
    percentage = Number(percentage);
    if(percentage >= 91){
        // console.log("O Grade");
        Grade.textContent = "O Grade";
    }
    else if(percentage >= 81 && percentage<=90){
        // console.log("A+ Grade");
        Grade.textContent = "A+ Grade";
    }
    else if(percentage >= 71 && percentage<=80){
        // console.log("A Grade");
        Grade.textContent = "A Grade";
    }
    else if(percentage >= 61 && percentage<=70){
        // console.log("B+ Grade");
        Grade.textContent = "B+ Grade";
    }
    else if(percentage >= 51 && percentage<=60){
        // console.log("B Grade");
        Grade.textContent = "B Grade";
    }
    else{
        // console.log("Fail");
        Grade.textContent = "Fail";
    }   
}

