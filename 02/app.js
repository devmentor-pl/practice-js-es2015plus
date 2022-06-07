const btn=document.querySelector('.cart__btn-calculate')
const input=[...document.getElementsByClassName('cart__quantity')]
const totalPrice = document.querySelector('.cart__total-price')
btn.addEventListener('click',function(){
    let total=0;
    input.forEach(item =>{
        const {dataset:{price},value}=item
        total += price *value
    })
    totalPrice.textContent=total
})