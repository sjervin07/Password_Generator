let num= ["0","1","2","3","4","5","6","7","8","9"]
let low= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let cap= ["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let sym= ["!","@","#","$","%","^&","*","=","+","?","-","_"]
let mixed= []
let password = ""


function generate() {


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
    mixed.push.apply(mixed,cap)
}

let symYes = confrim ("Would you like to use symbols in you password?")
if (symYet) {
    mixed.push.apply(mixed, sym)
}

}



