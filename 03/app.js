import {files} from './data.js';

let fileSize = 0;

files.forEach(e => {

    const {name, size} = e;
    const {length, unit = 'B'} = size;

    if (unit === 'B') {
        fileSize += length;
    } else if (unit === 'KB') {
        fileSize += (length * 1024);
    } else if (unit === 'MB') {
        fileSize += (length * (1024 * 1024));
    } else if (unit === 'GB') {
        fileSize += (length * (1024 * 1024 * 1024));
    }
    console.log(`${name}: ${length} ${unit}`);
});

console.log(`All files size in K: ${fileSize}`);
console.log(`All files size in KB: ${fileSize / 1024}`);
console.log(`All files size in MB: ${fileSize / (1024 * 1024)}`);
console.log(`All files size in GB: ${fileSize / (1024 * 1024 * 1024)}`);
