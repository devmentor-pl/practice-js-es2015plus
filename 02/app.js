document.addEventListener('DOMContentLoaded', init);

function init() {
    const totalPriceEl = document.querySelector('.cart__total-price');
    const btnCalculate = document.querySelector('.cart__btn-calculate');
    const inputs = document.getElementsByClassName('cart__quantity');

    btnCalculate.addEventListener('click', () => {
        let sum = 0;
        [...inputs].forEach(el => {
                const { dataset: { price }, value } = el;
                sum += price * value;
            });
        totalPriceEl.innerText = sum;
    });
}