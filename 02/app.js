//Pytanie do ostatniego punktu treści zadania: jakich obiektów? ;P Jeżeli obowiązkowe byłoby tworzenie obiektów, to należałoby to zaznaczyć w treści zadania. U mnie jest bez ;) 

const sumInputValues = (inputArr) => {
  let valuesSum = 0;
  [...inputArr].forEach(({ value }) => {
    valuesSum += parseFloat(value);
  })
  return valuesSum
}

const sumCart = (e) => {
  const btn = e.currentTarget.querySelector('.cart__btn-calculate');
  const cartSumElement = e.currentTarget.querySelector('.cart__total-price');

  if (btn && e.target === btn && cartSumElement) {
    const inputList = e.currentTarget.getElementsByClassName('cart__quantity');
    cartSumElement.innerText = sumInputValues([...inputList])
  }
}

const init = () => {
  const shopList = document.querySelector('.cart');
  shopList.addEventListener('click', sumCart)
}

document.addEventListener('DOMContentLoaded', init);
