const totalPrice = document.querySelector(".cart__total-price");
const inputs = Array.from(document.getElementsByClassName("cart__quantity"));
const btnCalculatePrice = document.querySelector(".cart__btn-calculate");

btnCalculatePrice.addEventListener("click", () => {
  const totals = [];
  inputs.forEach((input) => {
    const { price } = input.dataset;
    const qt = input.value;
    const sum = +price * +qt;
    totals.push(sum);
  });
  const total = totals.reduce((a, b) => a + b, 0);
  totalPrice.innerText = total;
});

/*
btnCalculatePrice.addEventListener("click", calculatePrice);

function calculatePrice() {
  const totals = [];
  inputs.forEach((input) => {
    const { price } = input.dataset;
    const qt = input.value;
    const sum = +price * +qt;
    totals.push(sum);
  });
  const total = totals.reduce((a, b) => a + b, 0);
  displayPrice(total);
}

function displayPrice(total) {
  totalPrice.innerText = total;
}
*/
