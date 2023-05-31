const cartList = document.querySelector("ul");
const cartTotalPrice = document.querySelector(".cart__total-price");
let sum = 0;
cartList.addEventListener("change", sumProduct);

function sumProduct(e) {
  const quantity = e.target.value;
  const price = e.target.getAttribute("data-price");
  sum += quantity * price;
  cartTotalPrice.textContent = sum;
}
