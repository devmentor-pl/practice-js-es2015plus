import { files } from './data.js';

const convertToBytes = (length, unit = 'B') => {
    switch (unit) {
        case 'B':
            return length;
        case 'KB':
            return length * 1024;
        case 'MB':
            return length * 1024 ** 2;
        case "GB":
            return length * 1024 ** 3;
    };
};

const getTotalSize = () => {
    let size = 0;

    files.forEach(file => {
        const { size: { length, unit } } = file;
        size += convertToBytes(length, unit);
    });
    return size;
};


console.log(getTotalSize());