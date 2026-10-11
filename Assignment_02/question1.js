
var num1 = parseInt(prompt("Enter first number:"));
var num2 = parseInt(prompt("Enter second number:"));

if (num1 > num2) {
    console.log("Greater number is: " + num1);
    document.getElementById("result").innerHTML =
        "Greater number is: " + num1;
} else if (num2 > num1) {
    console.log("Greater number is: " + num2);
    document.getElementById("result").innerHTML =
        "Greater number is: " + num2;
} else {
    console.log("Both numbers are equal");
    document.getElementById("result").innerHTML =
        "Both numbers are equal";
}

