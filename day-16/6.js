let arr = [2, 3, 4, 5, 6, 7, 8, 9]

let data = arr.map((el, index) => {

    if (el % 2 != 0) {

        return el * 2

    }
    else {
        return el
    }
})

console.log(data)