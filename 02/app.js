const cartItems = [...document.getElementsByClassName("cart__quantity")];
const [calculateBtn] = [
  ...document.getElementsByClassName("cart__btn-calculate"),
];

const [totalPrice] = [...document.getElementsByClassName("cart__total-price")];

calculateBtn.addEventListener("click", () => {
  let totalCost = 0;
  cartItems.forEach((item) => {
    const {
      dataset: { price },
      value,
    } = item;
    totalCost = totalCost + price * value;
  });
  totalPrice.textContent = totalCost;
});
