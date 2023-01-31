const inputs = document.getElementsByClassName('cart__quantity');
const button = document.querySelector('.cart__btn-calculate');
const totalPrice = document.querySelector('.cart__total-price');
const inputsArray = [...inputs];

const mainSum = (sum) => {
    totalPrice.textContent = sum;
}

const finalPrice = (e) => {
    e.preventDefault();

    let sum = 0;

    inputsArray.forEach(input => {
        sum += input.value * input.dataset.price;
    })

    mainSum(sum);

}

button.addEventListener('click', finalPrice);