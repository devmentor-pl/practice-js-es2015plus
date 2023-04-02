console.log("zadanie 2");

const totalPrice = document.querySelector(".cart__total-price");
const calculateBtn = document.querySelector(".cart__btn-calculate");
const inputElements = document.getElementsByClassName("cart__quantity");
const inputArray = [...inputElements];
const items = [];

calculateBtn.addEventListener("click", (e) => {
  inputArray.forEach((item) => {
    const { dataset, value } = item;
    const { price } = dataset;
    sum = price * value;
    items.push(sum);
  });

  const showResult = items.reduce((total, amount) => total + amount);
  totalPrice.textContent = showResult;
  items.length = 0;
});
