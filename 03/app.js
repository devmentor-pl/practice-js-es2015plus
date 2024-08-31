import {files} from './data.js';

let TotalFilesSize = 0


const convertToMB = (length, unit) => {
    switch(unit) {
        case 'B':
            return length / (1024 * 1024)
        case 'KB':
            return length / 1024
        case 'MB':
            return length
        case "GB" :
            return length * 1024
        default :
            return 0

    }
} 
const calculateFilesSize = (files) => {
    return files.reduce((totalSize, file) => {
        const {size: {length, unit = 'B'}} = file
        return totalSize + convertToMB(length, unit);
    },0);
}
const totalFileSize = calculateFilesSize(files)
console.log(` the total files size in MB is ${totalFileSize.toFixed()}`)
