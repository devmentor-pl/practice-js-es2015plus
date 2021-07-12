const totalPriceEl = document.querySelector('.cart__total-price');
const btn = document.querySelector('.cart__btn-calculate');
const productListEl = [...document.getElementsByClassName('cart__quantity')];
const ulEl = document.querySelector('ul');

const countPrice = () => {
    let totalPrice = 0;
    if (!checkNumbers) {
        productListEl.forEach((item) => {
            totalPrice += item.value * item.dataset.price;
        })
        totalPriceEl.innerHTML = totalPrice;
    }
}

btn.addEventListener('click', countPrice);

const checkNumbers = (e) => {
    errors = [];
    if (Number.isNaN(Number(e.target.value)) || Number(e.target.value) < 0) {
        errors.push('Podano błędnie liczbę produktów');
    }
    if (errors.length > 0) {
        alert(errors);
    }
    return errors.length > 0 ? false : true;
};

ulEl.addEventListener('change', checkNumbers);