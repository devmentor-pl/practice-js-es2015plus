const inputEl = document.getElementsByClassName('cart__quantity')
const arrInput = Array.from(inputEl); 
console.log(arrInput);

const totalPrice = document.querySelector('.cart__total-price');
console.log(totalPrice)

const buttonEl = document.querySelector('.cart__btn-calculate');
console.log(buttonEl);

buttonEl.addEventListener('click', () => {
    let sum = 0;
    arrInput.forEach(item => {
        mainSum = inputEl.value * inputEl.dataset.price
    });   
    totalPrice.innerText = mainSum
})
















