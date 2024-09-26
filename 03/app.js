import {files} from './data.js';

const units = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
};

const convertToBytes = ({ length, unit = 'B' }) => length * units[unit];

const calculateTotalSize = (fileList) => {
    return fileList.reduce((total, { size }) => total + convertToBytes(size), 0);
};

const totalSize = calculateTotalSize(files);
console.log(`Total size: ${totalSize} bytes`);