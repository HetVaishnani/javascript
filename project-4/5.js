function squ() {
    let a = document.getElementById("s").value;
    let c;
    let empty = " ";
    for (let x = 1; x <= a; x++) {
        c = x * x;
        empty += c + " ";
    }
    document.getElementById("h").innerText = empty;
}