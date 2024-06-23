/*
=    Assignment Operator
==   comparison operator (Compare if values are equal)
===  Strict Equality (compare if values & datatype are equal)
!=   inequality operator
!==  Strict inequality operator
*/

const PI1 = 3.14;
if(PI1 === "3.14"){ //datatype int and value string
    console.log("That is PI");
}
else{
    console.log("That is Not a PI");
}


const PI2 = 3.14;
if(PI2 === 3.14){ // datatype int and value int
    console.log("That is PI");
}
else{
    console.log("That is Not a PI");
}

const PI3 = 3.14;
if(PI3 != "3.14"){ // datatype int and value string
    console.log("That is Not a PI");
}
else{
    console.log("That is PI");
}

const PI4 = "3.14";
if(PI4 !== "3.14"){  // datatype string and value int
    console.log("That is Not a PI");
}
else{
    console.log("That is PI");
}