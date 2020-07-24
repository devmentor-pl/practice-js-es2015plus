// **********************
// USE DESTRUCTURIZATION
// USE ARROW FUNCTIONS
// USE ARROW .getElementsByClassName();
// **********************

// compute total function
function computeTotal() {
  // get list inputs
  const cart = Array.from(document.getElementsByClassName('cart__item'));

  // cart sum
  let sum = 0;

  // compute the amount
  cart.forEach(el => {
    sum += parseInt(el.querySelector('input').value);
  });

  // update the TOTAL cart field with a sum
  let total = document.getElementsByClassName('cart__total-price')[0];
  total.innerText = sum;
}


// get button and add listener
const click = document.querySelector('.cart__btn-calculate');
click.addEventListener('click', computeTotal);
