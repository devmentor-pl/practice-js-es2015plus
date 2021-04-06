import {files} from './data.js';

const sizeOfAll = () => {
let sum = 0;
files.forEach(file => {
const {
    size: {
        length,
        unit,
    }
} = file;

    if (unit === undefined) {
    sum += sum + length;
    } if (unit === 'KB') {
        sum += sum + length * 1024;
    } if (unit === 'MB') {
        sum += sum + length * 1024 * 1024;
    } if (unit === 'GB') {
        sum += sum + length * 1024 * 1024 * 1024;
    } 
})
console.log(`Pliki zajmują ${sum} B`);
}

sizeOfAll();

