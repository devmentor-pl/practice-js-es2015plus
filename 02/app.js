const inputsList = document.getElementsByClassName('cart__quantity');
const totalPrice = document.querySelector('.cart__total-price');
const calculateBtn = document.querySelector('.cart__btn-calculate');

const calculate = () => {
	const inputsListArr = [...inputsList];
	let sum = 0;
	inputsListArr.forEach((item) => {
		const {
			dataset: { price },
			value,
		} = item;

		if (value === '') {
			alert('Proszę podać ilość.');
		} else if (isNaN(value)) {
			alert('Podana wartość musi być liczbą.');
		} else {
			sum += value * price;
		}
	});
	totalPrice.textContent = sum;
};

calculateBtn.addEventListener('click', calculate);
