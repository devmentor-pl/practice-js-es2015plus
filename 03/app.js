import {files} from './data.js';

const getByteSize = (length, unit)=>{
    let byteSize = 0;
    switch (unit) {
        case "KB":
            byteSize = length * 1024
            break;
        case "MB":
            byteSize = length * 1024 * 1024
            break;
        case "GB":
            byteSize = length * 1024 * 1024 * 1024
            break;
        case "B":
            byteSize = length
            break;
        default:
            break;
    }
    return byteSize;
}

const getSum = ()=>{
    let sum = 0;

    files.forEach(file =>{
        const {
            size: {length},
            size: {unit = "B"}
        } = file;

        sum+= getByteSize(length, unit);
    });

    return sum
};

console.log(getSum());

