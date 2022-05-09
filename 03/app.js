
import files from './data.js';

const [a, b, c, d] = files;
console.log(files);

const transferToKB = () => {
    const lengthArray = [];
    files.forEach( item => {
    const {
        name: name,
        size: {
            length: lengthValue,
            unit: unitKind ='B',
            },
    } = item;
    let itemLengthValue = 0;
    if(unitKind === 'B') {
        itemLengthValue = lengthValue/1024;
    }
    else if(unitKind === 'KB'){
        itemLengthValue = lengthValue;
    }
    else if(unitKind === 'MB'){
        itemLengthValue = lengthValue*1024;
    }
    else if (unitKind === 'GB'){
        itemLengthValue = lengthValue*1024*1024;
    }
    lengthArray.push(itemLengthValue);
    });
    console.log(lengthArray);
    return lengthArray;
}

const sum = () => {
    let lengthArray = transferToKB();
    console.log(lengthArray);
    const [a, b, c, d] = lengthArray;
    let sum = a + b + c + d;
    console.log(sum + ' KB');
}

sum();

console.log('pies2');

