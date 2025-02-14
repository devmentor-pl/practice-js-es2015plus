import {files} from './data.js';
import convertUnit from './convertUnit.js';

let totalLength = 0;

const calculateLength = (files) => {

    files.forEach(({ name, size: {length, unit = 'B'}}) => {
        length = convertUnit(unit, length);
        totalLength += length;
    })
    console.log(`Suma przestrzeni zajmowanej przez wszystkie pliki wynosi ${totalLength.toFixed(2)} MB`);
}

calculateLength(files);