let arr = [1, 2, 3, 4, 5]

let data = arr.filter((ele, ind) => {
    if (ele % 2 == 0) {
        return ele;
    }
})
console.log(data);