const startButton = document.querySelector('.cart__btn-calculate')

startButton.addEventListener('click', function () {
    const cartItems = document.querySelectorAll('.cart__quantity')
    let sum = 0
    cartItems.forEach(item => {
        const { value, dataset: data,} = item
        const itemValue = value * data.price
        return sum += itemValue
    })
    const cartTotalPrice = document.querySelector('.cart__total-price')
    cartTotalPrice.innerText = sum
})