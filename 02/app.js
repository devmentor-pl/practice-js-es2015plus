document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM')

    const inputList = document.getElementsByClassName('cart__quantity');
    const btnEl = document.querySelector('.cart__btn-calculate');
    const totalPrice = document.querySelector('.cart__total-price');

    if (btnEl && totalPrice) {
        btnEl.addEventListener('click', () => {
            let total = 0;
            [...inputList].forEach(({ dataset: { price }, value }) => {
                total += price * value;
                totalPrice.textContent = total;
            })
        })
    }
})
