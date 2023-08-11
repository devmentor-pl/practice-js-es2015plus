document.addEventListener('DOMContentLoaded', () => {
	const inputElements = document.getElementsByClassName('cart__quantity');
	const btn = document.querySelector('.cart__btn-calculate');
	const spanPrice = document.querySelector('.cart__total-price');

	const countPrice = () => {
		const inputElementsArr = [...inputElements];
		const pricesArr = [];

		inputElements.forEach((input) => {
			const oneQuantityPrice = input.dataset.price;
			const value = input.value;
			const price = oneQuantityPrice * value;
			pricesArr.push(price);
		});

		const totalPrice = pricesArr.reduce((acc, curr) => acc + curr, 0);
		spanPrice.textContent = totalPrice;
	};

	if (btn) {
		btn.addEventListener('click', countPrice);
	}
});
