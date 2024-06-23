// String Methods = allow you to manipulate and work with text(String).

let userName = "Sathish Kumar";

console.log(userName.charAt(0));
console.log(userName.indexOf("t"));
console.log(userName.lastIndexOf("t"));
console.log(userName.length);

a = userName.trim();
console.log(a);

b = userName.toUpperCase(); //userName.toLocaleUpperCase();
console.log(b);

c = userName.toLowerCase(); // userName.toLocaleLowerCase();
console.log(c);

d = userName.repeat(2);
console.log(d);

let e = userName.startsWith(" ");
if(e)
{
    console.log("Your user can't begin with ' ' ");
}
else{
    console.log(userName);
}


let  f= userName.includes(" ");
if(f)
{
    console.log("Your user can't includes with ' ' ");
}
else{
    console.log(userName);
}

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-","/");
console.log(phoneNumber);

let g = "123-456-7890";

g = g.padStart(15,"0");
console.log(g);

let h = "123-456-7890";

h = h.padEnd(15,"0");
console.log(h);

