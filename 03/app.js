import {files} from './data.js';

const sizeOfAll = () => {
let sum = 0;
files.forEach(files => {
const {
    size,
} = files;

    if (size.unit === undefined) {
    sum += sum + size.length;
    } if (size.unit === 'KB') {
        sum += sum + size.length * 1024;
    } if (size.unit === 'MB') {
        sum += sum + size.length * 1024 * 1024;
    } if (size.unit === 'GB') {
        sum += sum + size.length * 1024 * 1024 * 1024;
    } 
})
console.log(`Pliki zajmują ${sum} B`);
}

sizeOfAll();

