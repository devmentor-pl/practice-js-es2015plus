import {files} from './data.js';

files.forEach(function(el){
    //console.log(el.size.length)
    let b = 0;
    let mb = 0;
    let gb = 0;
    let kb= 0;
    if(!el.size.unit){
        let b = el.size.length
        console.log(b)
    }
    if(el.size.unit === 'KB'){
        let kb = el.size.length * 1024
        console.log(kb)
    }

    if(el.size.unit === 'MB'){
        let mb = el.size.length * 1024 * 1024
        console.log(mb)
    }

    if(el.size.unit === 'GB'){
        let gb = el.size.length *1024 * 1024 * 1024
        console.log(gb)
    }

    //const sum = b + kb + mb + gb
    console.log(kb+= kb)
})