import {files} from './data.js';


const sumArr = arr => {
    return arr.reduce( (acc, num) => {
    return acc + num;
    }, 0);
};
const convertToBytes = files => {
    switch(files.unit) {
        case 'GB':
            files.length = lowerGradeUnitSi(files.length);
        case 'MB':
            files.length = lowerGradeUnitSi(files.length);
        case 'KB':
            files.length = lowerGradeUnitSi(files.length);
                }
    return files.length;
};
const lowerGradeUnitSi = (size) => {
    return size * 1024;
};
const calculateTheSum = () => {
    const sizeArr = [];
    
    files.forEach(item => {    
        if(item.size.unit) {
            if(item.size.unit !== 'B') {
                const sizeInBytes = convertToBytes(item.size);
                sizeArr.push(sizeInBytes);
            } else {
                sizeArr.push(item.size.length);
            };
        }
    });
    return sumArr(sizeArr);
};

const finalResult = `Całkowity rozmiar plików wynosi: ${calculateTheSum()} B`;
console.log(finalResult);
