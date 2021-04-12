import {files} from './data.js';

const changeUnit = (unit, length) => {
    if(unit === 'B') {
        return length;
    } else if(unit === 'KB') {
        return  length * 1024;
    } else if(unit === 'MB') {
        return length * 1024 * 1024;
    } else if(unit === 'GB') {
        return length * 1024 * 1024 * 1024;
    }
}

const calcSize = data => {
    let sum = 0;
    data.forEach( file => {
        const {
            size: {
                unit = 'B',
                length
            },
        } = file;

        sum += changeUnit(unit, length);
    });

    console.log(sum, '=>');
}

calcSize(files);


// const { name,
//         size: {unit = 'B'},
//     } = files;

// console.log(name);


// const changeUnit = unit => {

// }

// const b = 1024;
// const kb = b * kb;
// const mb = b * mb;
// const gb = b * gb;