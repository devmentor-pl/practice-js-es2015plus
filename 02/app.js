const inputEl = document.getElementsByClassName('cart__quantity');
let calcBtn = document.querySelector('.cart__btn-calculate');
const totalPrice = document.querySelector('.cart__total-price');

const inputElements = [...inputEl];

const finalPrice = () => {
	let totalValueProducts = [];
	inputElements.forEach((item) => {
		// const price = item.dataset.price;
		// const numberOfProduct = item.value;
		const {dataset: {price}, value} = item;

		let priceOfProduct = price * value;
		totalValueProducts.push(priceOfProduct);
	});

	const addPrices = (total, num) => {
		return total + num;
	};

	totalPrice.innerText = totalValueProducts.reduce(addPrices);
};

calcBtn.addEventListener('click', finalPrice);
