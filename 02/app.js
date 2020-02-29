const inputItems = [...document.getElementsByClassName('cart__quantity')];
const calculateBtn = document.querySelector('button');
const totalPrice = document.querySelector('.cart__total-price');
let sum = 0;

calculateBtn.addEventListener('click', calcPrice);

function calcPrice() {
  let sum = 0;
  inputItems.forEach(element => {
    sum+=element.value*element.dataset.price;
  });
  totalPrice.textContent = sum;
}


