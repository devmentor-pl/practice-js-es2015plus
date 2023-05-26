const totalPrice = document.querySelector('.cart__total-price');
const cartInputList = document.getElementsByClassName('cart__quantity');
const buttonEl = document.querySelector('.cart__btn-calculate');

const cartInputArr = [ ...cartInputList ];

let totalSum = 0;


buttonEl.addEventListener('click', () => {
    totalSum = 0;

    cartInputArr.forEach(element => {
    const { value } = element;
    const { price } = element.dataset;

    if(Number(value) === 0 || !isNaN(Number(value))) {
    totalSum += value * price;
    } else {
        const liName = element.parentElement.innerText
        alert(`liczba sztuk produktu "${liName}" musi być liczbą!`)
    }
    });

    totalPrice.innerText = totalSum;
    }
);