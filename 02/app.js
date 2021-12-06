const inputElements = document.getElementsByClassName("cart__quantity");
let calculateBtn = document.querySelector(".cart__btn-calculate");
const totalPrice = document.querySelector(".cart__total-price");

const inputElementsArr = [...inputElements];

const countFinalPrice = () => {
  let totalValueOfProducts = [];
  inputElementsArr.forEach((item) => {
    const { price } = item.dataset;
    const numberOfProducts = item.value;

    let priceOfProduct = price * numberOfProducts;
    totalValueOfProducts.push(priceOfProduct);
  });

  const addPrices = (total, num) => {
    return total + num;
  };

  totalPrice.innerText = totalValueOfProducts.reduce(addPrices);
};

calculateBtn.addEventListener("click", countFinalPrice);
