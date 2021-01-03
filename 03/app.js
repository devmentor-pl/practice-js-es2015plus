import {files} from './data.js';

const sumSizes = (files) => {
    const sizes = files.map((file) => file.size);
    let sum = 0;
    sizes.forEach(function(size) {
        sum += getLengthInBytes(size);
    })
    return sum;
}

const getLengthInBytes = (size) => {
    const {
        length,
        unit = 'B',
    } = size;
    let lengthInBytes = length;

    switch(unit) {
        case 'GB':
            lengthInBytes = downgradeUnit(lengthInBytes);
        case 'MB':
            lengthInBytes = downgradeUnit(lengthInBytes);
        case 'KB':
            lengthInBytes = downgradeUnit(lengthInBytes);
    }
    return lengthInBytes;
};

const downgradeUnit = (length) => {
    return length * 1024;
};

const upgradeUnit = (length, power) => {
    return length / Math.pow(1024, power);
}

const sum = sumSizes(files);

console.log(`Łączny rozmiar plików wynosi ${sum}B,\nczyli ${upgradeUnit(sum, 2)}MB`);