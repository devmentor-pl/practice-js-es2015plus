const price = document.querySelector(".cart__total-price");
const btnCalculate = document.querySelector(".cart__btn-calculate");

btnCalculate.addEventListener("click", (e) => {
  let totalPrice = 0;
  
  const cart_items = [...document.getElementsByClassName("cart__item")]
  cart_items.forEach((item) => {
    const input = item.querySelector("input");
    const { value, dataset: {price} } = input
    totalPrice += (Number(value) * Number(price))
  }) 
  
  price.innerText = totalPrice.toFixed(2)
})