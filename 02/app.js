const inputElList = document.getElementsByClassName('cart__quantity');
const numberItem = [ ...inputElList];
const calculateButton = document.querySelector('.cart__btn-calculate');
const totalPirceArea = document.querySelector('.cart__total-price');

let numberArray = [];
let priceArray = [];
let totalCost = 0;

numberItem.forEach(item => item.addEventListener('change',getNumberAndPrice));

function getNumberAndPrice(e){
    numberArray.push(e.target.value);
    priceArray.push(e.target.dataset.price);
}

calculateButton.addEventListener('click',function(){
    for(let i=0; i<numberArray.length; i++){
        totalCost += (numberArray[i] * priceArray[i]);
        }
    totalPirceArea.innerHTML = totalCost;
});









