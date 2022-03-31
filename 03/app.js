import {files} from './data.js';
import countSizes from './countSizes.js';

// 1KB = 1024B, 1MB = 1024 KB, 1GB = 1024 MB

const sizeFiles = [];
const BToKB = (B = 0) => B / 1024;
const KBToMB = (KB = 0) => KB / 1024;
const GBToMB = (GB = 0) => GB * 1024; 

files.forEach(el => {
    const {size: {length, unit}} = el;
    if(unit === undefined) {
        sizeFiles.push(KBToMB(BToKB(length)));
    } else if(unit === 'KB') {
        sizeFiles.push(KBToMB(length));
    } else if(unit === 'MB') {
        sizeFiles.push(length)
    } else if( unit === 'GB') {
        sizeFiles.push(GBToMB(length));
    }
})

const sum = countSizes(sizeFiles);

console.log(`Rozmiar wszystkich plików wynosi ${sum.toFixed(2)}MB`);
