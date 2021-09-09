const init = () => {
    const calculateBtn = document.querySelector('.cart__btn-calculate');
    calculateBtn.addEventListener('click', calculateTotalPrice);
}

const calculateTotalPrice = () => {
    const totalPriceEl = document.querySelector('.cart__total-price');
    let totalPrice = 0;
    let counter = 0;
    const inputsElArr = [...document.getElementsByClassName('cart__quantity')];
    inputsElArr.forEach((input) => {
        const values = setValuesForItem(input);
        const isQuantityValid = isQuantityValidNum(values);
        if (isQuantityValid) {
            const price = calculatePriceForItem(values);
            totalPrice += price;
            counter++;
        }
    });
    const isEachQuantityValid = isEachDataValid(counter, inputsElArr);
    isEachQuantityValid ? setTotalPrice(totalPriceEl, totalPrice) : showErr(totalPriceEl);
}

const setValuesForItem = (item) => {
    const {
        value: quantity,
        dataset: { price },
    } = item;
    return {
        quantity,
        price,
    }
}

const isQuantityValidNum = ({ quantity }) => {
    const numRegex = /^(0|([1-9]{0,1}[0-9]{0,1}))$/;
    return numRegex.test(quantity.trim());
}

const calculatePriceForItem = ({ quantity, price }) => {
    return +quantity * +price;
}

const isEachDataValid = (counter, inputsElArr) => {
    return counter === inputsElArr.length;
}

const setTotalPrice = (priceEl, price) => {
    priceEl.textContent = price;
}

const showErr = (priceEl) => {
    priceEl.textContent = '0';
    alert('Wprowadź poprawne dane - liczby z zakresu 0-99');
}

document.addEventListener('DOMContentLoaded', init);