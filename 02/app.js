const btn = document.querySelector('.cart__btn-calculate');
    btn.addEventListener('click', () => {
    const allInputs = [...document.getElementsByClassName('cart__quantity')];
    const span = document.querySelector('.cart__total-price');
    let totalPrice = 0;
    allInputs.forEach((el) => {
        const { value, dataset: { price } } = el;
        return totalPrice += value * price;
    });
    span.textContent = totalPrice;
});