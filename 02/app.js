const sumButton = document.querySelector(".cart__btn-calculate");
const totalPrice = document.querySelector(".cart__total-price");
const inputList = document.getElementsByClassName("cart__quantity");

const sumProducts = () => {
	const inputs = [...inputList];

	let totalSum = 0;

	inputs.forEach(input => {
		const {
			dataset: { price },
			value,
		} = input;

		if (!Number.isNaN(value)) {
			totalSum += price * value;
		}
		return totalSum;
	});

	totalPrice.innerText = totalSum;
};

sumButton.addEventListener("click", sumProducts);
