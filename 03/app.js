import {files as filesArray} from './data.js';

let sum = 0;

const getFileSizes = (array) => {
    totalizeFilesSizes(array);
    renderData(array, sum)
}

const renderData = (sourceArray) => {
    sourceArray.forEach(fileObject=> {
        const {name, size:{length,unit,unitExponent}}=  fileObject;
        const magnitude = Math.pow(1024,unitExponent);

        if(unitExponent && !(sum > magnitude)){
            const roundedSize = (sum / magnitude).toFixed(2);
            console.log(`${roundedSize} ${unit}`);
        };
    })
}

const totalizeFilesSizes = (arrayOfFiles) => {
    arrayOfFiles.forEach(fileObject=> {
        const {name, size:{length,unit,unitExponent}}=  fileObject;
        addSingleSize(length,unitExponent);
    })
}

const addSingleSize = (length, unitExponent=0) => {
    const magnitude = Math.pow(1024,unitExponent);
    sum+=(magnitude*length);
}


getFileSizes(filesArray);





