const buttonCalculate = document.querySelector(".cart__btn-calculate");

buttonCalculate.addEventListener(
  "click",
  (calculate = (e) => {
    e.preventDefault();
    inputs = Array.from(document.getElementsByClassName("cart__quantity"));

    let items = [];

    inputs.forEach((inp) => {
      const { dataset, value } = inp;
      const { price } = dataset;
      let item = {
        price: Number(price),
        volume: Number(value),
        cost: Number(price) * Number(value),
      };
      items.push(item);
    });

    let totalCost = 0;

    items.forEach((item) => {
      const { cost } = item;

      totalCost = totalCost + cost;
    });

    const totalCostElement = document.querySelector(".cart__total-price");
    totalCostElement.textContent = totalCost;
  })
);
