import {files} from './data.js';

const convertToBytes = (length, unit) => {
    switch (unit) {
        case 'KB':
            return length * 1024;
        case 'MB':
            return length * 1024 * 1024;
        case 'GB':
            return length * 1024 * 1024 * 1024;
        default:
            return length;
    }
};

let totalSize = 0;

files.forEach(file => {
    const { length, unit = 'B' } = file.size;
    const sizeInBytes = convertToBytes(length, unit)
    totalSize += sizeInBytes
})

console.log(`Total size in bytes: ${totalSize}B`);