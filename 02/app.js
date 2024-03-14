const cartBtn = document.querySelector(".cart__btn-calculate");

const countTotalPrice = () => {
  const itemList = Array.from(
    document.getElementsByClassName("cart__quantity")
  );
  const totalPriceLocation = document.querySelector('.cart__total-price');

let totalPrice = 0;

itemList.forEach((item) => {
  const price = item.getAttribute("data-price");
  const value = item.value;
  totalPrice += price * value;
});

totalPriceLocation.innerText = totalPrice;
}

cartBtn.addEventListener("click", countTotalPrice);
