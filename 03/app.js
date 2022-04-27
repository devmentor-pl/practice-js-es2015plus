import {files} from './data.js';

const fromKiloBytes = value => value*1024;
const fromMegaBytes = value => fromKiloBytes(value)*1024;
const fromGigaBytes = value => fromMegaBytes(value)*1024;
const notConvert = value => value;


const rules =  { 'KB' : fromKiloBytes,
                 'MB' : fromMegaBytes,
                 'GB' : fromGigaBytes,                 
                 'B'  : notConvert,  
                }

const convertToBytes = (length, unit = 'B') => {
    
    if (typeof rules[unit] === 'undefined') {    //tutaj się chciałem zabezpieczyć gdyby jako parametr "unit" została podana jednostkę która nie jest obsługiwana
        return 0;
    }
    
    return rules[unit](length);
}

const getSum = (total, item) => {

    const { size : { unit,  length }} = item;

    return total + convertToBytes(length, unit);
}

const totalFilesSize = files.reduce(getSum, 0);

console.log(`Łączny rozmiar plików wynosi ${totalFilesSize} bajtów`);
