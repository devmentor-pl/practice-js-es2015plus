const totalPriceEL = document.querySelector('.cart__total-price')
const buttonCalc = document.querySelector('.cart__btn-calculate')
const inputCard = document.getElementsByClassName('cart__quantity')

buttonCalc.addEventListener('click', () => {
    let totalPrice = 0

    Array.from(inputCard).forEach((input) => {
        const price = parseInt(input.dataset.price, 10)
        const volume = parseInt(input.value, 10)
        totalPrice += price * volume
    })
    totalPriceEL.textContent = `${totalPrice} PLN`
})