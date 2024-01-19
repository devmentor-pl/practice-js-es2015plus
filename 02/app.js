const inputElements = [...document.getElementsByClassName('cart__quantity')];
const [totalPriceHeader] = document.getElementsByClassName('cart__total-price');
const [playButton] = document.getElementsByClassName("cart__btn-calculate");
 
console.log(inputElements, totalPriceHeader, playButton);

const sumUp = () => {
    let sum = 0;
    inputElements.forEach(element => {
        const price = Number(element.dataset.price);
        const quantity = element.value;
        
        if(!isNaN(quantity)) {
            sum+= price * quantity;
        }    
    });

    totalPriceHeader.innerText = sum;
}



playButton.addEventListener('click', sumUp)



