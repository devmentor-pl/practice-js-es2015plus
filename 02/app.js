const cartItems = document.getElementsByClassName('cart__quantity');
const calculateBtn = document.querySelector('.cart__btn-calculate');
const totalPrice = document.querySelector('.cart__total-price');


console.log(typeof dataset)
console.log(cartItems)

const countSum = () => {
    const inputs = [...cartItems];
    let totalSum = 0;
    inputs.forEach(input => {
        const{
            dataset: {price},
            value: value,
        } = input;

        if(!Number.isNaN(value)){
            totalSum += value * price;
        }
    })
    totalPrice.innerText = totalSum
}

calculateBtn.addEventListener('click', countSum);

