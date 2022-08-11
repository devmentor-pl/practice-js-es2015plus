import {files} from './data.js';

const convert = (length, unit) => {
    if(unit === 'B') {
        return length
    } else if (unit === 'KB'){
        return length * 1024;
    } else if (unit === 'MB'){
        return length * 1024 * 1024;
    } else if (unit === 'GB'){
        return length * 1024 * 1024 * 1024;
    }
};

const summary = (files) => {
    let total = 0;

    files.forEach((item) => {
        const {size: {length}, size: {unit = 'B'}} = item;
        total += convert(length,unit);
    })

    return total;
}

console.log(summary(files)); 
