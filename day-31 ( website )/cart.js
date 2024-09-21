fetch(`http://localhost:3000/cart`)
    .then((res) => res.json())
    .then((res) => {
        // Total(res)
        // document.getElementById("box").innerHTML = view(res)
        console.log(res);
        let data = "";
        let total = 0;
        res.forEach((el, i) => {
            data += `
                <div class="container my-4">
         <div class="row">
             <!-- Left Column - Cart Items -->
             <div class="col-lg-">
                 
                 <div class="cart-item d-flex justify-content-between align-items-center col-">
                     <div class="d-flex align-items-center col-5">
                         <img src="${el.image}" class="img-fluid" alt="Product Image">
                         <div class="ms-3 col-12">
                             <h5>Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels - 1L</h5>
                             <p>By EVERHERB</p>
                             <p>1L Liquid in Bottle</p>
                             <p>
                                 <span class="text-muted text-decoration-line-through">₹399.00</span>
                                 <span class="price-text">${el.price}</span>
                                 <span class="discount-text">48% OFF</span>
                             </p>
                             <p>Delivery by <strong>Tomorrow, before 10:00 pm</strong></p>
                         </div>
                     </div>
                     <div class="text-end">
                         <select class="form-select w-auto">
                             <option value="1">Qty 1</option>
                             <option value="2">Qty 2</option>
                             <option value="3">Qty 3</option>
                         </select>
                         <button class="btn btn-link text-danger mt-2">Remove</button>
                     </div>
                 </div>
             </div>
            `;
            total += el.price;
        })
        document.getElementById("box").innerHTML = data;
        document.querySelector("#totalPrice").innerHTML = `Cart total: ₹ ${total}`;

    })
    .catch((err) => {
        console.log(err)
    })