document.addEventListener("DOMContentLoaded", () => {
    const inputList = document.getElementsByClassName("cart__quantity");
    const buttonEl = document.querySelector(".cart__btn-calculate");
    const sum = document.querySelector(".cart__total-price");

    buttonEl.addEventListener("click", () => {
        let price = 0;
        [...inputList].forEach((element) => {
            price = price + element.dataset.price * element.value;
            sum.innerText = price;
        });
    });
});
