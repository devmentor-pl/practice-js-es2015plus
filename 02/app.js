const inputsEl = document.getElementsByClassName('cart__quantity')
const arrInput = [...inputsEl]; 
console.log(arrInput);

const totalPrice = document.querySelector('.cart__total-price');
console.log(totalPrice)

const buttonEl = document.querySelector('.cart__btn-calculate');
console.log(buttonEl);

buttonEl.addEventListener('click', () => {
    let sum = 0;
    [...arrInput].forEach(item => {
        sum += item.value * item.dataset.price;  
    });   
    totalPrice.innerText = sum;
})

    // lub 
    // [...arrInput].forEach(({value, dataset}) => {)
    //     const {price} = dataset;
    //     sum += {value * price}
    // }); 

 


















