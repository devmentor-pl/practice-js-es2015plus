window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.cart__btn-calculate');
    btn.addEventListener('click', count);
});

const count = () => {
    const inputs = [...document.getElementsByClassName('cart__quantity')];
    let totalCost = 0;
    inputs.forEach(({value: amount, dataset: {price: price}}) => {
        const value = amount * price;
        totalValue += value;
    })
    displayTotalCost(totalValue)
}

const displayTotalCost = totalValue => {
    const totalPrice = document.querySelector('.cart__total-price');
    totalPrice.textContent = totalCost;
}


