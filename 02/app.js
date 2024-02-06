const totalPrice = document.querySelector('.cart__total-price')
const btnCalculate = document.querySelector('.cart__btn-calculate')
const inputList = document.getElementsByClassName('cart__item')

const formSubmit = (e) => {
  e.preventDefault()
  let cart = []
  const itemsData = ([...inputList])
  itemsData.forEach(el => {
    const childEl = el.firstElementChild
    const inputPrice = childEl.dataset.price
    const inputValue = childEl.value
    const totalElPrice = Number(inputPrice) * Number(inputValue)
    cart.push(totalElPrice)
  })
  calculateTotalPrice(cart)
}

const calculateTotalPrice = (array) => {
  let totalValue = array.reduce(function(acc, current) {
    return acc + current
  }, 0)
  renderTotalPrice(totalValue)

}
const renderTotalPrice = (value) => {
  totalPrice.innerText = ''
  totalPrice.innerText = `${value}`
}

btnCalculate.addEventListener('click', formSubmit)

