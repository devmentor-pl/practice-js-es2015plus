import {files} from './data.js';


const convertToByte = ({ length, unit }) => {
    const sizeInBytes = parseFloat(length);

    if (isNaN(sizeInBytes)) {
        return 0; 
    }

    switch (unit) {
        case 'KB':
            return Math.round(sizeInBytes * 1024);
        case 'MB':
            return Math.round(sizeInBytes * 1024 * 1024);
        case 'GB':
          	return Math.round(sizeInBytes * 1024 * 1024 * 1024);
        default:
            return Math.round(sizeInBytes);
    }
}

const filesInBytes = [...files].map(file => {
    const { length, unit } = file.size;
    const sizeInBytes = convertToByte({ length, unit });

    return sizeInBytes
});

console.log(filesInBytes);
