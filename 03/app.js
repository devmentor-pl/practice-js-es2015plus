import {
    files
} from './data.js';

const countSum = () => {
    let sumFiles = 0;
    files.forEach(file => {
        const {
            size: {
                length = 0,
                unit = 'B'
            }
        } = file;
        sumFiles += changeSize(length, unit)
    });
    console.log(`Rozmiar wszystkich plików to: ${sumFiles}B`);
}

const changeSize = (length, unit) => {
    let sizeInBytes = 0;
    switch (unit) {
        case 'B':
            sizeInBytes = length;
        case 'KB':
            sizeInBytes = length * 1024;
            break;
        case 'MB':
            sizeInBytes = length * 1024 * 1024;
            break;
        case 'GB':
            sizeInBytes = length * 1024 * 1024 * 1024;
            break;
        default:
            break;
    }
    return sizeInBytes;
}

document.addEventListener('DOMContentLoaded', countSum);