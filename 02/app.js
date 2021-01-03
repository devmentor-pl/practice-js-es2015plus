const init = () => {
    console.log('init()');
    const buttonEl = document.querySelector('.cart__btn-calculate');
    buttonEl.addEventListener('click', showTotalPrice);
}

const showTotalPrice = () => {
    const totalPrice = calculate();
    const priceLabel = document.querySelector('.cart__total-price');
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
    const {
        value,
        parentElement,
        dataset,    
    } = itemEl;
    const {innerText} = parentElement;
    const {price} = dataset; 
    if(!isPositiveNumber(value)) {
        console.error(`${innerText}: Podana liczba jest mniejsza od zera`);
        return 0;
    }
    return price * value;
}

const isPositiveNumber = (value) => {
    return value >= 0;
}

document.addEventListener('DOMContentLoaded', init);
