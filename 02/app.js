// KONSULTACJE - OPIS W TREŚCI
// w momencie pobierania danych z obiektów używaj destrukturyzacji.

// pobieramy wpisane wartości i ceny //DZIAŁA
const getInputsValue = event => {
    event.preventDefault();
    event.stopPropagation();
    
    event.target.setAttribute('value', event.target.value); //1
    const a = parseInt(event.target.value);
    // console.log('a=>', a);
    
    const b = parseInt(event.target.getAttribute('data-price'));
    // console.log('b=> ', b); 
    
    //pobieramy wartości do tablicy i zwracamy
    const arr = [a, b]
    console.log(arr);
    return arr;
}

const cart = document.querySelector('.cart');
const inputEl = Array.from(cart.getElementsByClassName('cart__quantity')); // array

inputEl.forEach(function(input) {
    input.addEventListener('change', getInputsValue);
})

//obliczamy sumę 
const button = cart.querySelector('button');
console.log(button);

const getSum = event => {
    event.preventDefault();
    event.stopPropagation();
 // BŁĄD - nic się nie oblicza   
    getInputsValue = [a + b];
    sum += [a + b];
    console.log(sum);
    return sum;
}

button.addEventListener('submit', getSum)

// WSTAWIAMY SUMĘ 
const totalPrice = cart.querySelector('.cart__total-price');
console.log(totalPrice);
totalPrice.innerText = getSum; //BłĄD - wstawia całą funkcję, zamiast wyniku

