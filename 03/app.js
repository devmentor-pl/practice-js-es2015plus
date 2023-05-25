import {files} from './data.js';

const convertUnitToBytes = (length, unit) => {
    switch (unit){
        case 'KB':
            length = length * 1024;
            break
        case 'MB':
            length = length * 1024 * 1024;
            break;
        case 'GB':
            length = length * 1024 * 1024 * 1024;
            break
        default:
            console.log('Jednostka jest prawidłowa.')
    }
    return length
};

const showMemoryUse = ([...files]) => {
    console.log(files);
    let memoryUse = 0;

    files.forEach((item) => {
        const {size: {length}, size:{unit = 'B'}} = item;
        memoryUse += convertUnitToBytes(length, unit) 
    })
    return memoryUse;
}

console.log(showMemoryUse(files))