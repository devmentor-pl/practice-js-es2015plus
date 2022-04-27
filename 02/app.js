

const setOnClickEvent = (btn, action) => {

    btn.addEventListener('click', action)
}

const extractData = (item) => { 
                                const {value, dataset:{price}} = item; 
                                return {value, price}
                              }

const calculate = (cartList) => {
  
    let total = 0;

    cartList.forEach(item => {
        
        const {value, price} = extractData(item);
        const intValue = parseInt(value);
                         
        if (intValue > 0 && value === value) {
            total += intValue*price;      
            item.value = intValue;
        }   
        else {
            item.value = '0';
        }            

    });

    return total;
   
}

const runApp = () => {

    const btnCalc = document.querySelector('.cart__btn-calculate');
    const cartList = [...document.getElementsByClassName('cart__quantity')];
    const fieldTotalPrice = document.querySelector('.cart__total-price');

    setOnClickEvent(btnCalc, () => fieldTotalPrice.innerText = calculate(cartList)); 
}

document.addEventListener('DOMContentLoaded', runApp);
