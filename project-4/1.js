function fac() {
    let a = document.getElementById("value").value

    let sum = 1;

    // console.log(a)


    for (let x = 1; x <= a; x++) {
        sum *= x;
    }



    document.getElementById("h").innerText =
        "This is your Factorial =    " + sum;
}

