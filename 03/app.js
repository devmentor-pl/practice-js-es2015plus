import {files} from './data.js';

function convertToBytes(length, unit) {
    const data = {
        'B': 1,
        'KB': 1024,
        'MB': 1024 * 1024,
        'GB': 1024 * 1024 * 1024,
    }

    if(typeof data[unit] === 'undefined') {
        console.error('Nie ma takiej jednostki.')
    }

    return data[unit] * length;
}

const getTotalSize = () => {
    let size = 0

    files.forEach(({size: {length, unit = 'B'}}) => {
        size += convertToBytes(length, unit)
    })

    return size
}

console.log(`Suma przestrzeni zajmowanej przez wszystkie pliki = ${getTotalSize()} B.`)