//console.log("dddd")
const inputClass = Array.from(document.getElementsByClassName('cart__quantity'));
//console.log(inputClass);
const button = document.querySelector('button')
const span = document.querySelector('.cart__total-price')
button.addEventListener('click', ()=> {
    let totalPrice = 0;
    inputClass.forEach(el =>{
//console.log(el.dataset.price)
        const {value, dataset} = el;
        const price = value * dataset.price;
        totalPrice += price

    })
    console.log(totalPrice)
    span.innerText = totalPrice
})


