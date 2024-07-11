let i;
let j;
let a;

// for (i = 1; i <= 5; i++) {
//     a = "";
//     if (i == 1 || i == 5) {
//         a += "*****";
//     }
//     else if (i == 2 || i == 4) {
//         a += "** **";
//     }
//     else {
//         a += "* * *";
//     }
//     console.log(a);
// }

for (i = 1; i <= 5; i++) {
    let a = ""
    for (j = 1; j <= i; j++) {
        a += j
    }
    console.log(a)


}