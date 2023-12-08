document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM");
  
    const inputList = [...document.getElementsByClassName("cart__quantity")];
    const btn = document.querySelector(".cart__btn-calculate");
    const result = document.querySelector(".cart__total-price");
  
    if (btn && result) {
      btn.addEventListener("click", () => {
        let sum = 0;
  
        inputList.forEach((item) => {
          const {
            dataset: { price },
            value,
          } = item;
  
          sum += price * value;
        });
  
        result.innerText = sum;
      });
    }
  });