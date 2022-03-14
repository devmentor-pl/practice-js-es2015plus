import {files} from './data.js';

const convertToByte = (elSize, elUnit) => {
    if(elUnit === 'B') {
       return elSize;
    } else if (elUnit === 'KB') {
        return elSize * 1024;
    } else if (elUnit === 'MB') {
        return elSize * 1024  * 1024;
    } else if (elUnit === 'GB') {
        return elSize * 1024  * 1024 * 1024;
    }
}

const sumUpFilesSizes = (files) => {
    let total = 0;

    files.forEach((obj) => {
        const {size: {length}, size: {unit = 'B'}} = obj;
        total += convertToByte(length,unit);
    })

    return total;
}

console.log(sumUpFilesSizes(files));