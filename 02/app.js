const inputsEl = [...document.getElementsByClassName('cart__quantity')];
const button = document.querySelector('.cart__btn-calculate');
const totalPriceValue = document.querySelector('.cart__total-price');

const getValue = () => {
  const arr = [];
  let obj;
  inputsEl.forEach((input) => {
      obj = {
        inputValue: parseInt(input.value),
        inputPrice: parseInt(input.dataset.price),
      }
      arr.push(obj);
  }) 
  multiplyAndSum(arr)
}


const multiplyAndSum = (arr) => {
  const [inputValue,inputPrice] = arr;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      const multiplication = arr[i].inputValue * arr[i].inputPrice;
      sum += multiplication;
  }
  const totalPrice = sum;
  totalPriceValue.innerText = `${totalPrice} `;
  return totalPrice;
}
button.addEventListener('click', getValue);