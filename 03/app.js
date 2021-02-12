import {files} from './data.js';

const imageConvertSize = (length, unit) => {
    let  imageSize = 0;

    if(unit === 'KB') {
        imageSize = 1024 * length;
    }else if (unit === 'MB') {
        imageSize = (1024 * 1024) * length;
    } else if (unit === 'GB') {
        imageSize = (1024 * 1024 * 1024) * length;
    } else {
        imageSize = length;
    }
    return imageSize;
}

const convertBytes = (bytes) => {
    return bytes / 1024;
}

const calcSize = () => {
    let sum = 0;
    files.forEach((item) => {
        const {
            size: {
                length,
                unit
            }
        } = item;

        const imageSize = imageConvertSize(length, unit);

        
        sum += imageSize;
    });
    
    const kBSize = convertBytes(sum);

    return kBSize;
}

const totalSize = calcSize();

console.log(`Total size in KB is: ${totalSize}`);





