import {
    files
} from './data.js';


const filesObjectArray = [...files];
console.log(filesObjectArray);

const calculateSize = (length, unit, size) => {
    return size = length * unit;
}

let totalSize = 0;

filesObjectArray.forEach(object => {
    let {
        size: {
            length,
            unit
        }
    } = object

    if (unit === 'KB') {
        unit = 1024;
    } else if (unit === 'MB') {
        unit = 1024 * 1024;
    } else if (unit === 'GB') {
        unit = 1024 * 1024 * 1024;
    } else {
        unit = 1;
    }

    let size = calculateSize(length, unit);
    totalSize += size;
})

console.log(totalSize);























/* let sum = 0;

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

console.log(sum); */