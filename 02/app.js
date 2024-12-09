document.addEventListener("DOMContentLoaded", () => {
  console.log("Witaj xiom");

  const inputList = document.getElementsByClassName("cart__quantity");
  const buttonEl = document.querySelector(".cart__btn-calculate");
  const cardPrice = document.querySelector(".cart__total-price");

  buttonEl.addEventListener("click", () => {
    let priceItems = 0;

    [...inputList].forEach((element) => {
      const {
        dataset: { price },
        value,
      } = element;

      priceItems += price * value;
    });

    cardPrice.textContent = priceItems;
  });
});
