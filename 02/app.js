const inputs = document.getElementsByClassName('cart__quantity');
const button = document.querySelector('.cart__btn-calculate');
const totalPrice = document.querySelector('.cart__total-price');
const inputsArray = [...inputs];

const printSum = (sum) => {
    totalPrice.textContent = '';
    totalPrice.textContent = sum;
}

const submitPrices = (e) => {
    e.preventDefault();
    let sum = 0;
    inputsArray.forEach((input) => {
        if (parseFloat(input.value) >= 0) {
            sum += parseFloat(input.value);
        }
    })
    printSum(sum);
}

button.addEventListener('click', submitPrices);