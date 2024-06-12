function y() {
    let a = document.getElementById("year").value

    if (a % 4 == 0) {
        document.getElementById("head").innerText = "Leap Year";
    }
    else {

        document.getElementById("head").innerText = "Not Leap Year";
    }
}

function g() {
    let a = document.getElementById('mark').value;
    console.log("a")

    if (a >= 90 && a <= 100) {
        document.getElementById("h").innerText = "You Got 4.0"
    }
    if (a > 80 && a < 89) {
        document.getElementById("h").innerText = "You Got 3.0"
    }
    if (a > 70 && a < 79) {
        document.getElementById("h").innerText = "You Got 2.0"
    }
    if (a > 60 && a < 69) {
        document.getElementById("h").innerText = "You Got 1.0"
    }
    if (a < 60) {
        document.getElementById("h").innerText = "You Are 0.0"
    }
}

function inc() {
    let a = document.getElementById("in").value
    let b = document.getElementById("cs").value
    let c = document.getElementById("l").value




    if (a > 50000 && b > 700 && c < a / 2) {
        document.getElementById("head").innerText = "Eligible"
    }
    else {
        document.getElementById("head").innerText = "Not Eligible"
    }
}

function rang() {
    let a = document.getElementById("r").value
    let b = document.getElementById("m").value
    let c = document.getElementById("mi").value

    if (+c >= +a && +c <= +b) {
        document.getElementById("head").innerText = "Within Range"
    }
    else {
        document.getElementById("head").innerText = "With Out range"

    }
}