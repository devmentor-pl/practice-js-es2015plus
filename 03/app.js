import {
    files
} from './data.js';

const init = () => getData(files);

const sumSizes = (el, length) => {
    let sum = 0;
    switch (el) {
        case 'KB':
            sum = sum + length * 1024;
            break;
        case 'MB':
            sum = sum + length * (1024 ** 2)
            break;
        case 'GB':
            sum = sum + length * (1024 ** 3);
            break;
        default:
            sum = sum + length;
            break;
    };
    return sum;
}

const getData = (args) => {
    let result;
    for (const key in args) {
        const {
            size: {
                length,
                unit,
            },
        } = args[key];
        result = sumSizes(unit, length);
    };
    return result;
};

document.addEventListener('DOMContentLoaded', init);

console.log(`Pliki zajmują łącznie: ${init()} b`);