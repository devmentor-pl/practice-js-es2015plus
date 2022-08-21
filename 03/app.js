import { files } from './data.js';

function convertToB(length, unit) {
    const unitSize = {
        'B': 1,
        'KB': 1024,
        'MB': 1024 * 1024,
        'GB': 1024 * 1024 * 1024,
    }

    if (typeof [unit] === 'undefined') {
        console.log('Unit is undefined.');
    }

    const inBytes = unitSize[unit] * length;
    console.log('in bytes: ' + inBytes)
    return inBytes;
}

const calculateTotalSize = () => {
    let totalSize = 0;

    files.forEach(({ size: { length, unit = 'B' } }) => {
        totalSize += convertToB(length, unit)
    })
    return totalSize;
}

console.log(`Total sum of all files in bytes is ${calculateTotalSize()}`)

