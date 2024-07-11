let first = 0;
let second = 1;
let next;
let n = 10

for (let i = 1; i <= n; i++) {
    next = first + second;
    first = second;
    second = next;
    console.log(next)
}
