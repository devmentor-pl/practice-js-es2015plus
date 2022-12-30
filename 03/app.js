import {files} from './data.js';

document.addEventListener('DOMContentLoaded', init);

const init = () => {
    const result = calcTotalSize(files);
    console.log(result);
}

const calcTotalSize = (files) => {

    let sum = 0;
    files.forEach(file => {
        const {
            size: {
                length = null,
                unit = 'B'
            }
        } = file;
        sum += convertSize(length, unit)
    });
    return sum
}

const convertSize = (length, unit) => {
    if ( unit === "GB" ) {
        return length * 1073741824;
    }
    if ( unit === "MB" ) {
        return length * 1048576;
    }
    if ( unit === "KB" ) {
        return length * 1024;
    } else {
        return length
    }
}