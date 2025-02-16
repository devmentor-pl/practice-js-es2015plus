import {files} from './data.js';
import convertUnit from './convertUnit.js';



const calculateLength = (files) => {
    let totalLength = 0;

    files.forEach(({ name, size: {length, unit = 'B'}}) => {
        length = convertUnit(unit, length);
        totalLength += length;
    })
    return totalLength;
}

const totalLength = calculateLength(files);
console.log(`Suma przestrzeni zajmowanej przez wszystkie pliki wynosi ${totalLength.toFixed(2)} MB`);