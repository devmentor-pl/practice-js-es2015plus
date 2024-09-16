const totalPrice = document.querySelector('.cart__total-price')
const inputs = Array.from(document.getElementsByClassName('cart__quantity'))
const btnCalculatePrice = document.querySelector('.cart__btn-calculate')

btnCalculatePrice.addEventListener('click', () => {
	const totals = []
	inputs.forEach(input => {
		const {
			value,
			dataset: { price },
		} = input
		const sum = +price * +value
		totals.push(sum)
	})
	const total = totals.reduce((a, b) => a + b, 0)
	totalPrice.innerText = total
})
