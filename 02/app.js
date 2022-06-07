const inputsList = document.getElementsByClassName('cart__quantity');
const totalValue = document.querySelector('.cart__total-price');
const buttonCalculate = document.querySelector('.cart__btn-calculate');

const pricesList = [];


buttonCalculate.addEventListener('click', () => {
    pricesList.splice(0, pricesList.length);

    [...inputsList].forEach((element) => {

        const { dataset, value } = element;
        const price = dataset.price * value;
        pricesList.push(price);
    });

    [...inputsList].forEach((element) => {
        element.value = 0;
    });


    let totalPrice = 0;
    pricesList.forEach((element) => {
        totalPrice = totalPrice + element;
        console.log(totalPrice);
    });


    totalValue.innerText = totalPrice;

});





