const btnElCountTotal = document.querySelector(".cart__btn-calculate");
const cartTotalPriceEl = document.querySelector(".cart__total-price");

btnElCountTotal.addEventListener("click", () => {
  let sum = 0;
  const inputElements = document.getElementsByClassName("cart__quantity");
  [...inputElements].forEach(({ value, dataset: { price } }) => {
    const isValueValid = Number(value) >= 0;
    if (!isValueValid) alert("number should be greater than 0");

    sum += Number(value) * Number(price);
  });

  appendSum(sum, cartTotalPriceEl);
});

function appendSum(sum, destinationEl) {
  const isNumber = typeof sum === "number" && !isNaN(sum);
  if (!isNumber) throw new Error("given sum is not a valid number");

  if (destinationEl) {
    destinationEl.innerText = sum;
  }
}
