
var name = prompt("Enter your name:");
var fees = parseInt(prompt("Enter total tuition fees:"));
var birthYear = parseInt(prompt("Enter your birth year:"));

var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;
var discount;

if (fees > 50000 && age > 21) {
    discount = fees * 15 / 100;
} else if (fees > 40000 && age > 20) {
    discount = fees * 10 / 100;
} else if (fees > 30000 && age > 19) {
    discount = fees * 5 / 100;
} else {
    discount = fees * 2 / 100;
}

var payable = fees - discount;

console.log("Name: " + name);
console.log("Discount Amount: " + discount);
console.log("Payable Tuition Fees: " + payable);
