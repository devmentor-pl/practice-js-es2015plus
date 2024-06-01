const inputArr = [...document.getElementsByClassName('cart__quantity')];
const checkoutBtn = document.querySelector('.cart__btn-calculate');
const priceOutput = document.querySelector('.cart__total-price');

checkoutBtn.addEventListener('click', btnEl => {
    let totalPrice = 0;
    inputArr.forEach(element => {
         const { value: quantity , dataset: { price } } = element;
         totalPrice += quantity * price;
    });
    priceOutput.innerText = totalPrice;
})