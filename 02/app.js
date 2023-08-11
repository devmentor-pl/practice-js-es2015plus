document.addEventListener('DOMContentLoaded', init);
const basket = [];

function init() {
    const totalPriceEl = document.querySelector('.cart__total-price');
    const btnCalculate = document.querySelector('.cart__btn-calculate');
    const cart = document.querySelector('.cart');
    // const inputs = document.getElementsByClassName('cart__quantity');
    // [...inputs].forEach(input => {
    //     const price = Number(input.dataset.price);
    //     const quantity = Number(input.value);
    //     const name = input.parentElement.innerText;

    //     basket[basket.length] = {
    //         name,
    //         price,
    //         quantity,
    //     };    
    // });

    cart.addEventListener('change', function (e) {
        onChange(e);
    });
    btnCalculate.addEventListener('click', function () {
        onClick(totalPriceEl);
    })

}

const calculateTotalPrice = () => {
    let sum = 0;
        basket.forEach(el => {
            sum += el.price * el.quantity;
        });
        return sum;
}

const onChange = (e) => {    
    basket[basket.length] = {
            name: e.target.parentElement.innerText,
            price: Number(e.target.dataset.price),
            quantity: Number(e.target.value),
        };
}

const onClick = (totalPriceEl) => {
    const totalPrix = calculateTotalPrice();
    totalPriceEl.innerText = totalPrix;
}