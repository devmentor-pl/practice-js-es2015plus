

const btnCalc = document.querySelector('.cart__btn-calculate');
const inputEl = document.getElementsByClassName('cart__quantity');
const totalPrice = document.querySelector('.cart__total-price')

const basket = Array.from(inputEl);

btnCalc.addEventListener('click', () => {
    
 let price = 0;
    basket.forEach((el) => {
             const {
                 value,
                 dataset:
                  {
                      price: cost
                    }
         } = el
         console.log(price)
        let number = /^[0-9]+$/;
        if (number.test(value))  {
          
        price = price + value * cost;
        } else {
            alert('Wprowadź prawidłowe dane')
        }  
    })
    totalPrice.textContent = price;
})
