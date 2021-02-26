

const btnCalc = document.querySelector('.cart__btn-calculate');
const inputEl = document.getElementsByClassName('cart__quantity');
const totalPrice = document.querySelector('.cart__total-price')

const basket = Array.from(inputEl);

btnCalc.addEventListener('click', () => {
    
 let price = 0;
    basket.forEach((el) => {
        let number = /^[0-9]+$/;
        if (number.test(el.value))  {
        price = price + el.value * el.dataset.price;
        } else {
            alert('Wprowadź prawidłowe dane')
        }  
    })
    totalPrice.textContent = price;
})
