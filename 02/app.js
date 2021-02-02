const createUlError = (el) => {
    const ulErrorsEl = document.createElement('ul');
    ulErrorsEl.classList.add('errors');
    el.appendChild(ulErrorsEl);
}

const btnEl = document.querySelector('.cart__btn-calculate');
console.log(btnEl);

createUlError(btnEl.parentElement);


const showPrice = (e) => {

    const inputListEl = document.getElementsByClassName('cart__quantity');

    const inputArray = [...inputListEl];


    const ulErrorsEl = document.querySelector('.errors');
    const errors = [];
    ulErrorsEl.innerHTML = '';

    const resultPrice = [];

    inputArray.forEach(element => {

        const inputValue = getData(element);
        validation(errors, inputValue);
        resultPrice.push(inputValue);
    });


    if (errors.length > 0) {
        e.preventDefault();

        errors.forEach(error => {
            showErrors(error);
        });

    } else {
        const resultSum = calcSum(resultPrice);

        const resultEl = document.querySelector('.cart__total-price');
        resultEl.innerText = resultSum;

        e.preventDefault();
    }
}


btnEl.addEventListener('click', showPrice);


const getData = (obj) => {
    const { value } = obj;
    return value;
}


const validation = (errors, element) => {
    if (element.length === 0) {
        errors.push('Field is required !!!');
    }
    if (isNaN(element)) {
        errors.push('Enter a number for all fields !!!');
    }
}


const showErrors = (error) => {
    const ulErrorsEl = document.querySelector('.errors');
    const newErrorLi = document.createElement('li');
    newErrorLi.innerText = error;
    newErrorLi.style.color = 'red'
    ulErrorsEl.appendChild(newErrorLi);
}


const calcSum = (arr) => {
    let sum = 0;
    arr.forEach(num => {
        sum += parseInt(num);
    });
    return sum;
}