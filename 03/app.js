import {
    files
} from './data.js';

let sum = 0;
let kB = 1024;

files.forEach(file => {

    const {
        size,
        name
    } = file;

    if (!file.size.unit) {
        sum += size.length;
        console.log(`${file.name} ma ${sum}B `)
    }

    if (file.size.unit === 'KB') {
        sum += size.length * kB;
        console.log(`${file.name} ma ${sum} B `)
    }
    if (file.size.unit === 'MB') {
        sum += size.length * kB * kB;
        console.log(`${file.name} ma ${sum} B `)
    }

    if (file.size.unit === 'GB') {
        sum += size.length * kB * kB * kB;
        console.log(`${file.name} ma ${sum} B `)

    }
})