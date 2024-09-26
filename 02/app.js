
const calculateButton = document.querySelector('.cart__btn-calculate')
const inputsArr = [...document.getElementsByClassName('cart__quantity')] 
const totalPriceSpan = document.querySelector('.cart__total-price')

calculateButton.addEventListener('click', () => {
     itemPrice = 0

     let itemsPricesArr = []
     inputsArr.forEach((item) => {
        const {
                dataset: {price},
                value: quantity
            } = item

        itemPrice = parseFloat(price) * parseFloat(quantity)

        itemsPricesArr.push(itemPrice)   
        // console.log(itemPrice)     
     })
    const totalPrice = itemsPricesArr.reduce( (a,b) => {
       return a+b
    })
// console.log(totalPrice)
    if(totalPrice === 0) {
        alert('Uzupełnij zamówienie')
    } else {
         totalPriceSpan.innerText = totalPrice
    }
})
