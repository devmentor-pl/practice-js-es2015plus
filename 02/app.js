const inputs = document.getElementsByClassName("cart__quantity");
var arr = Array.from(inputs);
const button = document.querySelector(".cart__btn-calculate")
const price = document.querySelector(".cart__total-price")
button.addEventListener("click", () => {
    let sum = 0;

    arr.forEach( (element) => {
        sum = sum + parseInt(element.value);
        console.log(sum)
        return sum;
    })
    price.innerText = sum;
})