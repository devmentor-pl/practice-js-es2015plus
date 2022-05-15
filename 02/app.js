console.log('zad 2')

const cart = document.getElementsByClassName('cart__quantity')
const button = document.querySelector('.cart__btn-calculate')
const total = document.querySelector('.cart__total-price')

const newCart = [...cart]

const calculate = () => {
    let totalPrice = 0
    newCart.forEach(cart => {
        const price = cart.dataset.price
        const quantity = cart.value
        totalPrice += quantity * price
    })
    total.innerText = totalPrice
}

button.addEventListener('click', calculate)













