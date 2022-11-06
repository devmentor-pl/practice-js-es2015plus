const inputEl = document.getElementsByClassName('cart__quantity');
//console.log(inputEl);
const arrInput = Array.from(inputEl);
console.log(arrInput);

const totalElement = document.querySelector('.cart__total-price');
console.log(totalElement);

const btnEl = document.querySelector('.cart__btn-calculate');
console.log(btnEl);
btnEl.addEventListener('click', () => {
    let sumPrices = 0;
    arrInput.forEach(input => {
        const {dataset , value} = input;
        const {price} = dataset;
        //const value = input.value
        //console.log(price,value);
        sumPrices+= price*value;



    });
    console.log(sumPrices);
    totalElement.innerText = sumPrices;
})








    
        
    
    
    
        

 




/*Funkcja strzałkowa

const sumFn = function(a, b) {
    return a + b;
    }
    const sumFnArrow = (a, b) => {
    return a + b;
    }
    console.log(
    sumFn(3, 5),
    sumFnArrow(4, 5),
    );
*/