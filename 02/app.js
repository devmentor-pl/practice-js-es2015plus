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

const validateInput = (item) => {
    const quantity = parseInt(item.quantity)
    const price = parseInt(item.price)

    if(!Number.isNaN(quantity) && quantity >= 0) {
        return quantity * price;
    } else {
        alert('Please enter the correct quantity');
    }
}