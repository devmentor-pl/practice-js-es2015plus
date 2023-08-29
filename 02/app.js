document.addEventListener("DOMContentLoaded", init);

function init() {
  let prices = [];
  const inputAmountElements = [
    ...document.getElementsByClassName("cart__quantity"),
  ];
  const calculateButtonElement = document.querySelector(".cart__btn-calculate");
  const totalPriceElement = document.querySelector(".cart__total-price");

  const calculate = () => {
    const sum = prices.reduce((acc, price) => (acc += price), 0);
    totalPriceElement.innerText = sum;

    inputAmountElements.forEach((input) => {
      input.value = "";
    });
    prices = [];
  };
  const handleChange = (e) => {
    const { value } = e.target;
    const { price } = e.target.dataset;
    const sum = Number(value) * Number(price);

    prices.push(Number(sum));
  };
  inputAmountElements.forEach((input) => {
    input.addEventListener("change", handleChange);
  });
  calculateButtonElement.addEventListener("click", calculate);
}
