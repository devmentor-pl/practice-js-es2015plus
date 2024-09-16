document.addEventListener('DOMContentLoaded', () => {

    const inputList = document.getElementsByClassName('cart__quantity')
    const btnEl = document.querySelector('.cart__btn-calculate')
    const totalEl = document.querySelector('.cart__total-price')

    if (btnEl && totalEl) {
        btnEl.addEventListener('click', () => {
            let total = 0;
            [...inputList].forEach((item) => {
                const {dataset: {price}, value} = item
                total += price * value
            })

            totalEl.innerText = total
        })
    }
})