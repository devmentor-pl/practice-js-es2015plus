import { files } from './data.js';

let totalSize = 0;


const checkUnit = (element) => {

    let size = '';
    const {size: {length}, size: {unit='MB'}} = element;
    console.log(length,unit);

    if (unit === 'KB') {
        size = length / 1024;
    } else if (unit === 'GB') {
        size = length * 1024;
    } else if (unit === 'MB') {
        size = length;
    }
    totalSize = Number(totalSize + size);
    console.log(totalSize.toFixed(2) + ' MB');

}


files.forEach((element) => {

    checkUnit(element);
});



