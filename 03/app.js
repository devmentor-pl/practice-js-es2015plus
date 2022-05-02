import { files } from './data.js';

const getTotalUnitSize = () => {
    let totalUnit = 0
    files.forEach(({ size: { length, unit = 'B' } }) => {
        totalUnit += convertToBytes(length, unit);
    });
    return totalUnit;
};

const convertToBytes = (value, unit) => {
    if (unit === 'B') {
        return value;
    };
    if (unit === 'KB') {
        return value * Math.pow(1024, 1);
    };
    if (unit === 'MB') {
        return value * Math.pow(1024, 2);
    };
    if (unit === 'GB') {
        return value * Math.pow(1024, 3);
    };
};
console.log(getTotalUnitSize());

