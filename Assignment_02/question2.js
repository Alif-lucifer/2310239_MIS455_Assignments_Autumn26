
var age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You are eligible to vote.");
    document.getElementById("result").innerHTML =
         "Your age is " + age + ". You are eligible to vote.";
} else {
    console.log("You are not eligible to vote.");
    document.getElementById("result").innerHTML =
        "Your age is " + age + ". You are not eligible to vote.";
}
