// Arrays = a variable like structure that can hold more than one value.

let fruit = ["apple","orange","banana","mango"];

fruit[4] = "coconut";


console.log(fruit);
fruit.push("mango");
fruit.pop();
fruit.unshift("watermelon"); // begining
fruit.shift();





console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[1][2]);
console.log("**************************");


let numOfFruits = fruit.length;
let index = fruit.indexOf("orange");
console.log("**********sort****************");

// fruit.sort();
fruit.sort().reverse();


for(let i = 0; i<fruit.length; i++)
{
    console.log(fruit[i]);
}

console.log("**************************");
console.log(numOfFruits);
console.log(index);

 