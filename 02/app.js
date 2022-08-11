const products = document.getElementsByClassName('cart__quantity')
const summaryButton = document.querySelector('button')
const summary = document.querySelector('.cart__total-price');
const elements = [...products]

summaryButton.addEventListener('click', () => {
    let total = 0;
    elements.forEach((item) => {

        const {dataset: {price}, value} = item;

        total += price * value;
    })

    summary.innerText = total;
});