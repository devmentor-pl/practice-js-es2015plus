import {files} from './data.js';
 let sum = 0;

files.forEach(el => {
    //console.log(el.size.length)
    const {size} = el;
    if(!el.size.unit){
       sum += size.length
    }
    
    if(el.size.unit === 'KB'){
        sum += size.length * 1024  
    }

    if(el.size.unit === 'MB'){
        sum += size.length * 1024 * 1024
    }

    if(el.size.unit === 'GB'){
        sum += size.length *1024 * 1024 * 1024
    }

})
console.log(sum)