// Checked Property = it determines the checked state of an html checkbox and radio button element.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "you are subscribed. ";
    }
    else{
        subResult.textContent = "you are  not subscribed. ";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "you are paying Visa card.";
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = "you are paying MasterCard. ";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "you are paying Paypal. ";
    }
    else{
        paymentResult.textContent = "you are payment was not done. ";
    }
}


myReset.onclick = function(){
    myCheckBox.checked = false;
    visaBtn.checked = false;
    masterCardBtn.checked = false;
    payPalBtn.checked = false;
    subResult.textContent = "";
    paymentResult.textContent = "";
}