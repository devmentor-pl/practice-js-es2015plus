const inpList = document.getElementsByClassName('cart__quantity')
const totalPrice = document.querySelector('.cart__total-price')
const calculateBtn = document.querySelector('.cart__btn-calculate')

const countBasket = () => {
	const inpListArr = [...inpList]
	let sum = 0

	inpListArr.forEach((item) => {
		const {
			dataset: { price },
			value,
		} = item

		if (isNaN(value) || value < 0) {
			alert(`Błędna ilość w polu: ${item.parentElement.textContent}`)
		} else {
			sum += price * value
		}
	})

	totalPrice.textContent = sum
}

calculateBtn.addEventListener('click', countBasket)
