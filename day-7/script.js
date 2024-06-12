function cal() {
    let value = document.getElementById("v").value

    if (value > 0 && value <= 10000) {
        let answer = value * 5 / 100
        document.getElementById("ans").innerText = "Tax is ₹" + answer
    }
    else if (value >= 10001 && value <= 50000) {
        let answer = value * 10 / 100
        document.getElementById("ans").innerText = "Tax is ₹" + answer
    }
    else if (a > 50001 && a <= 100000) {
        let value = a * 15 / 100
        document.getElementById("ans").innerText = "Tax is:- ₹" + answer
    }
    else {
        let value = a * 20 / 100
        document.getElementById("ans").innerText = "Tax is:- ₹" + answer
    }
}

function cal2() {
    let a = document.getElementById('vau').value;

    if (a > 0 && a <= 100) {
        let bill = a * 0.1;
        document.getElementById('answers').innerText = "Total Bill is:- ₹" + bill;

    }
    else if (a > 101 && a <= 200) {
        let bill = a * 0.15;
        document.getElementById('answers').innerText = "Total Bill is:- ₹" + bill;
    }
    else if (a > 201 && a <= 300) {
        let bill = a * 0.20;
        document.getElementById('answers').innerText = "Total Bill is:- ₹" + bill;
    }
    else {
        let bill = a * 0.25;
        document.getElementById('answers').innerText = "Total Bill is:- ₹" + bill;
    }
}

function cal1() {
    let a = document.getElementById('va').value;

    if (a > 0 && a <= 1) {
        document.getElementById('answ').innerText = "Infant";
    }
    else if (a > 1 && a <= 12) {
        document.getElementById('answ').innerText = "Child";
    }
    else if (a > 12 && a <= 19) {
        document.getElementById('answ').innerText = "Teenager";
    }
    else if (a > 20 && a <= 64) {
        document.getElementById('answ').innerText = "Adult";
    }
    else {
        document.getElementById('answ').innerText = "Senior Citizen";
    }
}
function cal4() {
    let a = document.getElementById('vau').value;
    let year = 2024;

    if (a < 0) {
        document.getElementById('answer').innerText = "Ancient";
    }
    else if (a >= 1 && a <= 1500) {
        document.getElementById('answer').innerText = "Midieval";
    }
    else if (a > 1500 && a <= year) {
        document.getElementById('answer').innerText = "Modern";
    }
    else if (a > year) {
        document.getElementById('answer').innerText = "Future";
    }
}


