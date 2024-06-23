// How to accept user input
// 1. Easy way = window prompt
// 2. Professional way = html textbox
// alert("Hello!");


let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    //console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`
}