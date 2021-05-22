
const total = document.querySelector('.cart__total-price');
const inputs = [... document.getElementsByClassName('cart__quantity')];
const button = document.querySelector('.cart__btn-calculate');

button.addEventListener('click', e => {
    e.preventDefault()
    let totalPrice = 0;

    inputs.forEach(el => {
        const {value: quantity, dataset: {price: unitPrice}} = el;
        totalPrice += quantity * unitPrice;
    });

    total.innerText = numberSeparator(`${totalPrice} `);
    total.style.color = 'blue';
    button.style.backgroundColor = 'green';
});

inputs.forEach(e => {
    e.value = '';
    e.setAttribute('autocomplete','off');
    e.setAttribute('onkeydown','return numberOnly(event)');
    console.log(e)
});

// only 0-9 characters
const numberOnly = (event => {
	let key = event.keyCode;
	return ((key >= 48 && key <= 57) || key == 8);
});

// separator 1000
const numberSeparator = (e => {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
});
