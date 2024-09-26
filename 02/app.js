
document.querySelector('.cart__btn-calculate').addEventListener('click', () => {

    const quantities = Array.from(document.getElementsByClassName('cart__quantity'));
    
    let totalPrice = 0;
    quantities.forEach(({ dataset: { price }, value }) => {
        totalPrice += price * value;
    });
    document.querySelector('.cart__total-price').textContent = `${totalPrice} PLN`;
});