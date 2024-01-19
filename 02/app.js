const totalPrice = document.querySelector(".cart__total-price");
const sumBtn = document.querySelector(".cart__btn-calculate");
const inputList = document.getElementsByClassName("cart__quantity");

const sumProducts = () => {
    const inputs = [...inputList];

    let totalSum = 0;

    inputs.forEach(input => {
        const {
            dataset: { price },
            value,
        } = input;

        if (!isNaN(value)) {
            totalSum += price * value;
        }
    });

    totalPrice.innerText = totalSum + "PLN";
};

sumBtn.addEventListener("click", sumProducts);
