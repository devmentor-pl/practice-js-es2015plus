const inputEl = [...document.getElementsByClassName('cart__quantity')]
const buttonEl = document.querySelector('.cart__btn-calculate')
const totalPriceEl = document.querySelector('.cart__total-price')

buttonEl.addEventListener('click', e => {
    e.preventDefault()
    let totalPrice = 0
    inputEl.forEach(element => {
        const {value: quantity, dataset: {price: unitPrice}} = element
        
        totalPrice += quantity * unitPrice
    })
    totalPriceEl.innerText = totalPrice
})
