let arr = [2, 5, 12, 15, 7, 20]

let data = arr.filter((el) => {
    if (el >= 10) {
        return el;
    }
})

console.log(data)

let ans = data.map((el) => {
    return el * el;
})

let el = ans.forEach((el) => {
    console.log(el)
})