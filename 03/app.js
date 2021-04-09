import { files } from './data.js';

const getData = () => {
    const data = [];
    for (let { size: { length, unit = 'B' } } of files) {
        if (unit === 'KB') {
            length = length * 1024;
            unit = 'B';
        }
        if (unit === 'MB') {
            length = length * 1024 * 1024;
            unit = 'B';
        }
        if (unit === 'GB') {
            length = length * 1024 * 1024 * 1024;
            unit = 'B';
        }
        console.log(`Długość: ${length}, jednostka ${unit}`);
        data.push(length);
    }
    return data;
}

const calcSum = params => {
    let sum = 0;
    params.forEach(num => {
        sum += num;
    });
    return sum;
}

const resulKb = sum => {
    sum = sum / 1024;
    return sum
}


const dataArr = getData();
const sumB = calcSum(dataArr);
const sumKb = resulKb(sumB);


console.log(`Zajęta pamięć przez pliki to: ${sumB} [B]`);
console.log(`Zajęta pamięć przez pliki to: ${sumKb} [KB]`);





