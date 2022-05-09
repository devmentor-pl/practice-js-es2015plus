//export const files = [
    const files = [
    {
        'name': 'img1.jpg',
        'size': {
            length: 215,
        }
    },
    {
        'name': 'img2.jpg',
        'size': {
            length: 145,
            unit: 'KB',
        }
    },
    {
        'name': 'img3.jpg',
        'size': {
            length: 14,
            unit: 'MB',
        }
    },
    {
        'name': 'img4.jpg',
        'size': {
            length: 0.9,
            unit: 'GB',
        }
    }
];

//module.exports = files;

const [a, b, c, d] = files;
console.log(files);

const changeElementUnit = () => {
    const lengthArray = [];
    files.forEach( item => {
    const {
        name: name,
        size: {
            length: lengthValue,
            unit: unitKind,
            },
    } = item;
    let itemLengthValue = 0;
    if(unitKind === undefined) {
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
    let lengthArray = changeElementUnit();
    console.log(lengthArray);
    const [a, b, c, d ] = lengthArray;
    let sum = a + b + c + d;
    console.log(sum);
}

sum();