var len= [document.getElementById("length")]
var num= ["0123456789"]
var low= ["abcdefghijklmnopqrstuvwxyz"]
var cap= ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var sym= ["!@#$%^&*=+?-_"]

var options= [num, low, cap, sym]


prompt ("How many characters do you want in your password?");

confirm("Click OK to include numbers");

confirm("Click OK to include special characters");

confirm("Click OK to include upper case letters");

confirm("Click OK to include lower case letters")

if (options !== "") {
    alert("You must select at least one character type");


        
}
