import {files} from './data.js';

const sizeToBytes = (fileSize, fileUnit) => {
    if(fileUnit === 'B') {
        return fileSize
    } else {
        if(fileUnit === 'KB') {
            return fileSize * 1024
        } else {
            if(fileUnit === 'MB') {
                return fileSize * Math.pow(1024, 2)
            }
        }
    }
    return fileSize * Math.pow(1024, 3)

}

let totalSize = 0

files.forEach(file => {
    const {size:{length, unit='B'}} = file

    totalSize += sizeToBytes(length, unit)
})

console.log(`całkowity rozmiar plików to ${totalSize} bajtów`)
