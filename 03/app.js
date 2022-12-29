import {files} from './data.js';

const init = () => {
    calcTotalSize(files);
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