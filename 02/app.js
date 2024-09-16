const qtyList = document.getElementsByClassName("cart__quantity");
const qtyArray = [ ...qtyList];
const btn = document.querySelector(".cart__btn-calculate");
const totalSpan = document.querySelector(".cart__total-price");

btn.addEventListener("click", function() {
    total = []
    qtyArray.forEach(input => {
        const {
        value: singleAmount,
        dataset: {price:singlePrice}
        } = input
        singleTotal = singleAmount * singlePrice;
        total.push(singleTotal); 
    });
    totalSpan.textContent = calculateTotal(total);
});

function calculateTotal(arr) {
    return arr.reduce( (acc, num) => {
    return acc + num;
    }, 0);
}
   