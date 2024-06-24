const totalPriceEl = document.querySelector('.cart__total-price');
const userInputsList = document.getElementsByClassName('cart__quantity');
const calcBtn = document.querySelector('.cart__btn-calculate');


calcBtn.addEventListener('click', () =>{

    const inputsArray = Array.from(userInputsList)
    let totalPrice = 0;

    inputsArray.forEach(input => {
        const { value } = input;
        const { price } = input.dataset;

        totalPrice += Number(value) * Number(price);
    });

    totalPriceEl.textContent = totalPrice.toFixed(2);
})
