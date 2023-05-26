const cartTotal = document.getElementsByClassName('cart__total-price');
const cartInputList = document.getElementsByClassName('cart__quantity');
const buttonList = document.getElementsByClassName('cart__btn-calculate');

const [ buttonEl ] = buttonList;
const [ totalPrice ] = cartTotal;
const cartInputArr = [ ...cartInputList ];

let totalSum = 0;


const totalPriceHandler = () => {
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


buttonEl.addEventListener('click', totalPriceHandler);