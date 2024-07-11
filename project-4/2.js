function fibo() {
    let a = document.getElementById("f").value;

    let first = 0;
    let second = 1;
    let next;

    for (i = 1; i <= a - 1; i++) {
        next = first + second;
        first = second;
        second = next;

        document.getElementById("h").innerText = next;
    }
}