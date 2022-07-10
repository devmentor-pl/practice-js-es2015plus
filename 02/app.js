document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM");
	const inputList = document.getElementsByClassName("cart__quantity");
	const btnEl = document.querySelector(".cart__btn-calculate");
	const totalEl = document.querySelector(".cart__total-price");
	if (btnEl && totalEl) {
		btnEl.addEventListener("click", () => {
			let price = 0;
			[...inputList].forEach((item) => {
				const { dataset, value } = item;
				price += dataset.price * value;
			});
			totalEl.innerText = price;
		});
	}
});
