document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.cart')

    // pobranie elementu
    const inputNode = [...section.getElementsByClassName('cart__quantity')];
    const btn = section.querySelector('.cart__btn-calculate');
    const resultViewElement = section.querySelector('.cart__total-price')

    //funkcja obliczania i umiejscowienia wyniku
    const sumCart = (arr, obj) => {
        let result = 0;
    arr.forEach(item => {
        const {dataset: {price: dataPrice}} = item;
        let {value: value} = item;
        result = result + (dataPrice * value);

    })
       return obj.textContent = `${result} `;
    }

    btn.addEventListener("click", () => {
        sumCart(inputNode,resultViewElement);
    });
})









