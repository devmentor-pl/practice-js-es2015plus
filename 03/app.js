import {files} from './data.js';
const data = files;


const convertToBytes = ({ size, unit = 'B'}) => {
    const sizeInBytes = parseInt(size, 10);

    // Konwersja jednostek na bajty
    switch (unit.toUpperCase()) {
        case 'KB':
            return sizeInBytes * 1024;
        case 'MB':
            return sizeInBytes * 1024 * 1024;
        case 'GB':
            return sizeInBytes * 1024 * 1024 * 1024;
        default:
            return sizeInBytes;
    }
};



