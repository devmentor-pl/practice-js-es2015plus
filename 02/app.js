
const clearInnerText = element => element.innerText = '';

const addInnerText = (element, text) => element.innerText = text;

const calcTotalPrice = () => {
    const inputsList = document.getElementsByClassName('cart__quantity');
    const inputsListArr = [...inputsList];
    let sum = 0;

    inputsListArr.forEach(el => {
        const {value} = el;
        const {dataset:{price}} = el;
        sum += parseInt(value) * price;
    });

    const cartTotalPrice = document.querySelector('.cart__total-price');
    clearInnerText(cartTotalPrice)
    addInnerText(cartTotalPrice, sum);
}

const cartBtn = document.querySelector('.cart__btn-calculate');
cartBtn.addEventListener('click', calcTotalPrice);

