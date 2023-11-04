document,addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.querySelector('.cart__btn-calculate');
    const totalPrice = document.querySelector('.cart__total-price');

    calculateBtn.addEventListener('click', () => {
        const quantities = document.getElementsByClassName('cart__quantity');
        let total = 0;

        Array.from(quantities).forEach(input => {
            const { price } = input.dataset;
            const quantity = parseInt(input.value, 10) || 0;
            total += price * quantity;
        });

        totalPrice.textContent = `${total} PLN`;
    });
});