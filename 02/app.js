const totalPrice = document.querySelector('.cart__total-price')
const inputsList = document.getElementsByClassName('cart__quantity')
const btnCalculate = document.querySelector('.cart__btn-calculate')

btnCalculate.addEventListener('click', e => {
    
    let sum = 0
    Array.from(inputsList).forEach(input => {
        const {dataset, value} = input
        const {price} = dataset
        sum += (price * value)
    });
    
    totalPrice.innerText = sum
})