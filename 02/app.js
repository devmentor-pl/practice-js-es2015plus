<<<<<<< HEAD
function init() {       // coś tu zrypałem ale chyba jestem ślepy/ zerkne to poprawić ja o tym zapomnę xd 
    const totalCostBtn = document.querySelector('.cart__btn-calculate');
    totalCostBtn.addEventListener('click', showTotalCost);
};
    
=======
function init() {
    const totalCostBtn = document.querySelector('.cart__btn-calculate');
    totalCostBtn.addEventListener('click', showTotalCost);
}

>>>>>>> 153214ba7a068ba525be42cfc7334691ecd6ba32
const showTotalCost = () => {
    const totalCost = sumCost();
    const totalCostEl = document.querySelector('.cart__total-price');
    totalCostEl.textContent = totalCost;
<<<<<<< HEAD
=======
    return totalCost;
>>>>>>> 153214ba7a068ba525be42cfc7334691ecd6ba32
};

const sumCost = () => {
    const productsCostList = getProductsCosts();
    const calcTotalCost = (productsCostList) => {
        return getProductsCosts.reduce( (acc, num) => {
            return acc + num;
        }, 0);
    };
<<<<<<< HEAD
    return calcTotalCost();
}
=======
    return console.log(calcTotalCost());
};
>>>>>>> 153214ba7a068ba525be42cfc7334691ecd6ba32

const getProductsCosts = () => {
    const productsCostList = [];
    const inputArr = [...document.getElementsByClassName('cart__quantity')];
    inputArr.forEach((item, index) => {
        const costItem = (+item.dataset.price)*(+item.value);
        productsCostList.push(costItem);
    });
    return productsCostList;
<<<<<<< HEAD
}
=======
};
>>>>>>> 153214ba7a068ba525be42cfc7334691ecd6ba32





document.addEventListener('DOMContentLoaded', init)