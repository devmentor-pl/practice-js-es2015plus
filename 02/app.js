document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM");

  const inputList = document.getElementsByClassName("cart__quantity");
  const btnEl = document.querySelector(".cart__btn-calculate");
  const totalEl = document.querySelector(".cart__total-price");

  if (btnEl && totalEl) {
    btnEl.addEventListener("click", () => {
      let sum = 0;

      [...inputList].forEach((item) => {
        const {
          dataset: { price },
          value,
        } = item;

        sum += price * value;
      });

      totalEl.innerText = sum;
    });
  }
});
