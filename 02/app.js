const numberValidation = (itemQuantity) => {
	const ticketsValidation = /^\d+$/g.test(itemQuantity);
	if (!ticketsValidation) {
		alert('Enter integer values as orders values.');
		throw Error('Invalid type of order values.');
	}
};

const totalOrder = (e) => {
	e.preventDefault();
	let totalPrice = 0;
	const stuffList = document.getElementsByClassName('cart__quantity');
	[...stuffList].forEach((item) => {
		const itemPrice = item.getAttribute('data-price');
		const itemQuantity = item.value;
		if (numberValidation(itemQuantity)) {
		}
		totalPrice += itemPrice * itemQuantity;
	});
	totalPay.innerText = `${totalPrice}`;
};

const calculateBtn = document.querySelector('.cart__btn-calculate');
const totalPay = document.querySelector('.cart__total-price');
calculateBtn.addEventListener('click', totalOrder);
