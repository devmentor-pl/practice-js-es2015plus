import {files} from './data.js';

let totalSizeOfImages = 0;
const convertSize = (size,index) => (size * Math.pow(1024,index));

files.forEach((item) => {
    const {size:{length:itemSize,unit:itemType ='B'}} = item;
    totalSizeOfImages +=calculateTypeOfSize(itemSize,itemType);
});

function calculateTypeOfSize(size,type){
    let sum = 0;
    if(type === 'B'){
        sum+=size;
    }
    if(type === 'KB'){
        sum += convertSize(size,1)
    }
    if(type === 'MB'){
        sum += convertSize(size,2)
    }
    if(type === 'GB'){
        sum += convertSize(size,3)
    }
    return sum;
}

console.log(`Wszystki pliki zajmują łącznie: ${totalSizeOfImages} B`);
