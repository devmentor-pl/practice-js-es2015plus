const inputs = document.getElementsByClassName('cart__quantity')
const inputsArray = [...inputs]
const calculateBtn = document.querySelector('.cart__btn-calculate')
let totalOrderValue = 0

const calculateTotal = () => {
    inputsArray.forEach(input => { 
        const itemQuantity = parseFloat(input.value.trim()) || 0
        const ItemPrice = parseFloat(input.dataset.price)
        const itemTotalValue = itemQuantity * ItemPrice
        totalOrderValue += itemTotalValue

    })
    console.log(totalOrderValue)
    const totalOrderValueElement = document.querySelector(".cart__total-price")
    totalOrderValueElement.innerText = totalOrderValue
}

calculateBtn.addEventListener('click', calculateTotal )

