const cartTotalPrice = document.querySelector('.cart__total-price')
const inputList = document.getElementsByClassName('cart__quantity')
const cartBtnCalculate = document.querySelector('.cart__btn-calculate')

const calcuateSum = () => {
	let totalSum = 0
	Object.entries(inputList).forEach(entry => {
		const [key, value] = entry
		const price = value.dataset.price
		const numOfItems = value.value
		const sum = price * numOfItems
		totalSum += sum
		cartTotalPrice.innerText = totalSum
	})
}

cartBtnCalculate.addEventListener('click', calcuateSum)
