const init = () => {
    let sum;
    const btn = document.querySelector('.cart__btn-calculate');
    btn.addEventListener('click', getValue);
}

const getValue = (e) => {
    sum = 0;
    const items = document.getElementsByClassName('cart__quantity');
    const restItems = [...items];
    validateData(restItems);
};

const validateData = (arr) => {
    arr.forEach(el => {
        const nonZero = Number(el.value);
        if(!isNaN(nonZero) && nonZero >= 0) {
            el.value = nonZero;
            const {
                dataset: {
                    price,
                },
                value,
            } = el;
            getSum(price, value);
        } else {
            alert('Podana wartość musi być liczbą całkowitą!');
        };
    });
};

const getSum = (price, quantity) => {
    const basket = document.querySelector('.cart__total-price');
    sum = sum + price * quantity;
    basket.textContent = `${sum}`;
    return sum;
}

document.addEventListener('DOMContentLoaded', init);