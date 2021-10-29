import {files} from './data.js';

const convertFilesLength = () => {
    const size = {
        KB: 1024,
        MB: 1024 * 1024,
        GB: 1024 * 1024 * 1024
    }

    return size;
}

let totalArr = [];

const singleSizeInformation = (length, unit, convertedSize) => {

    if(unit === 'GB') {
        totalArr.push(length * convertedSize.GB)
    }
    else if (unit === 'MB') {
        totalArr.push(length * convertedSize.MB)
    }
    else if (unit === 'KB') {
        totalArr.push(length * convertedSize.KB)
    }
    else {
        totalArr.push(length)
    }
}

const filesInformation = (files) => {
    let total = 0;
    files.forEach((el) =>{
        const {
            name,
            size:{length}, //,unit
            size:{unit}
        } = el;

        singleSizeInformation(parseFloat(length), unit, convertFilesLength());
    });
    total = totalArr.reduce((a, b) => {
        return a+b;
    }, 0);
    const text = `Total size of images is ${total} bajts`;
    console.log(text);
}
filesInformation(files);