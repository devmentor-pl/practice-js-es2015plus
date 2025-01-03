const quantityFields = document.getElementsByClassName("cart__quantity");
const btnCalculate = document.querySelector(".cart__btn-calculate");
const totalPriceSpan = document.querySelector(".cart__total-price");

const validateFields = (...fields) => {
  return fields.every((field) => {
    const { value } = field;
    return value.trim() && !isNaN(+value) && value >= 0;
  });
};

btnCalculate.addEventListener("click", () => {
  let sum = 0;
  const quantityFieldsList = [...quantityFields];

  const areFieldsValid = validateFields(...quantityFieldsList);

  if (!areFieldsValid) {
    alert("Provide valid fields!");
    return;
  }

  quantityFieldsList.forEach((field) => {
    const {
      value,
      dataset: { price },
    } = field;

    sum += value * price;
  });

  totalPriceSpan.textContent = sum;
});
