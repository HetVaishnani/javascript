let arr = [2, 3, 4]

function doubleAndAddIndex(num) {
    let a = arr.map((el, index) => {
        return (el * 2) + index
    })
    return a;
}



console.log(doubleAndAddIndex(arr))