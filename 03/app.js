import {files} from './data.js';

const imgSize = files.map(({size:{length}}) => length); //
console.log(imgSize);

const imgType = files.map(({size:{unit='B'}}) => unit); 
console.log(imgType);




// const [{size:{length:itemSize,unit:itemTypeSize ='B'}}] = files; // tu pobiera mi tylko 1 wystapienia
// console.log(itemSize,itemTypeSize);

// const imgData = files.map(({size}) => size); // tu nie wiem jak przypisac wartosc domyslna
// console.log(imgData);






