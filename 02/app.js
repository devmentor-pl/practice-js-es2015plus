const totalPrice = document.querySelector('.cart__total-price');
const cartInputList = document.getElementsByClassName('cart__quantity');
const buttonEl = document.querySelector('.cart__btn-calculate');

const cartInputArr = [ ...cartInputList ];



buttonEl.addEventListener('click', () => {
    let totalSum = 0;

    cartInputArr.forEach(element => {
    const { dataset: {price}, value } = element;

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