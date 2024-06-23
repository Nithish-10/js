// Switch = can be an efficient replacement to many else if statements

/*
let day = 4;

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Not a Day");
}
*/

//let day = 4;
const myLabel = document.getElementById("myLabel");
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const printDay =  document.getElementById("printDay");

mySubmit.onclick = function(){
    const day = parseInt(myText.value); // Getting value from input and converting to integer
    switch(day){
        case 1:
            // console.log("Sunday");
            printDay.textContent = "Sunday";
            break;
        case 2:
            // console.log("Monday");
            printDay.textContent = "Monday";
            break;
        case 3:
            // console.log("Tuesday");
            printDay.textContent = "Tuesday";
            break;
        case 4:
            // console.log("Wednesday");
            printDay.textContent = "Wednesday";
            break;
        case 5:
            // console.log("Thursday");
            printDay.textContent = "Thursday";
            break;
        case 6:
            // console.log("Friday");
            printDay.textContent = "Friday";
            break;
        case 7:
            // console.log("Saturday");
            printDay.textContent = "Saturday";
            break;
        default:
            // console.log("Not a Day");
            printDay.textContent = "Not a Day";
    }
}
myReset.onclick = function(){
    myText.value = ""; // Reset input field value
    printDay.textContent = ""; // Reset <p> element text content
}

