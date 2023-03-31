console.log("zadanie 2");

const totalPrice = document.querySelector(".cart__total-price");
const calculateBtn = document.querySelector(".cart__btn-calculate");
const inputElements = document.getElementsByClassName("cart__quantity");
const inputArray = [...inputElements];
const items = [];

calculateBtn.addEventListener("click", (e) => {
  inputArray.forEach((item) => {
    const itemPrice = item.getAttribute("data-price");
    //items.push(parseInt(itemPrice));
    const itemVal = item.value;
    //price.push(parseInt(itemVal));
    sum = itemPrice * itemVal;
    items.push(sum);
  });

  console.log(items);

  const showResult = items.reduce((total, amount) => total + amount);
  totalPrice.textContent = showResult;
  items.length = 0;
});
