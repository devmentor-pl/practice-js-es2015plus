import {files} from './data.js';
let filesSize = 0;


files.forEach( (item) => {
    let {
        length: sizeValue,
        unit: unit,
    } = item.size
    if(unit === 'KB'){
        sizeValue = sizeValue * 1024;
        filesSize += sizeValue;
    } else if(unit === 'MB') {
        sizeValue = sizeValue * 1024 * 1024;
        filesSize += sizeValue;
    } else if(unit ==='GB'){
        sizeValue = sizeValue * 1024 *1024 *1024;
        filesSize += sizeValue
    } else if(unit === undefined){
        filesSize += sizeValue
    }
})

console.log(`Sumaryczny rozmiar plików to: ${filesSize} B, co daje: ${filesSize/1024} KB, co daje: ${filesSize/(1024*1024)} MB a to daje: ${filesSize/(1024*1024*1024)} GB`)