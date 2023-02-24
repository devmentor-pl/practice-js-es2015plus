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

// Zwróć uwagę, że w elemencie `<input>` jest wpisywana ilość, a w `dataset` jest zamieszczona cena.

// Po kliknięciu w przycisk `.cart__btn-calculate` należy obliczyć łaczną cenę zakupionych produktów i wstawić ją do `.cart__total-price`.

// Zadanie należy wykonać zgodnie z poniższymi wytycznymi:
// * wszędzie, gdzie trzeba użyć funkcji, użyj funkcji strzałkowej,
// * elementy `<input>` wyszukaj za pomocą `document.getElementsByClassName` i wykorzystaj `forEach` do iteracji,
// * w momencie pobierania danych z obiektów używaj destrukturyzacji.
