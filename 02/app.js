document.addEventListener('DOMContentLoaded', () => {

    const inputs = [...document.getElementsByClassName('cart__quantity')]; 
    console.log(inputs)   

    const button = document.querySelector('.cart__btn-calculate')
    button.addEventListener('click', () => {
        console.log("dupa");

        let sum = 0;        

        inputs.forEach((element) => {            
            const {value, dataset: {price}} = element;
            
            sum += value * dataset.price;
        })

        sum = sum.toFixed(2);

        console.log(sum);

        const priceHeader = document.querySelector('.cart__total-price');
        priceHeader.innerText = sum;

    })    
});

