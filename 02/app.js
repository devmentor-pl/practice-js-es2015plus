const inputs = Array.from(document.getElementsByClassName('cart__quantity'));
const btn = document.querySelector('.cart__btn-calculate');
const cartPrice = document.querySelector('.cart__total-price');

const handleClick = () => {
    let priceForAll = 0;
    
    inputs.forEach((input) => {
        const { price } = input.dataset;
        const { value } = input;
        const priceForItem = Number(price) * Number(value);
        priceForAll += priceForItem;
    })

    console.log(priceForAll);
    cartPrice.textContent = priceForAll;   
}

btn.addEventListener('click', handleClick);