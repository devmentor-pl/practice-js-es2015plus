'use strict';
const inputEle = document.getElementsByClassName('cart__quantity');
const totalPriceEle = document.querySelector('.cart__total-price');

document.querySelector('.cart__btn-calculate').addEventListener('click', () => {
  calculateTotal();
});

const calculateTotal = () => {
  let total = 0;
  Array.from(inputEle).forEach((input) => {
    const { price } = input.dataset;
    let quantity = parseFloat(input.value);
    if (isNaN(quantity) || quantity < 0) {
      input.value = 0;
      throw console.error('Liczba musi wynosic 0, lub więcej.');
    } else {
      total += price * quantity;
    }
  });
  totalPriceEle.textContent = `${total} `;
};
