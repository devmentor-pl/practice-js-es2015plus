import {files} from './data.js';

const init = () => {
    calculateTotalSize(files);
}

const calculateTotalSize = (item) => {

    let sum = 0;
    const fileData = item

    fileData.forEach( el => {

        const data = getDataFromFile(el);
        const value = data.value
        const unit = data.unit
        const convertedValue = convertSizeToB(value,unit);

        sum += convertedValue
    })
    return sum
}

const convertSizeToB = (value,unit) => {

    if ( unit === "KB" ) {
        return parseInt(value * 1024);
    }

    if ( unit === "MB" ) {
        return parseInt(value * 1048576);
    }

    if ( unit === "GB" ) {
        return parseInt(value * 1073741824);
    }
    else {
        return value
    }
}

const getDataFromFile = (item) => {

    const {
       name,
       size: {length: value},
       size: {unit = "B"}
     } = item

    return {
        name,
        value,
        unit
    }
 }

document.addEventListener('DOMContentLoaded' , init)