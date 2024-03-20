const inputElements = document.getElementsByClassName('cart__quantity');
const submitBtn = document.getElementsByClassName('cart__btn-calculate');
let totalSum = 0;

function isNumber(a,b) {
    if(isNaN(a) || isNaN(b)) { return 0; } 
    const sum = parseFloat(a) * parseFloat(b); 
    return sum;
}

[...inputElements].forEach(inputEl => {

    inputEl.addEventListener('input', () => {
        const { value: ElQuantity, dataset: { price: ElPrice } } = inputEl;
        totalSum = [...inputElements].reduce((sum, el) => sum + isNumber(el.value, el.dataset.price), 0);
    });
});

[ ...submitBtn].forEach(buttonEl => {
    buttonEl.addEventListener('click', () => {
        const cartTotalPriceEls = document.getElementsByClassName('cart__total-price');

        [ ...cartTotalPriceEls].forEach(cartTotalPriceEl => {
            cartTotalPriceEl.textContent = totalSum.toString();
        });
    });
});

