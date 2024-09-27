import {files} from './data.js';

const convertUnits = ({length , unit = 'B'}) => {
    const unitValue = {
        'B': 1,
        'KB': 1024,
        'MB': 1024 * 1024,
        'GB': 1024 * 1024 * 1024,
    };
    return length * unitValue[unit];
}

const sumFiles = (files) => {
    let totalBytes = 0;

    for(let i = 0; i < files.length; i++) {
        const sizeInBytes = convertUnits(files[i].size);
        totalBytes += sizeInBytes
    }
    return totalBytes
}
console.log(sumFiles(files))