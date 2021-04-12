document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM');

    const input = document.querySelector('input');
    console.log(input.dataset.id);

    const btn = document.querySelector('button');
    const inputs = document.getElementsByClassName('cart__quantity');
    const total = document.querySelector('.cart__total-price');
    console.log(btn, inputs, total);

    const sum = () => {
        let totalPrice = 0;
        [...inputs].forEach(function (inp) {
            totalPrice += inp.value * input.dataset.price
        });
        total.innerText = totalPrice;
    }

    btn.addEventListener('click', sum);

});