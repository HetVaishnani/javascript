function num() {

    let numb = document.getElementById("val").value

    let f=" "

    for (let x = 1; x <= numb; x++) {
        if (primeCheck(x)) {
            // console.log(x)
            f+=x +"<br>"
            
        }
    }

    document.getElementById("ans").innerHTML=f


    function primeCheck(a) {
        let count = 0;

        for (let x = 1; x <= a; x++) {

            if (a % x == 0) {
                count++
            }
        }
        if (count == 2) {
            return true;
        }
        else {
            return false
        }
    }
}