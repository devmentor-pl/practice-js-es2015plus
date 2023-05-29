document.addEventListener('DOMContentLoaded', () => {
  console.log('Hey');

  const inputList = document.getElementsByClassName('cart__quantity');
  const btn = document.querySelector('.cart__btn-calculate');

  const totalValue = document.querySelector('.cart__total-price');

  btn.addEventListener('click', () => {
    let price = 0;

    [...inputList].forEach((item) => {
      console.log((price = price + item.dataset.price * item.value));
      console.log(item.dataset.price, item.value);

      totalValue.innerText = price;
    });
  });
});
