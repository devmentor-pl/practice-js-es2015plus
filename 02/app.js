
const inputs = document.getElementsByClassName('cart__quantity');
const calculateButton = document.querySelector('.cart__btn-calculate');
const totalPriceEl = document.querySelector('.cart__total-price');

calculateButton.addEventListener('click', () => {
    let totalValue = 0;
    const inputsArray = [...inputs];  // stworzy nam tablice, która będzie w stanie używać forEach

    inputsArray.forEach(input => totalValue += input.dataset.price * input.value)

    totalPriceEl.innerText = totalValue;
});


