import {files} from './data.js';
import {onBytes} from './data.js';

const convertUnits = (acc, unit, lengthItem, unitItem, conversionFactor) => {
    if (unit === unitItem) {
        return acc + (lengthItem * conversionFactor)
    }
    return 0
}

const changeOverBytes = (lengthItem, unitItem) => {
    return onBytes.reduce((acc, item) => {
        const {
            unit, 
            conversionFactor,
        } = item

        const value = convertUnits(acc, unit, lengthItem, unitItem, conversionFactor)
        return acc + value
    }, 0)
}


const sum = files.reduce((acc, item) => {
    const {
        size: {length: lengthItem, unit: unitItem = 'B'}, 
    } = item

    const bytesSize = changeOverBytes(lengthItem, unitItem)
    return acc + bytesSize
},0)

console.log(sum);