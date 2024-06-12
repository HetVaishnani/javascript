function leap() {
    let answer = document.getElementById("y").value;

    if (answer % 4 == 0) {
        document.getElementById("years").innerText = "This is Leap Year";
    } else {
        document.getElementById("years").innerText = "This is Not Leap Year";
    }
}


function age() {
    let age = document.getElementById("a").value
    let citizenship = document.getElementById("c").value



    if (age >= 18 && citizenship >= "india") {
        document.getElementById("ages").innerText = "You are eligible to vote"
        document.getElementById("citizenship").innerText

    }
    else {
        document.getElementById("ages").innerText = "You are't eligible to vote"
        document.getElementById("citizenship").innerText

    }

}
function tem() {
    let temperature = document.getElementById("t").value



    if (temperature > 40) {
        document.getElementById("temp").innerText = "Hot"
        // document.getElementById("temp").innerText = "Enter the temp"


    }
    else {
        document.getElementById("temp").innerText = "Moderate"
        // document.getElementById("temp").innerText = "Enter the temperature"


    }

}
function ln() {
    let a = document.getElementById("f").value;
    let b = document.getElementById("s").value;
    let c = document.getElementById("t").value;

    if (a > b && a > c) {
        document.getElementById("number").innerText = "First is Bigger...";
    }
    if (b > c) {
        document.getElementById("number").innerText = "Second is Bigger...";
    } else {
        document.getElementById("number").innerText = "Third is Bigger...";
    }
}
function dn() {
    let answer = document.getElementById("n").value;

    if (answer % 2 == 0) {
        document.getElementById("d").innerText = "This is Even";
    } else {
        document.getElementById("d").innerText = "This is Odd";
    }
}
function interest() {
    var p = document.getElementById("pa").value;
    var n = document.getElementById("ir").value;
    var r = document.getElementById("ny").value;

    var main = (parseInt(p) * parseInt(n) * parseInt(r)) / 100;

    document.getElementById("result").value = main;
}

function letter() {
    let answer = document.getElementById("l").value;

    if (answer == "a" || answer == "e" || answer == "i" || answer == "o" || answer == "u") {
        document.getElementById("let").innerText = "This is Vowel";
    } else {
        document.getElementById("let").innerText = "This is Constant";
    }
}
function a() {
    let answer = document.getElementById("year").value;

    if (answer >= 13) {
        document.getElementById("h").innerText = "You Can Access the Website";
    } else {
        document.getElementById("h").innerText =
            "You Can-not Access the Website";
    }
}
