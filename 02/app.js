

(function() { 

'use strict'

const calcSumBtn = document.querySelector('.cart__btn-calculate')
const cartQuantityInput = document.getElementsByClassName('cart__quantity')
const cartTotalPriceSpan = document.querySelector('.cart__total-price')


calcSumBtn.addEventListener('click', () => {
    const inputsElArray = Array.from(cartQuantityInput)
    let totalSum = 0
    
    inputsElArray.forEach(inputEl => {
        const inputQuantityValue = inputEl.value
        const { price } = inputEl.dataset // czemu mogłem w tej zmiennej zastosować destrukturyzacje, a w zmiennej [inputQuantityValue] już nie??

        const quantity = Number(inputQuantityValue)
        const itemPrice = Number(price)

        if (quantity > 0) {
            totalSum += quantity * itemPrice
        }
        
    })
    cartTotalPriceSpan.textContent = totalSum
})
})()