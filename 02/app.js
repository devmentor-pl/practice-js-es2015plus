// document.addEventListener('DOMContentLoaded', init);                 <-- jak zrobić taki zapis za pomocą funkcji strzałkowych?

// const init = () => {
//     xyz
// }

// btn.addEventListener('click', sumUp);

 // const sumUp = (ev) => {
    //     console.log(ev.target);
    // }

// });

    // btn.addEventListener('click', sumUp);                            <-- dlaczego zapis w ten sposób nie zadziałał?

    // const sumUp = (ev) => {
    //     console.log(ev.target);
    // }


const inputs = [...document.getElementsByClassName('cart__quantity')];
const totalPrice = document.querySelector('.cart__total-price');
const btn = document.querySelector('.cart__btn-calculate');


btn.addEventListener('click', () => {
    sum = 0;
    let sumArr = [];
    inputs.forEach((el) => {

        const {
            dataset: {price:singlePrice},
            value:itemAmount
        } = el;

        sum = parseFloat(singlePrice) * parseFloat(itemAmount);
        sumArr.push(sum);
    });

    total = sumArr.reduce((a,b) => {
        return a+b;
    },0)

    // console.log(total);
    totalPrice.innerText = total;
});