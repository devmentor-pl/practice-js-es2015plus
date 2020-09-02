const btn = document.querySelector('.cart__btn-calculate');
// const items = document.querySelectorAll('cart__item');
//(dlaczego to poprzednie wyszukanie nie działa ? 
// )


const items = Array.from(document.getElementsByClassName('cart__item'));
const totalSpan = document.querySelector('.cart__total-price');
console.log(totalSpan)



btn.addEventListener('click', () => {

    let total = 0;

    items.forEach(price => {

        const input = price.querySelector('.cart__quantity')
        // total += input.value;
        //(zpaytac parseInt, parseFloat)
        total += parseInt(input.value)

        console.log(total)

        totalSpan.innerHTML = total + 'pln'
        totalSpan.style.color = "red";



    })
})