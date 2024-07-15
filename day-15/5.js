let arr = ['apple', 'banana', 'cherry']

let data = arr.map((element, index) => {
    if (element == 'banana') {
        console.log(index)
    }
})