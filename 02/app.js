const cartBtn = document.querySelector(".cart__btn-calculate");

const getCalculation = () => {
  const itemsList = [...document.getElementsByClassName("cart__quantity")];
  console.log(itemsList);

  let sum = 0;
  itemsList.forEach((item) => {
    const { dataset, value } = item;
    const price = parseFloat(dataset.price);
    const quantity = parseInt(value);
    if (isNaN(quantity)) {
      alert(`Wprowadź liczbę w polu ${item.parentElement.innerText} !`);
    } else {
      sum += price * quantity;
    }
  });
  document.querySelector(".cart__total-price").innerText = sum;
};

cartBtn.addEventListener("click", getCalculation);
