const countTotalPrice = (array) => {
    let sum = 0

    array.forEach(({ value: quantity, dataset: {price}}) => {
        // const { value: quantity, dataset: {price}} = input
      
        if (Number(quantity) < 0 || isNaN(Number(quantity))) {
            alert('Niepoprawna ilość w polu: ' + input.parentElement.textContent)

        } else { sum += quantity * price }
    })
    return sum
}

const addTotalPriceToDOM = price => {
    const cart = document.querySelector('.cart__total-price')

    if (cart) {
        cart.textContent = price
    }
}

const handleCalculateButton = e => {
    const inputElements = document.getElementsByClassName('cart__quantity')

    const inputElementsArray = [...inputElements]

    const totalPrice = countTotalPrice(inputElementsArray)

    addTotalPriceToDOM(totalPrice)
}

const calculateButton = document.querySelector('.cart__btn-calculate')

if (calculateButton) {
    calculateButton.addEventListener('click', handleCalculateButton)
}

