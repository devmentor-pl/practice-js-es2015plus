import {files} from './data.js';
function convert (length,unit){
    const data ={
        'B':1,
        'KB':1024,
        'MB':1024 *1024,
        'GB':1024 *1024 *1024,
    }
    return data[unit]*length;
}

let size=0
files.forEach(file =>{
    const {size :{length,unit='B'}}=file
    size +=convert(length ,unit)
  
})



