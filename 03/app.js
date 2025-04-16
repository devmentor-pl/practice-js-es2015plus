import {files} from './data.js';

const convertToBytes = (size) => {
    const { length, unit = 'B' } = size

    const kb = 1024
    const mb = kb * 1024
    const gb = mb * 1024

    switch (unit){
        case 'KB':
            return length * kb
        case 'MB':
            return length * mb
        case 'GB':
            return length * gb
        case 'B':
        default:
            return length
    }
}


const calcTotalFileSize = (files) => {
    const sizesInBytes = files.map(file => convertToBytes(file.size))

    const totalFilesSize = sizesInBytes.reduce((acc, currSize) => acc + currSize, 0)

    return totalFilesSize
    
}


const totalSizeInBytes = calcTotalFileSize(files)

console.log(`Całkowity rozmiar plików w bajtach(Bytes): ${totalSizeInBytes} B` )


