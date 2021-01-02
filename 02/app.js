const init = () => {
    console.log('init()');
    const buttonEl = document.querySelector('.cart__btn-calculate');
    buttonEl.addEventListener('click', showTotalPrice);
}

const showTotalPrice = () => {
    const totalPrice = calculate();
    const priceLabel = document.querySelector('.cart__total-price');
    console.log(priceLabel);
    priceLabel.innerText = totalPrice;
}

const calculate = () => {
    const itemsList = document.getElementsByClassName('cart__quantity');
    return sumValues(itemsList);
}

const sumValues = (itemsList) => {
    let sumOfRecivables = 0; 
    [...itemsList].forEach((element) => sumOfRecivables += getReceivable(element));
    return sumOfRecivables;
};

const getReceivable = (itemEl) => {
    if(!isPositiveNumber(itemEl.value)) {
        console.error(`${itemEl.parentElement.innerText}: Podana liczba jest mniejsza od zera`);
        return 0;
    }
    return itemEl.dataset.price * itemEl.value;
}

const isPositiveNumber = (value) => {
    return value >= 0;
}

document.addEventListener('DOMContentLoaded', init);
