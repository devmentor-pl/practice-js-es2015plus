const totalPriceEl = document.querySelector('.cart__total-price');
const btn = document.querySelector('.cart__btn-calculate');
const productListEl = [...document.getElementsByClassName('cart__quantity')];

const init = () => {
    btn.addEventListener('click', countPrice);
}

const countPrice = () => {
    let totalPrice = 0;
    productListEl.forEach((item) => {
        const {
            value,
            dataset: {
                price
            }
        } = item;
        if (checkNumbers(Number(value))) {
            totalPrice += value * price;
        }
    })
    totalPriceEl.innerHTML = totalPrice;
}

const checkNumbers = (num) => {
    errors = [];
    if (Number.isNaN(num) || Number(num) < 0) {
        errors.push('Podano błędnie liczbę produktów');
    }
    if (errors.length > 0) {
        alert(errors);
    }
    return errors.length > 0 ? false : true;
};

document.addEventListener('DOMContentLoaded', init);