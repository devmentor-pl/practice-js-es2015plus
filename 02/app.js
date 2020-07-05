//console.log("dddd")
const inputClass = Array.from(document.getElementsByClassName('cart__quantity'));
//console.log(inputClass);
const button = document.querySelector('button')
const span = document.querySelector('.cart__total-price')
//span.innerText = 

inputClass.forEach((el) =>{
    console.log(el.dataset.price)
    const a = []
    a.push(el)
    console.log(a)
    el.addEventListener('change', function(){
        
        const s = parseInt(this.value) * parseInt(this.dataset.price);
        
        button.addEventListener('click', function(e){
            e.preventDefault()
            
            

            //span.innerText= 
        })
    })
})