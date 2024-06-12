function cal() {
    let a = parseInt(document.getElementById("fv").value)
    let b = parseInt(document.getElementById("sv").value)
    let c = parseInt(document.getElementById("tv").value)

    console.log(a)
    console.log(b)
    console.log(c)

    if (a > b && a > c) {
        document.getElementById("ans").value = a;

    } else if (b > c) {
        document.getElementById("ans").value = b;

    } else {
        document.getElementById("ans").value = c;
    }

    if (a < b && a < c) {
        document.getElementById("ans1").value = a;

    } else if (b < c) {
        document.getElementById("ans1").value = b;

    } else {
        document.getElementById("ans1").value = c;
    }
}

function pos() {

    let a = document.getElementById('fv').value;

    if (a < 0) {
        document.getElementById('num').innerText = "This is Negative Number";
    }
    else if (a == 0) {
        document.getElementById('num').innerText = "This is Neutral Number";
    }
    else if (a > 0) {
        document.getElementById('num').innerText = "This is Positive Number";
    }

}

function add() {
    let a = document.getElementById('ta').value;

    if (a >= 90) {
        document.getElementById('number').innerText = "You Got A Grade"
    }
    if (a > 80 && a < 89) {
        document.getElementById('number').innerText = "You Got B Grade"
    }
    if (a > 70 && a < 79) {
        document.getElementById('number').innerText = "You Got C Grade"
    }
    if (a > 60 && a < 69) {
        document.getElementById('number').innerText = "You Got D Grade"
    }
    if (a < 60) {
        document.getElementById('number').innerText = "You Are Fail..."
    }
}