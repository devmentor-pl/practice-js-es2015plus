// const cartList = document.querySelector("ul");
// const cartTotalPrice = document.querySelector(".cart__total-price");
// let sum = 0;
// cartList.addEventListener("change", (e) => {
//   const quantity = e.target.value;
//   const price = e.target.getAttribute("data-price");
//   sum += quantity * price;
//   cartTotalPrice.textContent = sum;
// });
const cartList = document.querySelector("ul");
const cartTotalPrice = document.querySelector(".cart__total-price");
const calculateTotal = (e) => {
  let sum = 0;
  const inputs = document.getElementsByClassName("cart__quantity");
  const inputsArr = Array.from(inputs);
  inputsArr.forEach((input) => {
    const {
      dataset: { price },
      value,
    } = input;
    // const price = Number(input.dataset.price);
    // const quantity = Number(input.value);
    sum += price * value;
  });
  cartTotalPrice.textContent = sum;
};
cartList.addEventListener("change", calculateTotal);
