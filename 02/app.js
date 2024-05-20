const calculateButton = document.querySelector('.cart__btn-calculate');

const calculateSum = () => {
  const cartElements = Array.from(document.getElementsByClassName('cart__quantity'));
  const summary = document.querySelector('.cart__total-price');
  let totalPrice = 0;

  cartElements.forEach((element) => {
    const { price } = element.dataset;
    let { value } = element;
    if(value === '' || value === null) {
      value = 0;
    }
    totalPrice += parseFloat(price) * parseFloat(value);
  });
  summary.innerText = totalPrice.toFixed(2);
}

calculateButton.addEventListener('click', calculateSum);