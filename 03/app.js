import { files } from './data.js';

const getData = () => {
    const data = [];
    for (let { size: { length: len, unit: uni = 'B' } } of files) {
        if (uni === 'KB') {
            len = len * 1024;
            uni = 'B';
        }
        if (uni === 'MB') {
            len = len * 1024 * 1024;
            uni = 'B';
        }
        if (uni === 'GB') {
            len = len * 1024 * 1024 * 1024;
            uni = 'B';
        }
        console.log(`Długość: ${len}, jednostka ${uni}`);
        data.push(len);
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





