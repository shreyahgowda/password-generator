const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthSlider.oninput = function(){
lengthValue.textContent = this.value;
}

function generatePassword(){

let length = lengthSlider.value;

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+";

let characters = "";

if(document.getElementById("uppercase").checked) characters += upper;
if(document.getElementById("lowercase").checked) characters += lower;
if(document.getElementById("numbers").checked) characters += numbers;
if(document.getElementById("symbols").checked) characters += symbols;

let password = "";

for(let i=0;i<length;i++){
let random = Math.floor(Math.random()*characters.length);
password += characters[random];
}

document.getElementById("password").value = password;

checkStrength(password);

}

function copyPassword(){

let pass = document.getElementById("password");

pass.select();
document.execCommand("copy");

alert("Password copied!");
}

function checkStrength(password){

let strength = document.getElementById("strength");

if(password.length < 8){
strength.textContent = "Weak Password";
strength.style.color = "red";
}
else if(password.length < 15){
strength.textContent = "Medium Password";
strength.style.color = "orange";
}
else{
strength.textContent = "Strong Password";
strength.style.color = "green";
}

}