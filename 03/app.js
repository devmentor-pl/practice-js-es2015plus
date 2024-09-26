import {files} from './data.js';

const convertToMBArr = (length, unit) => {
    if(!unit) {
        return length / 1024 ** 2
    } else if (unit === 'KB') {
        return length / 1024;
    } else if (unit === 'MB') {
        return length;
    } else if (unit === 'GB') {
        return length * 1024;
    } 
};
const arrMB = files.map(file => {
    const { length, unit } = file.size;
    return convertToMBArr(length, unit);
});
const sizeInMB = arrMB.reduce((a, b) => a+ b, 0);
const sizeInKB = sizeInMB * 1024;
const sizeInGB = sizeInMB / 1024;
const sizeInB = sizeInMB * (1024 ** 2);

console.log(sizeInB + 'B');
console.log(sizeInKB + 'KB');
console.log(sizeInMB + 'MB');
console.log(sizeInGB + 'GB');

