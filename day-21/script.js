let image =
    [
        "https://i.pinimg.com/736x/ca/28/b2/ca28b29847478997fd13c4d84005ef83.jpg",
        "https://i.pinimg.com/736x/cd/96/1a/cd961a0a0036e57e9bc0246b911c8df0.jpg",
        "https://cdn.shopify.com/s/files/1/0483/2598/4420/files/Shivaparvati_480x480.webp?v=1696930021",
    ]

let a = 0;

document.getElementById("images").innerHTML = `<img src="${image[a]}" alt="${image[a]}"/>`

let btn1 = document.querySelector("#prev");
let btn2 = document.querySelector("#next");

btn1.addEventListener("click", d1);
btn2.addEventListener("click", d2);

function d1() {
    console.log(a)
    if (a > 0) {
        a--
    }
    else {
        a = image.length - 1
    }
    document.querySelector("#images").innerHTML = `<img src="${image[a]}" alt=${image[a]}"/>`
}

function d2() {
    console.log(a)
    if (a < image.length - 1) {
        a++
    }
    else {
        a = 0;
    }
    document.querySelector("#images").innerHTML = `<img src="${image[a]}" alt="${image[a]}"/>`
}