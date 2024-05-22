document.addEventListener("DOMContentLoaded", () => {
	console.log("Cos")

	const inputsGroup = document.getElementsByClassName("cart__quantity")
    const inputsGroupArr = Array.from(inputsGroup)
    
	const countBtn = document.querySelector(".cart__btn-calculate")
    const totalPrice = document.querySelector('.cart__total-price')

	const btnClickFn = () => {
		let priceSum = 0
        inputsGroupArr.forEach((el) => {

            const { dataset } = el
            const { value } = el 
            priceSum = priceSum + (dataset.price * value)
        })
        
        totalPrice.innerText = priceSum + ' '

	}

	countBtn.addEventListener("click", btnClickFn)
})
