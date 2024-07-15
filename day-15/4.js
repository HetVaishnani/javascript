let arr = ['a', 'b', 'c', 'd']

let data = arr.map((element, index) => {
    if (element == 'b') {
        return element = 'z'
    }
    else {
        return element;
    }
})
console.log(data)