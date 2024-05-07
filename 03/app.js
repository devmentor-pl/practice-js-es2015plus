
import {files} from './data.js';

console.log(files);

// wielkość pojedynczej przestrzeni
const getSize = (length, unit) => {
    let size;
    switch(unit) {
        case "B":
            size = length;
            break;
        case 'KB':
            size = length * 1024;
            break;
        case 'MB':
            size = length * 1048576;
            break;
        case 'GB':
            size = length * 1073741824;
            break;
        default: alert('Jednostka nie została określona!');
    }
    return size;
}

// suma całości
let sum = 0;
files.forEach(function(file){
    const { size } = file;
    const { length, unit = 'B'} = size;
    console.log(length, unit); // ok
    sum += getSize(length, unit); 
})
const areaSum = (sum / 1048576).toFixed(1) + ' MB'; 
console.log(areaSum);















