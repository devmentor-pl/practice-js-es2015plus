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

        const priceItem = input.dataset.price;
        console.log(priceItem)
        total += parseInt(input.value * priceItem);

        console.log(`bo ${input.value} * ${priceItem} jest =  ${total}`)
        // (zapytac parseInt, parseFloat)


        console.log(total)

        totalSpan.innerHTML = total + 'pln'
        totalSpan.style.color = "red";



    })
})