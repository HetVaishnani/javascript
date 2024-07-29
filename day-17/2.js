function filterEvenNumbers(arr) {
    let ans = arr.filter((el, ind) => {
        if (el % 2 == 0) {
            return el
        }
    })

    return ans
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))