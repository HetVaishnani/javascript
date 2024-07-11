let a = 1;
let num = 19;
let count = 0;

while (a <= num) {
    if (num % a == 0) {

        count++
    }
    a++

}
if (count == 2) {
    console.log("this is prime number " + num)
}
else {
    console.log("this is not a prime number " + num)
}