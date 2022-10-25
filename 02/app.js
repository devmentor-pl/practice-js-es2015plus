const total = document.querySelector('.cart__total-price')
const button = document.querySelector('.cart__btn-calculate')
const inputs = document.getElementsByClassName('cart__quantity')
const inputsArr = Array.from(inputs)
 
console.log(inputsArr)

button.addEventListener('click', (e)=> {
    let sum = Number(0)
    inputsArr.forEach(el => {
        const price =  Number(el.dataset.price)
        const quantity =  Number(el.value)
        console.log(el.value, el.dataset.price)
        sum += price * quantity
    })
    total.innerText = sum
})