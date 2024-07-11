let number = 1;
for (let row = 1; row < 5; row++) {
    let a = ""
    for (let col = 1; col <= row; col++) {
        a += number;
        number++;
    }
    console.log(a);

}