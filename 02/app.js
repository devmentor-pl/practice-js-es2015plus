// DZIAŁA
const cart = document.querySelector('.cart');
const inputEl = Array.from(cart.getElementsByClassName('cart__quantity')); // array

const totalPrice = cart.querySelector('.cart__total-price');

const button = cart.querySelector('button');

const handleClick = event => {
    let sum = 0;
    inputEl.forEach(function(input) {
        const { value, dataset } = input;
        const { price } = dataset;

        sum += value * price;
    })
    totalPrice.innerText = sum;
}

button.addEventListener('click', handleClick)
