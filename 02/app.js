document.addEventListener('DOMContentLoaded', () => {
    const btnCalculate = document.querySelector('.cart__btn-calculate')   

    btnCalculate.addEventListener('click', () => {
        const inputList = document.getElementsByClassName('cart__quantity')

        let sum = 0

        Array.from(inputList).forEach(input => {
            const {dataset: {price}, value} = input
            
            sum += price * value
        })

        const totalPrice = document.querySelector('.cart__total-price')
        totalPrice.innerText = sum
    })   
})