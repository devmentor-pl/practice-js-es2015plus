const totalPriceEl = document.querySelector(".cart__total-price"); 
const btnEl = document.querySelector(".cart__btn-calculate");
const cartItemList = [...document.getElementsByClassName("cart__item")]; 


let totalPrice = 0;

const calculateCart = () => {

    cartItemList.forEach(item => {
        const input = item.querySelector(".cart__quantity");
        console.log(input);

        if(input.value.trim() === '') {
            showError('nie dodałeś nic do listy')
            return
        }

        const {value, dataset: {price} } = input
       totalPrice = totalPrice + (parseInt(value) * parseInt(price))
    })

    totalPriceEl.innerText = totalPrice
}



btnEl.addEventListener("click", calculateCart);
