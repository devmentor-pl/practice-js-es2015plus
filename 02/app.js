const inputElements = document.getElementsByClassName("cart__quantity")
const inputArray = Array.from(inputElements)
const buttonElement = document.querySelector(".cart__btn-calculate")
const priceElement = document.querySelector(".cart__total-price")


buttonElement.addEventListener("click", addAmountToObject)
function addAmountToObject() {
    const amountObject = []
    const pricesArray = []
    inputArray.forEach((element) => {
        const amount = element.value
        amountObject.push(amount)
        const price = element.getAttribute("data-price")
        const totalPrice = amount * Number(price)
        pricesArray.push(totalPrice)

    })
    const sumPrices = ([a, b, c, d]) => {
        return a + b + c + d
    }
    const sum = sumPrices(pricesArray)
    priceElement.innerText = sum

}




