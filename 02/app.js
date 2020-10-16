const calculateButton = document.querySelector(".cart__btn-calculate");

if (calculateButton) {
  calculateButton.addEventListener("click", (e) => {
    e.preventDefault();

    const inputsListElem = document.getElementsByClassName("cart__quantity");
    const totalPriceElem = document.querySelector(".cart__total-price");
    let totalPrice = 0;

    Array.from(inputsListElem).forEach((elem) => {
      const { value } = elem;
      const price = Number(value);

      if (!Number.isNaN(price)) {
        totalPrice += price;
      }
    });

    if (totalPriceElem) {
      totalPriceElem.innerHTML = totalPrice;
    }
  });
}
