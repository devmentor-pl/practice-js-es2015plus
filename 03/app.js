import {files} from './data.js';

console.log('zad 3')

console.log(files)

const addSize = (length, unit) => {
    if(unit === undefined) {
        return length
    }
    if(unit === 'KB') {
        return length * 1024
    }
    if(unit === 'MB') {
        return length * 1024 * 1024
    }
    if(unit === 'GB') {
        return length * 1024 * 1024 * 1024
    }
}

const getFiles = files => {
    console.log(files)
    let totalSize = 0
    files.forEach(file => {
        const {name} = file
        const {size: {length}} = file
        const {size: {unit}} = file
        console.log(name, length, unit)

        totalSize += addSize(length, unit)

        // if(unit === undefined) {
        //     totalSize += length
        // }
        // if(unit === 'KB') {
        //     totalSize += length * 1024
        // }
        // if(unit === 'MB') {
        //     totalSize += length * 1024 * 1024
        // }
        // if(unit === 'GB') {
        //     totalSize += length * 1024 * 1024 * 1024
        // }
    
    })
    console.log('---- total Size ----')
    console.log(totalSize.toFixed(2) +' B')
    console.log((totalSize / 1024).toFixed(2) +' KB')
    console.log((totalSize / 1024 / 1024).toFixed(2) +' MB')
    console.log((totalSize / 1024 / 1024 / 1024).toFixed(2) +' GB')
}

getFiles(files)


// results
// ----------------
// 981196400.60 B
// 958199.61 KB
// 935.74 MB
// 0.91 GB

// result with using fn OKEY
// ----------------
// 981196400.60 B
// 958199.61 KB
// 935.74 MB
// 0.91 GB










