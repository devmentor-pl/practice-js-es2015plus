const inputElList = document.getElementsByClassName('cart__quantity');
const numberItem = [ ...inputElList];
console.log(numberItem);
const calculateButton = document.querySelector('.cart__btn-calculate');
const totalPirceArea = document.querySelector('.cart__total-price');

calculateButton.addEventListener('click', () => {
    let costProduct = 0;
    let totalCost = [];

    numberItem.forEach((item) => {
        const {dataset:{price:itemPrice},value:itemNumber} = item;
        costProduct = parseInt(itemPrice) * parseInt(itemNumber);
        totalCost.push(costProduct);
    });

    orderCost = totalCost.reduce((acc,item) => {
        return acc + item;
    });

    totalPirceArea.innerHTML = orderCost;
});



// WCZESNIEJSZE ROZWIĄZANIE

// let numberArray = [];
// let priceArray = [];
// let totalCost = 0;

// numberItem.forEach(item => item.addEventListener('change',getNumberAndPrice));

// function getNumberAndPrice(e){
//     numberArray.push(e.target.value);
//     priceArray.push(e.target.dataset.price);
// }

// calculateButton.addEventListener('click',function(){
//     for(let i=0; i<numberArray.length; i++){
//         totalCost += (numberArray[i] * priceArray[i]);
//         }
//     totalPirceArea.innerHTML = totalCost;
// });








