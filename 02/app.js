document.addEventListener('DOMContentLoaded', () => {

    const totalPriceEl = document.querySelector('.cart__total-price');
    const inputsList = document.getElementsByClassName('cart__quantity');
    const calculateBtn = document.querySelector('.cart__btn-calculate');

    if (calculateBtn && totalPriceEl) {

        calculateBtn.addEventListener('click', () => {
            let totalSum = 0;

            Array.from(inputsList).forEach(input => {
                const { dataset: { price }, value } = input;
                totalSum += price * value;
            });
            totalPriceEl.innerText = totalSum;
        });
    };
});