const { target } = require("../webpack.config");

let test = document.querySelectorAll('.cart__item');
let totalPrice = document.querySelector('.cart__total-price');
let amount = [...document.getElementsByClassName('cart__item')];
const btn = document.querySelector('.cart__btn-calculate');

console.log(test);
// test.forEach(function(el){
//     console.log(el.dataset);
// })

// test.forEach(function(el){
//     el.addEventListener('click', function(ev){
//         console.log(this.dataset.price)
//     })
// })

amount.forEach(function(el){
    console.log(el);
    el.addEventListener('change', function(ev){
        console.log(ev.target.value);

    });
});


console.log(totalPrice);
console.log(btn);