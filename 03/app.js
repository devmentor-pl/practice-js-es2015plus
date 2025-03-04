import {files} from './data.js';

// transform files sizes to one unit -switch??
// sum all units

const convertUnits = ({length, unit = 'B'}) => {
    switch (unit) {
        case 'KB':
            return length * 1024;
        case 'MB':
            return length * 1024 * 1024;
        case 'GB':
            return length * 1024 * 1024 * 1024;
        default:
            return length;
    }
};

const calculateSize = (files) => {
    return files.reduce((total, file) => {
        const {size} = file;
        return total + convertUnits(size);
    }, 0);
};

const totalSize = calculateSize(files);
console.log(`całkowita wielkość to: ${totalSize}B`);