const button = document.querySelector('.cart__btn-calculate');
const total = document.querySelector('.cart__total-price');


const inputs = document.getElementsByClassName('cart__quantity');
const array = Array.from(inputs);

const sumUp = () => {
    const values = [];
    array.forEach(element => {
        const object = {
            price: element.dataset.price,
            value: element.value,
        };
        const {
            price: price,
            value: value,
        } = object;
        
        const val = price * value;
        values.push(val);
    });
    const sum = values.reduce((acc, num) => acc + num, 0);
    total.innerHTML = sum;
}

button.addEventListener('click', sumUp);