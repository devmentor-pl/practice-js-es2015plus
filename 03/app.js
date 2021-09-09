import { files } from './data.js';

const init = () => calcFilesTotalSize(files);

const calcFilesTotalSize = (files) => {
    const filesSizesArr = calcFilesSizes(files);
    const totalSize = calcTotalSize(filesSizesArr).toFixed(4);
    console.log(`Total size of files: ${totalSize} MB`);
};

const calcFilesSizes = (files) => {
    const filesSizesArr = [];
    files.forEach((file) => {
        const fileSizeMB = calcSizeMB(file);
        filesSizesArr.push(fileSizeMB);
    });
    return filesSizesArr;
}

const calcSizeMB = ({ size: { length, unit = 'B' } }) => convertToMB[unit](length);

const convertToMB = {
    'B': length => length / (1024 * 1024),
    'KB': length => length / 1024,
    'MB': length => length,
    'GB': length => length * 1024,
};

const calcTotalSize = (sizesArr) => sizesArr.reduce((a, b) => a + b, 0);

document.addEventListener('DOMContentLoaded', init);


