//KONSULTACJE 
// w linii 37 nie dodaje wielkości
//podobnie jak w zadaniu 2, proszę o wskazówki do uzycia desrukturyzacji


// + DODAĆ wartości domyślne.
// + Zaimplementowane rozwiązanie podziel na mniejsze części, które będą wykonywane przez niezależne funkcje.

import {files} from './data.js';

console.log(files);

// wielkość pojedynczej przestrzeni
const getSize = (length, unit) => {
    let size;
    switch(unit) {
        case unit === undefined:
        size = length;
        break;
        case unit === 'KB':
        size = length * 1024;
        break;
        case unit === 'MB':
        size = length * 1048576;
        break;
        case unit === 'GB':
        size = length * 1073741824;
        break;
    }
    return size;
}

// suma całości = przestrzeń 1 + przestrzeń 2 + ...
let sum = 0;
const getSum = files.forEach(function(file){
    const fileSize = file.size.length;
    const fileUnit = file.size.unit;
    console.log(fileSize, fileUnit); // ok - wyświetlam zawartości file tj kazdy lenght i unit
    sum += getSize(fileSize, fileUnit); // ŹLE
    return sum;
})
console.log(sum); //NaN















