document.addEventListener("DOMContentLoaded", init);

function init() {
  let prices = [];
  const cartQuantityElements = [
    ...document.getElementsByClassName("cart__quantity"),
  ];
  const calculateButtonElement = document.querySelector(".cart__btn-calculate");
  const totalPriceElement = document.querySelector(".cart__total-price");

  const calculateAndDisplayTotalPrice = (numbersArray = []) => {
    const sum = numbersArray.reduce((acc, price) => (acc += price), 0);
    totalPriceElement.innerText = sum;

    cartQuantityElements.forEach((cartItem) => {
      cartItem.value = "";
    });
    prices = [];
  };
  const handleInput = (e) => {
    const { value } = e.target;
    const { price } = e.target.dataset;
    const sum = Number(value) * Number(price);

    prices.push(Number(sum));
    console.log(prices);
  };
  cartQuantityElements.forEach((input) => {
    input.addEventListener("input", handleInput);
  });
  calculateButtonElement.addEventListener("click", (e) =>
    calculateAndDisplayTotalPrice(prices)
  );
}
