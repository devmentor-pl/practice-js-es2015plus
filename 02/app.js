const inputItem = document.getElementsByClassName("cart__quantity");
const buttonItem = document.querySelector(".cart__btn-calculate");
const summary = document.querySelector(".cart__total-price");

buttonItem.addEventListener("click", function () {
  let sum = 0;
  [...inputItem].forEach((item) => {
    const {
      dataset: { price },
      value,
    } = item;
    itemSum = price * value;
    sum += itemSum;
  });
  summary.innerText = sum;
});
