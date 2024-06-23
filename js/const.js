/***************** CONSTANT ********************/


// const = a variable that cannot be changed. constant variable must only uppercase.

const PI = 3.14159;
let radius;
let circumference;


// radius = window.prompt('Enter the number');
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log(circumference);

document.getElementById("mySubmit").onclick = function(){
    radius=document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById("myH3").textContent = circumference + "cm";
}