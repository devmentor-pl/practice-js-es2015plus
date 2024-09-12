const inputs = document.getElementsByClassName("cart__quantity");
const totalPrice = document.querySelector(".cart__total-price");
const calcBtn = document.querySelector(".cart__btn-calculate");

let basket = [];

const calcEachElement = (a, b) => {
	return a * b;
};

const checkValue = () => {
	Array.from(inputs).forEach((e) => {
		const eachElement = calcEachElement(
			Number(e.value),
			Number(e.dataset.price)
		);
		basket.push(eachElement);
		e.value = "";
	});
	const finalPrice = basket.reduce((a, b) => a + b, 0);
	totalPrice.textContent = finalPrice;
	basket = [];
};

calcBtn.addEventListener("click", checkValue);
