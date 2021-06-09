const init = () => {
    btn = document.querySelector(".cart__btn-calculate");
    btn.addEventListener("click", getValue);
};

document.addEventListener("DOMContentLoaded", init);

const getValue = () => {

    const inputEl = document.getElementsByClassName("cart__quantity");
    const inputElArr = [ ...inputEl];
    let sum = 0;

    inputElArr.forEach( (element) => {
        
        const {
            dataset: { price: price },
            value: quantity,
        } = element;
        
        const multi = getSum(price, quantity);
        sum = sum + multi;
    
    });

    printTotalValue(sum)
};

const getSum = (price, quantity) => { 

    if(quantity < 0 || isNaN(quantity)) {
        alert("Wpisz poprawną ilość!");
    };

    return parseInt(price) * parseInt(quantity);
};

const printTotalValue = (sum) => {

    const totalPriceEL = document.querySelector(".cart__total-price");
    totalPriceEL.innerText = sum;
    
};