const inputsEl = [...document.getElementsByClassName('cart__quantity')];
const button = document.querySelector('.cart__btn-calculate');
const totalPriceValue = document.querySelector('.cart__total-price');

const getValue = () => {
    const arr = inputsEl.map((input) => {
       const {value, dataset} = input;
  
        const obj = {
          inputValue: parseInt(value),
          inputPrice: parseInt(dataset.price),
        }
  
        return obj
    });
    return arr;
  }
  const getTotalPrice = (arr) => {
    const multiply = arr.map((el) => el.inputValue * el.inputPrice);
    const totalSum = multiply.reduce((num, currentValue) => num + currentValue);
    totalPriceValue.innerText = `${totalSum}`;
  }
  
  button.addEventListener('click', function() {
      const values = getValue();
      getTotalPrice(values);
  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  