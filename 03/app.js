import { files } from './data.js';

const totalSizeInBytes = () => {
    const total = files.reduce(
        (totalSize, fileInfo) => {
            const { size: { length, unit = 'B' } } = fileInfo;
            return totalSize + calculateFileSizeInBytes(length, unit);
        }, 0);
        return total.toFixed(0);
}

function calculateFileSizeInBytes(length, unit) {
    let totalLength = length;

    switch (unit) {
        case 'GB': totalLength *= 1024;
        case 'MB': totalLength *= 1024;
        case 'KB': totalLength *= 1024;
        default:
    }

    return totalLength;
}

console.log('Total size: ' + totalSizeInBytes() + ' Bytes');