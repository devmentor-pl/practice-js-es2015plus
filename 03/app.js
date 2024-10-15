import { files } from './data.js';

const convertToBytes = (length, unit = "b") => {
    switch (unit) {
        case "KB":
            return length * 1024;
        case "MB":
            return length * 1024 * 1024;
        case "GB":
            return length * 1024 * 1024 * 1024;
        default:
            return length;
    };
};

const calculateTotalSize = () => {
    let totalSize = 0;
    for (const { size: { length, unit = "B" } } of files) {
        totalSize += convertToBytes(length, unit);
    }
    return totalSize;
}

const init = () => {
    console.log(calculateTotalSize());
}

init();
