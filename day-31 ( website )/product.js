fetch(`http://localhost:3000/product`)
    .then((res) => {
        return res.json();
    }
    )
    .then((res) => {
        document.querySelector("#content").innerHTML = view(res)
    })

    .catch((err) => {
        console.log(err);
    })



function view(arr) {
    return arr.map((el, i) => {
        return `
        <div class="col-md-3">
                    <div class="product-card">
                    <div class="image">
                        <img src="${el.image}"
                            alt="" ></img>
                        </div>
                    
                        <div class="product-name">
                        <p>${el.name}</p>
                        </div>
                        <div class="product-price">
                        <p>₹ ${el.price} <span class="product-discount">₹ ${el.realPrice}</span></p>
                        </div>
                        <div class="product-action">
                            <button class="btn" style="border: 1px solid #1D7A6B;" onclick="call(${el.id})">Add to Cart</button>
                        </div>
                    </div>
                </div>
        `
    }).join("")
}

function call(val) {
    // console.log(val);
    fetch(`http://localhost:3000/product/${val}`)
        .then((res) => res.json())
        .then((res) => {
            // console.log(res);  
            addCart(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

function addCart(cart) {

    fetch(`http://localhost:3000/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cart)
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            // alert("sign up");
            console.log(res);

        }).catch((err) => {
            console.log(err)
        })
}