const init = () => {
    const submitOrder = document.querySelector('.cart__btn-calculate');

    submitOrder.addEventListener('click', order);
}

const order = () => {
    const inputsElement = document.getElementsByClassName('cart__quantity');
    let sum = 0;

    [...inputsElement].forEach(element => {
        const values = getValues(element);
        const calcSum = calculateSum(element, values);
        sum += calcSum; 
    });

    const totalPrice = printTotalValue(sum);
    
}

const getValues = (element) => {
    const {
        value: quantity,
        dataset: {price: price},
        parentElement: {innerText}
    } = element

    return {
        price,
        quantity,
        innerText
    }
}

const calculateSum = (element,values) => {
    if(values.quantity < 0 || isNaN(parseInt(values.quantity))) {
        return alert('Please enter correct quantity')
    }
    return parseInt(values.price) * parseInt(values.quantity);
}


const printTotalValue = (sum) => {
    const totalElement = document.querySelector('.cart__total-price');
    console.log(isNaN(sum));

    if(!isNaN(sum)){
        totalElement.innerText = sum
    } else {
        totalElement.innerText = 0;
    }
    
}
document.addEventListener('DOMContentLoaded', init);