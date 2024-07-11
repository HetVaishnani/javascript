let a;

for (let i = 1; i <= 5; i++) {
    let a = ""
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || j == 5 || i == 5 || j == 1 || i == j || i + j == 5 + 1) {
            a += "* "
        }
        else {
            a += "  "
        }

    }
    console.log(a);

}