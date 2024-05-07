document.addEventListener(
    'DOMContentLoaded',
    () => {
        console.log('TEST')

        const inputList = document.getElementsByClassName('cart__quantity')
        console.log(inputList)

        const sum = document.querySelector('.cart__total-price')
        console.log(sum)

        const btn = document.querySelector('.cart__btn-calculate')
        console.log(btn)

        btn.addEventListener(
            'click',
            () => {
                let cost = 0

                const currentInputList = [...inputList]
                
                currentInputList.forEach((item) => {
                    const {dataset: {price}, value} = item
                    cost += price * value
                })

                sum.innerText = cost

            })
    })