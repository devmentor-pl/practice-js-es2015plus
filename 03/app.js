import {
    files
} from './data.js';

let sum = 0;

const convertSize = (obj) => {
    let size;
    switch (obj.size.unit) {
        case 'KB':
            size = obj.size.length * 1024;
            break;

        case 'MB':
            size = obj.size.length * 1024 * 1024;
            break;

        case 'GB':
            size = obj.size.length * 1024 * 1024 * 1024;
            break;

        default:
            size = obj.size.length;
            break;
    }
    return size;
}

files.forEach(file => {
    let size = convertSize(file)
    sum += size;
})

console.log(sum);