// import {files} from './data.js';

// nie importuje danych z data.js
// w konsoli wyświetla komunikat: Uncaught SyntaxError: Cannot use import statement outside a module

const files = [
    {
        'name': 'img1.jpg',
        'size': {
            length: 215,
        }
    },
    {
        'name': 'img2.jpg',
        'size': {
            length: 145,
            unit: 'KB',
        }
    },
    {
        'name': 'img3.jpg',
        'size': {
            length: 14,
            unit: 'MB',
        }
    },
    {
        'name': 'img4.jpg',
        'size': {
            length: 0.9,
            unit: 'GB',
        }
    }
];


let fileSize = 0;

files.forEach(e => {

    const {name, size} = e;
    const {length, unit = 'B'} = size;

    if (unit === 'B') {
        fileSize += length;
    } else if (unit === 'KB') {
        fileSize += (length * 1024);
    } else if (unit === 'MB') {
        fileSize += (length * (1024 * 1024));
    } else if (unit === 'GB') {
        fileSize += (length * (1024 * 1024 * 1024));
    }
    console.log(`${name}: ${length} ${unit}`);
});

console.log(`All files size in K: ${fileSize}`);
console.log(`All files size in KB: ${fileSize / 1024}`);
console.log(`All files size in MB: ${fileSize / (1024 * 1024)}`);
console.log(`All files size in GB: ${fileSize / (1024 * 1024 * 1024)}`);
