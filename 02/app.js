const calculateBtn = document.querySelector('.cart__btn-calculate');
calculateBtn.addEventListener('click', () => {
    const totalPrice = document.querySelector('.cart__total-price');
    const cartQuantity = [...document.getElementsByClassName('cart__quantity')];
    let sum = 0;
    cartQuantity.forEach((item, i) => {
        const {
            price: dataPrice
        } = item.dataset;
        const {
            value: inputValue
        } = item;
        sum = sum + inputValue * dataPrice;
    });
    totalPrice.textContent = Number(sum);
})