import {files} from './data.js';

//1KB = 1024B, 1MB = 1024KB itp.

const convertToBytes = (length, unit) => {
    const units = {
        'B': 1,
        'KB': 1024,
        'MB': 1024 * 1024,
        'GB': 1024 * 1024 * 1024,
    };
    return length * (units[unit] || 1);
};

const calculateTotalSize = (fileList) => {
    return fileList.reduce((total, { size: { length, unit = 'B'} }) => {
        return total + convertToBytes(length, unit);
    }, 0);
};

const totalSizeInBytes = calculateTotalSize(files);
console.log(`Rozmiar wszystkich plików to ${totalSizeInBytes} B`);