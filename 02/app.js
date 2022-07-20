const inputs = document.getElementsByClassName("cart__quantity");
const totalPrice = document.querySelector(".cart__total-price");
const calcBtn = document.querySelector(".cart__btn-calculate");

const basket = [];

const calcEachElement = (a, b) => {
	return a * b;
};
const calcSum = (a, b) => {
	return a + b;
};

const checkValue = () => {
	Array.from(inputs).forEach((e) => {
		const eachElement = calcEachElement(
			Number(e.value),
			Number(e.dataset.price)
		);
		basket.push(eachElement);
	});
	const finalPrice = calcSum(...basket);
	totalPrice.textContent = finalPrice;
};

calcBtn.addEventListener("click", checkValue);
