import { files } from './data.js';

const unitConverter = {
    'B': 1,
    'KB': Math.pow(1024, 1),
    'MB': Math.pow(1024, 2),
    'GB': Math.pow(1024, 3)
};



const getTotalUnitSize = () => {
    let totalUnit = 0
    files.forEach(({ size: { length, unit = 'B' } }) => {
        totalUnit += convertToBytes(length, unit);
    });
    return totalUnit;
};

const convertToBytes = (value, unit) => {
    return unitConverter[unit] * value
    // if (unit === 'B') {
    //     return value;
    // };
    // if (unit === 'KB') {
    //     return value * Math.pow(1024, 1);
    // };
    // if (unit === 'MB') {
    //     return value * Math.pow(1024, 2);
    // };
    // if (unit === 'GB') {
    //     return value * Math.pow(1024, 3);
    // };
};
// console.log(convertToBytes());
console.log(getTotalUnitSize());

