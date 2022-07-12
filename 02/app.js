const inputsValue = [...document.getElementsByClassName('cart__item')]
const button = document.querySelector('.cart__btn-calculate')
const totalPrice = document.querySelector('.cart__total-price')

const getTotalPrice = () => {
    let totalPriceValue = 0
    inputsValue.forEach( (item) => {
        totalPriceValue += item.lastChild.value * item.lastChild.dataset.price
        totalPrice.innerText = totalPriceValue    
    })
}

button.addEventListener('click', getTotalPrice)


