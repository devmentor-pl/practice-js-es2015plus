document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.querySelector('.cart__btn-calculate');
    const totalPriceEl = document.querySelector('.cart__total-price');

    const calculateCartTotal = () => {
        const quantityInputs = document.getElementsByClassName('cart__quantity');
        let total = 0;
        [...quantityInputs].forEach(input => {
            const { price } = input.dataset;
            const quantity = Number(input.value) || 0;
            total += quantity * Number(price);
        });
        return total;
    };

    calculateBtn && calculateBtn.addEventListener('click', () => {
        const total = calculateCartTotal();
        if (totalPriceEl) totalPriceEl.textContent = total;
    });
});