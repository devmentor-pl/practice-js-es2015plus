document.addEventListener('DOMContentLoaded', () => {
    const btnCalculate = document.querySelector('.cart__btn-calculate') 
    const inputList = document.getElementsByClassName('cart__quantity') 
    const totalPrice = document.querySelector('.cart__total-price') 

    if(btnCalculate && totalPrice) {
        btnCalculate.addEventListener('click', () => {
            let sum = 0

            Array.from(inputList).forEach(input => {
                const {dataset: {price}, value} = input
                
                sum += price * value
            })
            
            totalPrice.innerText = sum
        }) 
    }  
})