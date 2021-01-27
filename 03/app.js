import {files} from './data.js';


const { name,
        size: {unit: 'B'},
    } = files;

console.log(name);


const changeUnit = unit => {

}

// const b = 1024;
// const kb = b * kb;
// const mb = b * mb;
// const gb = b * gb;