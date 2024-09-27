document.addEventListener('DOMContentLoaded', () => {

    const inputList = document.getElementsByClassName('cart__quantity');
    const btn = document.querySelector('.cart__btn-calculate');
    const totalPriceEl = document.querySelector('.cart__total-price');

    btn.addEventListener('click', () => {
        let totalPrice = 0;
        [...inputList].forEach((el) => {
            const { dataset: { price }, value } = el;
            totalPrice += price * value;
        });
        totalPriceEl.innerText = totalPrice;
    });
});