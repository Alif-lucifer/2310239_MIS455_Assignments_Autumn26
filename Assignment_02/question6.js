
function checkTemperature() {
    var temp = parseInt(document.getElementById("tempBox").value);

    if (temp < 0) {
        console.log("Freezing weather");
        document.getElementById("result").innerHTML = "Freezing weather";
    } else if (temp <= 10) {
        console.log("Very Cold weather");
        document.getElementById("result").innerHTML = "Very Cold weather";
    } else if (temp <= 20) {
        console.log("Cold weather");
        document.getElementById("result").innerHTML = "Cold weather";
    } else if (temp < 30) {
        console.log("Normal in Temp");
        document.getElementById("result").innerHTML = "Normal in Temp";
    } else if (temp < 40) {
        console.log("Its Hot");
        document.getElementById("result").innerHTML = "Its Hot";
    } else {
        console.log("Its Very Hot");
        document.getElementById("result").innerHTML = "Its Very Hot";
    }
}
