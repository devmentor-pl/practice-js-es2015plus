
import files from './data.js';


const calculateElKBSize = (element) => {
    const {
        name: name,
        size: {
            length: lengthValue,
            unit: unitKind ='B',
            },
    } = element;
    return convertToKB(lengthValue, unitKind);
}

const convertToKB = (lengthValue, unitKind) => {
    let itemLengthValue = 0;
    switch(itemLengthValue) {
        case unitKind === 'B':
            itemLengthValue = lengthValue/1024;
            break;
        case unitKind === 'KB':
            itemLengthValue = lengthValue;
            break;
        case unitKind === 'MB':
            itemLengthValue = lengthValue*1024;
            break;
        case unitKind === 'GB':
            itemLengthValue = lengthValue*1024*1024;
            break;
        default: 
            console.log('There is a problem with converting to KB');
    }
    return itemLengthValue;
}

const sum = () => {
    let sum = 0;
    files.forEach( item => {
        sum+=calculateElKBSize(item);
    });
    console.log(sum + ' KB');
}

sum();



