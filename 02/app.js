document.addEventListener('DOMContentLoaded', init);

const totalPrice = document.querySelector('.cart__total-price');
const btnCalculate = document.querySelector('.cart__btn-calculate');

const init = () => {
    btnCalculate.addEventListener('click', countTotalPrice);
}

const productsNumber = document.getElementsByClassName('cart__quantity');
const countTotalPrice = () => {
    let total = 0;
    [...productsNumber].forEach((item) => {
        const {
            value,
            dataset: {
                price
            }
        } = item;
        if (validateInput(Number(value))) {
            total += value * price;
        }
    })
    totalPrice.innerText = total;
}

const validateInput = (value) => {
    let errors = [];

    if(!Number.isNaN(value) && Number(value) >= 0) {
        errors.push('Incorrect value');
    } 
    if (errors.length > 0) {
        alert('Please enter the correct quantity');
    }
    return errors.length > 0 ? false : true;
}

