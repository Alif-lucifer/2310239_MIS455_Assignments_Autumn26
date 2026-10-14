
function checkCharacter() {
    var ch = document.getElementById("charBox").value;
    ch = ch.toLowerCase();

    if (ch == "a" || ch == "e" || ch == "i" ||
        ch == "o" || ch == "u") {

        console.log("Vowel");
        document.getElementById("result").innerHTML = "Vowel";

    } else {
        console.log("Consonant");
        document.getElementById("result").innerHTML = "Consonant";
    }
}
