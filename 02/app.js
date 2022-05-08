
const calculateValues = () => {
    const liElements = document.getElementsByClassName('cart__item');
    const liElementsArr = Array.from( liElements );
    let valuesArr = [];
    liElementsArr.forEach( item => {
        const inputEl = item.querySelector('input');
        const price = inputEl.dataset.price;
        const amount = inputEl.value;   
        const calculatedValue = price*amount;
        valuesArr.push(calculatedValue);
    });
    console.log(valuesArr);
    return valuesArr;
}

const calculatedSum = () => {
    let valuesArr = calculateValues();
    const [a, b, c, d] = valuesArr;
    console.log(a, b, c, d);
    let sum = a + b + c + d;
    /*valuesArr.forEach( item => {
        sum += item;        
    });*/
    console.log(sum);
    const spanEl = document.querySelector('.cart__total-price');
    spanEl.innerText = sum;
}

const buttonEl = document.querySelector('.cart__btn-calculate');
buttonEl.addEventListener('click', calculatedSum);






