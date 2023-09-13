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
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       const {inputValue, inputPrice} = arr[i];
        sum += inputValue * inputPrice;
    }
    const totalPrice = sum;
    totalPriceValue.innerText = `${totalPrice}`;
  }
  
  button.addEventListener('click', function() {
      const values = getValue();
      getTotalPrice(values);
  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  