function per() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("m").value);
    var c = parseInt(document.getElementById("f").value);

    var d = a * 0.4;
    var e = b * 0.3;
    var f = c * 0.3;

    var total = d + e + f;
    document.getElementById("h").innerText = total;

    if (total >= 90 && total <= 100) {
        document.getElementById("h1").innerText = "A is Your Grade";
    } else if (total >= 80 && total <= 89) {
        document.getElementById("h1").innerText = "B is Your Grade";
    } else if (total >= 70 && total <= 79) {
        document.getElementById("h1").innerText = "C is Your Grade";
    } else if (total >= 60 && total <= 69) {
        document.getElementById("h1").innerText = "D is Your Grade";
    } else if (total >= 0 && total <= 59) {
        document.getElementById("h1").innerText = "F is Your Grade";
    }
}

function ex() {
    let a = document.getElementById("e").value;
    let b = document.getElementById("s").value;

    if (a >= 0 && a <= 2) {
        alert("You Are Not Able to Get Bonus");
    } else if (a >= 3 && a <= 5) {
        document.getElementById("s").style.display = "block";
        let c = (b * 10) / 100;
        document.getElementById("h").innerText = "This is Your Bonus = " + c;
    } else if (a >= 6 && a <= 10) {
        document.getElementById("s").style.display = "block";
        let c = (b * 20) / 100;
        document.getElementById("h").innerText = "This is Your Bonus = " + c;
    } else if (a >= 11) {
        document.getElementById("s").style.display = "block";
        let c = (b * 30) / 100;
        document.getElementById("h").innerText = "This is Your Bonus = " + c;
    }
}

function tri() {
    var a = parseInt(document.getElementById("f").value);
    var b = parseInt(document.getElementById("s").value);
    var c = parseInt(document.getElementById("t").value);

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && a === c && b == c) {
            document.getElementById("h").innerText = "This is Equilateral";
        } else if (a === b || a === c || b === c) {
            document.getElementById("h").innerText = "This is Isosceles";
        } else {
            document.getElementById("h").innerText = "This is Scalence";
        }
    } else {
        document.getElementById("h").innerText = "Invalid Triangle";
    }
}