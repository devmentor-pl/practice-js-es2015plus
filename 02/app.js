document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM')

    const listOfInputs = [...document.getElementsByClassName('cart__quantity')]
    const button = document.querySelector('.cart__btn-calculate')
    const finalPriceSpan = document.querySelector('.cart__total-price')

    button.addEventListener('click', () => {
        let totalPrice = 0;
        listOfInputs.forEach(element => {
            const {
                dataset: {
                    price
                },
                value
            } = element
            totalPrice += (value * price)
        })

        console.log(totalPrice)
        finalPriceSpan.textContent = totalPrice;
    })
})