const cartQuantityArr  = [...document.getElementsByClassName('cart__quantity')]
const buttonCalc = document.querySelector('.cart__btn-calculate')
const totalPrice = document.querySelector('.cart__total-price')


const calculate = () => {
    let total = 0  

    cartQuantityArr.forEach( item => {
        const {dataset: {price}, value }= item
        
        total = total + price*value
  
    })
    
    totalPrice.textContent = total       
}

buttonCalc.addEventListener('click', calculate)



