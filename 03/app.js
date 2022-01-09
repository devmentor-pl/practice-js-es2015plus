import {files} from './data.js';

let arrUnitSize = [];
let result = 0;

const getUnitSize = (arr) => {
    arr.forEach(item => {
        const {size: {length: fileLength, unit: fileUnit}} = item;
        arrUnitSize.push({fileLength, fileUnit})
    })
}


const changeUnitSize = (arr) => {
    arr.forEach(item => {
        if (item.fileUnit === 'KB') {
            result += (item.fileLength / 1024)
        } else if (item.fileUnit === 'MB') {
            result += item.fileLength
        } else if (item.fileUnit === 'GB') {
            result += (item.fileLength * 1000)
        } else {
            result += (item.fileLength / (Math.pow(1024, 2)));
        }
    })
    console.log(result)
}
getUnitSize(files);
changeUnitSize(arrUnitSize)
