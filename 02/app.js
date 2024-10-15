const calculateButton = document.querySelector(".cart__btn-calculate");
const result = document.querySelector(".cart__total-price");
const inputs = document.getElementsByClassName("cart__quantity");

const calculateResult = () => {
    let totalResult = 0;
    Array.from(inputs).forEach((input) => {
        const quantity = Number(input.value);
        const { price } = input.dataset;

        totalResult += quantity * Number(price);
    });

    result.innerText = totalResult;
};

calculateButton.addEventListener("click", () => {
    calculateResult();
});