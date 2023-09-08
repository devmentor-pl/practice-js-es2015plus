const inputsEl = [...document.getElementsByClassName('cart__quantity')];
const button = document.querySelector('.cart__btn-calculate');
const totalPriceValue = document.querySelector('.cart__total-price');

const getValueAndMultiplication= () => {
    const arr = [];
    inputsEl.forEach(input => {
      const value = parseInt(input.value);
      const price = parseInt(input.dataset.price);
      const multiply = value * price;
      arr.push(multiply)
    })
    getSum(arr)
}

const getSum = (arr) => {
   const [a, b, c, d] = arr;
   const totalSum = parseInt(`${a + b + c + d}`);
   totalPriceValue.innerText = `${totalSum} `;
}



button.addEventListener('click', getValueAndMultiplication);

