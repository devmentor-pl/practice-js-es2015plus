import {files} from './data.js';

document.addEventListener('DOMContentLoaded', init)

function init() {
    
    const sumAllFiles = () => {
        let totalSum = 0;
        files.forEach(file => {
           const { size: {length, unit} } = file;
           const sizeInMB = changeSizeOfFileToMB(length, unit);
           totalSum += sizeInMB;
        })

        return totalSum.toFixed(2) + ' MB'

    }

    alert(`suma wszystkich plików to ${sumAllFiles()}`)

}

function changeSizeOfFileToMB(length, unit) {
    switch(unit) {
        case 'KB':
           return length = length / 1024;
        break;
        case 'MB':
           return length
        break;
        case 'GB':
           return length = length * 1024;
        break;
        default:
            return length = length / 1024 / 1024;
    }
}