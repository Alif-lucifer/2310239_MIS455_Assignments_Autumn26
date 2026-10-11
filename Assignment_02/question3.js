
var num1 = parseInt(prompt("Enter first number:"));
var num2 = parseInt(prompt("Enter second number:"));
var num3 = parseInt(prompt("Enter third number:"));

if (num1 >= num2 && num1 >= num3) {
    console.log("Greatest number is: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Greatest number is: " + num2);
} else {
    console.log("Greatest number is: " + num3);
}
