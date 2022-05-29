import {files} from './data.js';

function convertToBytes(length, unit) {
    if(unit === 'B') {
        return length
    } else if(unit === 'KB') {
        return length * 1024
    } else if(unit === 'MB') {
        return length * 1024 * 1024
    } else if(unit === 'GB') {
        return length * 1024 * 1024 * 1024
    }        
}

const getTotalSize = () => {
    let size = 0

    files.forEach(({size: {length, unit = 'B'}}) => {
        size += convertToBytes(length, unit)
    })

    return size
}

console.log(`Suma przestrzeni zajmowanej przez wszystkie pliki = ${getTotalSize()} B.`)