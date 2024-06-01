import {files} from './data.js';

const fileDataUpload = elem => {
    const { size: { length = 0, unit = 'B' }} = elem;
    return [length, unit];
};

const sizeMultiplier = unit => {
    const sizeTable = ['B', 'KB', 'MB', 'GB'];
    return parseInt(Math.pow(1024, sizeTable.indexOf(unit)));
}

const getSize = elem => {
    const [length, unit] = elem;
    return parseInt(length * sizeMultiplier(unit));
}

const totalSize = sumTotal => {
    files.forEach(elem => {
        sumTotal += getSize(fileDataUpload(elem));
    })
    return sumTotal;
};

console.log('Całkowity rozmiar wynosi: '+totalSize(0)+' B');