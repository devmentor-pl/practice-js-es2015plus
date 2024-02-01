// Funkcja pomocnicza do sprawdzenia czy wartości są liczbami i zsumowaniu ich
const checkNumbers = (a, b) => {
    if (a !== '' && b !== '' && !isNaN(parseFloat(a)) && !isNaN(parseFloat(b))) {
        const sum = parseFloat(a) * parseFloat(b);
        console.log(sum);
        return sum;
    } else {
        return 0; // Ustaw sumę na 0, jeśli wartość jest pusta lub nie jest liczbą
    }
}

const inputElements = document.getElementsByClassName('cart__quantity');

let totalSum = 0;
// Zamien inputElements na tablice przy pomocy operatora rozproszenia i wykorzystaj forEach do iteracji
[...inputElements].forEach(inputEl => {
    inputEl.addEventListener('input', () => {
        // Pobranie danych przy pomocy destrukturyzacji
        const { value: ElQuantity, dataset: { price: ElPrice } } = inputEl;
        totalSum = [...inputElements].reduce((sum, el) => sum + checkNumbers(el.value, el.dataset.price), 0);

    });
});

// Pobierz elementy button na podstawie ich klasy
const buttonEls = document.getElementsByClassName('cart__btn-calculate');

// Iteruj po wszystkich przyciskach i dodaj event listener na zdarzenie click
[ ...buttonEls].forEach(buttonEl => {
    buttonEl.addEventListener('click', () => {
        // Pobierz elementy span na podstawie ich klasy
        const cartTotalPriceEls = document.getElementsByClassName('cart__total-price');

        // Iteruj po wszystkich elementach span i ustaw im nową wartość
        [ ...cartTotalPriceEls].forEach(cartTotalPriceEl => {
            cartTotalPriceEl.textContent = totalSum.toString();
        });
    });
});
