import {files} from './data.js';
let totalSize = 0

function changeToBytes(length, unit = 'B') {

    if(unit === 'B') {
        return length
    } else if (unit === "KB") {
        return length * 1024
    } else if (unit === "MB") {
        return length * 1024 * 1024
    } else if (unit === "GB") {
        return length * 1024 * 1024 * 1024
    }
} 

const SumAllSizes = () => {
    files.forEach(file => {
        // console.log(file);
    
        const { size: {length}} = file
        // console.log(length);
        const { size: {unit}} = file
        // console.log(unit);
        
        totalSize = totalSize + (changeToBytes(length, unit))
    })
    return totalSize
}


console.log("Suma wszystkich plików:", " ", SumAllSizes(), "B");