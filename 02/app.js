const inputs = document.getElementsByClassName("cart__quantity");
const totalPriceEl = document.querySelector(".cart__total-price");
const cartBtn = document.querySelector(".cart__btn-calculate");
// console.log(inputs)


function handleCalculate(){
    // const costArr = [];
    let totalPrice = 0;

    [...inputs].forEach(element => {
        const {value} = element;
        const {price} = element.dataset;
    
        const elementCost = value*price;
        // costArr.push(elementCost)
        totalPrice+=elementCost
    });

    // const totalPrice = costArr.reduce((acc, a) => acc +a);
    totalPriceEl.textContent = totalPrice;
}

cartBtn.addEventListener("click", handleCalculate)