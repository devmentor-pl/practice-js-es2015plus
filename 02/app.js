document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM')

    const inputList = document.getElementsByClassName('cart__quantity')
    const btnEl = document.querySelector('.cart__btn-calculate')
    const totalEl = document.querySelector('.cart__total-price')
    console.log(inputList, btnEl)

    if(btnEl && totalEl) {

   
    btnEl. addEventListener('click', () => {
        let total = 0;
        [...inputList].forEach((element) => {

            const {dataset: {price}, value} = element
            total += price * value
            
        });
        
        totalEl.innerText = total
    })
}
}) 

