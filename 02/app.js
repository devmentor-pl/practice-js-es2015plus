document.addEventListener('DOMContentLoaded', () => {
  const inputsList = [...document.getElementsByClassName('cart__quantity')];
  const totalPriceEl = document.querySelector('.cart__total-price');
  const btnSubmit = document.querySelector('.cart__btn-calculate');

  const calculatePrice = () => {
    let totalPrice = 0;
    inputsList.forEach((input) => {
      //   console.log(input.dataset.price);
      const {
        value,
        dataset: {price},
      } = input;
      totalPrice += parseInt(value) * parseInt(price);
    });

    totalPriceEl.innerText = totalPrice;
  };
  btnSubmit.addEventListener('click', calculatePrice);
});
