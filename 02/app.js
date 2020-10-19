const calculateButton = document.querySelector(".cart__btn-calculate");

if (calculateButton) {
  calculateButton.addEventListener("click", (e) => {
    e.preventDefault();

    const inputsListElem = document.getElementsByClassName("cart__quantity");
    const totalPriceElem = document.querySelector(".cart__total-price");
    let totalPrice = 0;

    Array.from(inputsListElem).forEach(({ value, dataset: { price } }) => {
      const quantity = Number(value);

      if (!Number.isNaN(quantity)) {
        totalPrice += price * quantity;
      }
    });

    if (totalPriceElem) {
      totalPriceElem.innerHTML = totalPrice;
    }
  });
}
