// Logical Operators = used to combine and manipulate the boolean values (True  or False)
// AND = &&, OR = ||, NOT = !

// AND = &&

const temp = 20;

if(temp > 0 && temp <= 30)
{
    console.log("Weather is Good");
}
else{
    console.log("Weather is not good");
}

// OR = ||
const temps = -250;

if(temps <= 0 || temps >= 30)
{
    console.log("Weather is not Good");
}
else{
    console.log("Weather is  good");
}

// NOT = !

const isSunny = true;
// const isSunny = false;

if(!isSunny)
{
    console.log("It is CLOUDY ");
}
else{
    console.log("It is SUNNY ");
}