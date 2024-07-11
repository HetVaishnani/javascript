function ev() {
    let a = document.getElementById("e").value;

    if (a % 2 == 0) {
        document.getElementById("h").innerText = "This is Even =   " + a;
    } else {
        document.getElementById("h").innerText = "This is odd =   " + a;
    }
}