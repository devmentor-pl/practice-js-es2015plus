const init = () => {

    const calculateButton = document.querySelector('.cart__btn-calculate');

    calculateButton.addEventListener('click' , totalPrice);
}

const totalPrice = () => {

    const inputsList = document.getElementsByClassName('cart__quantity');
    let sum = 0;

    [...inputsList].forEach( element => {

        const values = getValuesFromItem(element);
        const calculetedSum = calcuteSum(values);

        sum += calculetedSum;
    } )
    setTotalPrice(sum);
}

const getValuesFromItem = (item) => {

    const {
        value : quantity,
        dataset: {price},
    } = item

    return {
        quantity ,
        price
    };
}

const calcuteSum = (item) => {

    const quantity = parseInt(item.quantity)
    const price = parseInt(item.price)

    if( quantity.length !== 0 && !Number.isNaN(quantity) && quantity >= 0 ) {
        return quantity * price;
    }
    else {
        alert('Enter the correct quantity');
    }
}

const setTotalPrice = (item) => {

    const totalPrice = document.querySelector('.cart__total-price');
    totalPrice.innerHTML = item;
}

document.addEventListener('DOMContentLoaded' , init)