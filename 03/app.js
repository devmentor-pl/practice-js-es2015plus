import {files} from './data.js';
const lengths = [];

const convertUnit = (length, unit) => {
    if(unit === 'B'){
        return length
    }else if(unit === 'KB'){
        return length * 1024
    }else if(unit === 'MB'){
        return length * Math.pow(1024, 2)
    }else if(unit === 'GB')
        return length * Math.pow(1024, 3); 
}

const sumUpLengths = (array) => {
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum
}

const convertRightUnit = (sum) => {

    if(sum > Math.pow(1024, 3)){
        const result = sum / Math.pow(1024, 3);
        return result.toFixed(2) + ' GB';

    }else if(sum > Math.pow(1024, 2)){
        const result = sum / Math.pow(1024, 2);
        return result.toFixed(2) + ' MB';

    }else if(sum > 1024){
        const result = sum / 1024;
        return result.toFixed(2) + ' KB';

    }else{
        return sum
    }

}

files.forEach(file => {
    const {size: {length, unit = 'B'}} = file;
    lengths.push(convertUnit(length, unit));
})

alert(`${convertRightUnit(sumUpLengths(lengths))}`);

    