import {files} from './data.js';

function calculateTotalSize (arr) { 
    total = [];
    arr.forEach(file => {
        const {
            size: {length: orgLenght},
            size: {unit: unit}
           } = file;
        convertedLenght = sizeToBytes(orgLenght, unit);
        total.push(parseInt(convertedLenght)); 
    });
    totalLenght = calculateTotal(total);
    console.log(totalLenght + " " + "bytes");
}
    
 function sizeToBytes(a, size) {
    if(typeof size === 'undefined') {
        size ='Bytes';
    } 
    switch (size) {
        case 'Bytes':
            return a;
            break;
        case 'KB':
            result = a * 1024;
            return result;
            break;
        case 'MB':
            result = a * Math.pow(1024,2);
            return result;
            break;
        case 'GB':
            result = a * Math.pow(1024,3);
            return result;
    }
}
    
function calculateTotal(arr) {
    return arr.reduce( (acc, num) => {
    return acc + num;
    }, 0);
}
    
calculateTotalSize(files);
    
    