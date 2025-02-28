import {files} from './data.js';

const calculateSpace = (data, outputUnit = 'B') => data.reduce((total, { size: { length, unit = 'B' } }) => total + convertFileSize(length, unit, outputUnit), 0);

const convertFileSize = (length, inputUnit = 'B', outputUnit = 'B') => {
    const units = { B: 1, KB: 1024, MB: 1024 ** 2, GB: 1024 ** 3, TB: 1024 ** 4 };
    const bytes = length * (units[inputUnit] || 1);
    return bytes / (units[outputUnit] || 1);
};

console.log(calculateSpace(files, 'MB').toFixed(2));