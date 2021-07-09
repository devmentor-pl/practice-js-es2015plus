import { files } from './data.js';

/* W pliku app.js importujemy dane, które zawierają informacje o plikach i ich rozmiarze. Każda plik ma inaczej zapisany rozmiar. Domyślnie wielkość pliku jest zapisywana w bajtach [B]. Dla przypomnienia 1KB = 1024B, 1MB = 1024KB itp.

Twoim zadaniem jest napisanie funkcji strzałkowej, która obliczy sumę zajmowanej przestrzeni przez wszystkie pliki. Pamiętaj, aby sprowadzić rozmiary do tej samej jednostki przed wykonaniem obliczeń.

Wykorzystaj destrukturyzację oraz wartości domyślne przy pobieraniu danych.

Podziel zadanie na mniejsze części, które będą wykonywane przez niezależne funkcje. */

let sum = 0;
let KB = 1024;

files.forEach(file => {

    const {
        size,
        name,
    } = file;



    if (!file.size.unit) {
        sum += size.length;
        console.log(`${name} ma ${sum}B `)
    }

    if (file.size.unit === 'KB') {
        sum += size.length;
        console.log(`${name} ma ${sum}B`);
    }

    if (file.size.unit === 'MB') {
        sum += size.length * KB;
        console.log(`${name} ma ${sum}B`);
    }

    if (file.size.unit === 'GB') {
        sum += size.length * KB * KB;
        console.log(`${name} ma ${sum}B`);
    }
});



