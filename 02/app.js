console.log('zad 2')

const cart = document.getElementsByClassName('cart__quantity')
console.log(cart)
const button = document.querySelector('.cart__btn-calculate')
const total = document.querySelector('.cart__total-price')

const newCart = [...cart]
console.log(newCart)

const calculate = (e) => {
    console.log(e)
    let totalPrice = 0
    newCart.forEach(cart => {
        const price = cart.dataset.price
        console.log(price)
        const quantity = cart.value
        console.log(quantity)
        totalPrice += quantity * price
    })
    total.innerText = totalPrice
}

button.addEventListener('click', calculate)













