const calculateBtn = document.querySelector(".cart__btn-calculate");
const totalPrice = document.querySelector(".cart__total-price");
const inputList = document.getElementsByClassName('cart__quantity')

calculateBtn.addEventListener('click', () => {
    let total = 0
    const inputArr = [...inputList];
    inputArr.forEach((input) => {
        const { price } = input.dataset;
        const quantity = parseInt(input.value);

        total += price * quantity

    });
    totalPrice.innerText = total
});