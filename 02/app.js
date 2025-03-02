// Obsługa cart__btn-calculate - nasłuchiwanie na 'click' -> funkcja  strzałkowa calculatePrice ??
// zbieranie danych z inputów i wkłądanie ich do tablicy 
// Obliczenie sumy z inputów cart__quantity za pomocą forEach
// wyświetlanie sumy z totalPrice do spanu cart__total-price

// dodatkowo warunek !isNaN ?


const sumBtn = document.querySelector('.cart__btn-calculate');


sumBtn.addEventListener('click', () => {
    const quantities = Array.from(document.getElementsByClassName('cart__quantity'));
    let totalPrice = 0;

    quantities.forEach((input) => {
        const {value} = input;
        const {price} = input.dataset;

        const quantity = value.trim() === '' ? 0 : parseInt(value, 10);
        const priceValue = parseFloat(price);

        if (!isNaN(quantity) && quantity >= 0) {
            totalPrice += quantity * priceValue;
        } else {
            alert('Proszę wpisac poprawne dane!')
        }
    });

    document.querySelector('.cart__total-price').textContent = totalPrice;

});