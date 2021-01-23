function init() {       // coś tu zrypałem ale chyba jestem ślepy/ zerkne to poprawić ja o tym zapomnę xd 
    const totalCostBtn = document.querySelector('.cart__btn-calculate');
    totalCostBtn.addEventListener('click', showTotalCost);
};
    
const showTotalCost = () => {
    const totalCost = sumCost();
    const totalCostEl = document.querySelector('.cart__total-price');
    totalCostEl.textContent = totalCost;
};

const sumCost = () => {
    const productsCostList = getProductsCosts();
    const calcTotalCost = (productsCostList) => {
        return getProductsCosts.reduce( (acc, num) => {
            return acc + num;
        }, 0);
    };
    return calcTotalCost();
}

const getProductsCosts = () => {
    const productsCostList = [];
    const inputArr = [...document.getElementsByClassName('cart__quantity')];
    inputArr.forEach((item, index) => {
        const costItem = (+item.dataset.price)*(+item.value);
        productsCostList.push(costItem);
    });
    return productsCostList;
}





document.addEventListener('DOMContentLoaded', init)