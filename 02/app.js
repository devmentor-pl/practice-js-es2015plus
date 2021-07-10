/*Zadanie należy wykonać zgodnie z poniższymi wytycznymi:

wszędzie gdzie potrzebujesz użyć funkcji, użyj funkcji strzałkowej
elementy <input> wyszukaj za pomocą document.getElementsByClassName i wykorzystaj forEach do iteracji
w momencie pobierania danych z obiektów używaj destrukturyzacji*/


inputEl = document.getElementsByClassName('cart__quantity');

const arr = Array.from(inputEl);
console.log(inputEl);

const btnCalculate = document.querySelector('.cart__btn-calculate');
const totalPrice = document.querySelector('.cart__total-price');

btnCalculate.addEventListener('click', () => {
    let total = 0;
    arr.forEach(item => {

        console.log(item.dataset.price)

        const { value, dataset } = item;
        const price = value * dataset.price;
        total += price;

    })
    console.log(total);
    totalPrice.innerText = total;
})
