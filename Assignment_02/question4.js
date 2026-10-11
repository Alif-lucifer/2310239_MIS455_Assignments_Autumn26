
function calculateGrade() {
    var marks = parseInt(document.getElementById("marksBox").value);

    if (marks >= 90) {
        console.log("Grade: A");
        document.getElementById("result").innerHTML = "Grade: A";
    } else if (marks >= 85) {
        console.log("Grade: A-");
        document.getElementById("result").innerHTML = "Grade: A-";
    } else if (marks >= 80) {
        console.log("Grade: B+");
        document.getElementById("result").innerHTML = "Grade: B+";
    } else if (marks >= 75) {
        console.log("Grade: B");
        document.getElementById("result").innerHTML = "Grade: B";
    } else if (marks >= 70) {
        console.log("Grade: B-");
        document.getElementById("result").innerHTML = "Grade: B-";
    } else if (marks >= 65) {
        console.log("Grade: C+");
        document.getElementById("result").innerHTML = "Grade: C+";
    } else if (marks >= 60) {
        console.log("Grade: C");
        document.getElementById("result").innerHTML = "Grade: C";
    } else if (marks >= 55) {
        console.log("Grade: C-");
        document.getElementById("result").innerHTML = "Grade: C-";
    } else if (marks >= 50) {
        console.log("Grade: D");
        document.getElementById("result").innerHTML = "Grade: D";
    } else {
        console.log("Grade: F");
        document.getElementById("result").innerHTML = "Grade: F";
    }
}
