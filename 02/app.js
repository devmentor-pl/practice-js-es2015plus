const orderSummary = () => {
    const inputList = [...document.getElementsByClassName('cart__quantity')];
    const spanEl = document.querySelector('.cart__total-price');

    const basket = [];

    const createBasketItem = (item) => {
        const quantity = Number(item.value);

        if (!isNaN(quantity) && quantity >= 0) {

            basketItem = {
                quantity: quantity,
                price: item.dataset.price,
            }

            return basketItem;
        } else {
            alert('Wprowadź poprawne dane!')
        }
    }

    const createBasket = () => {
        basket.length = 0;

        inputList.forEach(input => basket.push(createBasketItem(input)));
    }

    const getProductsAmount = () => {
        const itemAmount = [];

        basket.forEach(item => {
            const { quantity, price } = item;

            itemAmount.push(getProduct(quantity, price));
        });

        return itemAmount;
    }

    const getTotalAmount = () => getProductsAmount().reduce((acc, item) => acc + item, 0);

    const renderSummary = () => spanEl.innerText = getTotalAmount();

    const getProduct = (a, b) => a * b;

    const init = () => {
        createBasket();
        getTotalAmount();
        renderSummary();
    }

    return init();
}

document.querySelector('.cart__btn-calculate').addEventListener('click', orderSummary)