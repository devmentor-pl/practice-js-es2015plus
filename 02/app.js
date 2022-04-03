const totalPrice = document.querySelector('.cart__total-price');
const inputsList = [...document.getElementsByClassName('cart__quantity')];
const button = document.querySelector('.cart__btn-calculate');

const totalPriceArr = [];

const countValue = () => {
    totalPriceArr.length = 0;
    inputsList.forEach(element => {
        const valueItem = element.dataset.price * element.value;
        totalPriceArr.push(valueItem);
        totalPrice.textContent = calcSum(...totalPriceArr);
    });
}

const calcSum = (a, b, c, d) => {
    return a + b + c + d;
}

button.addEventListener('click', countValue);
