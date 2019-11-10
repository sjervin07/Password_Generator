//Variables
let num= ["0","1","2","3","4","5","6","7","8","9"]
let low= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let cap= ["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let sym= ["!","@","#","$","%","^","&","*","=","+","?","-","_"]
let mixed= []
let password = "";


function generate() {

//Conditions for password
let charLength = prompt("Enter a desired password length between 8 and 128 characters");

if (charLength < 8) {
    alert ("Please choose a length between 8-128.");
    return;
}

    else if (charLength > 128) {
        alert ("Please choose a length between 8-128.");
        return; 
    }

mixed = [];
let numYes = confirm ("Would you like to use numbers in your password?")
if (numYes) {
    mixed.push.apply(mixed, num)
}

let lowYes = confirm ("Would you like to use lower case letters in your password?")
if (lowYes) {
     mixed.push.apply(mixed, low)
}

let capYes = confirm ("Would you like to use upper case letters in your password?")
if (capYes) {
    mixed.push.apply(mixed, cap)
}

let symYes = confirm ("Would you like to use symbols in your password?")
if (symYes) {
    mixed.push.apply(mixed, sym)
}

//Creates the loop and generates password
for (let x = 0; x < charLength; x++) {
    
    password = password + mixed[Math.floor(Math.random() * mixed.length)];
}    
 

if (mixed.length === 0) {
    alert("You must choose at least one character type.");
}
else{


//Function that populates password into display area
alert ("Your password is: " + password)
document.getElementById("display").value = password;

}
}

//Function that copies password to clipboard
function copyPassword() {
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard");
}








