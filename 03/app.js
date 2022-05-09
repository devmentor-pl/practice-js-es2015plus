import {files} from './data.js';

files.forEach(item => {
    if(!item.size.unit){
        item.size.unit = 'B'
    }
    switch (item.size.unit) {
        case 'B':
            item.size.length = Math.round(item.size.length*100/1024)/100
            item.size.unit = 'KB';
            break;
        case 'KB':
            break;
        case 'MB':
            item.size.length = item.size.length*1024
            item.size.unit = 'KB'
            break;
        case 'GB':
            item.size.length = item.size.length*1048576
            item.size.unit = 'KB'
    }
    console.log(item.size)
})

const [a, b, c, d] = files


const getSum = () => {
    let sum = 0
    files.forEach(({size:{length}}) => {
    
    sum = sum + length
    
}) 
    return sum
}

console.log(getSum())






