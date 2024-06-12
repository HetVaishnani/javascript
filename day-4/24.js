let amount = 100
let tax = 10
let tip = 20

let TaxAmount = amount * tax / 100;

console.log(TaxAmount);

let TipAmount = TaxAmount * tip / 100 + tax

console.log(TipAmount);

let TotalAmount = TaxAmount + TipAmount

console.log(TotalAmount)

console.log(TotalAmount + amount)


