//console.log("dddd")
const inputClass = Array.from(document.getElementsByClassName('cart__quantity'));
//console.log(inputClass);
const button = document.querySelector('button')
const span = document.querySelector('.cart__total-price')
//span.innerText = 
const clickButton = function() {
   // const value = document.getElementsByClassName('cart__quantity')
    //const price = value.dataset.price
    //console.log( price)
    inputClass.forEach(function(el){
//console.log(el.dataset.price)
        const {value}= input
        const {price} = el.dataset.price
        console.log({value}, price)
    })
}
button.addEventListener('click', clickButton);

