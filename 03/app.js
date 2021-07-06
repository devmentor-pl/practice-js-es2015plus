import {files} from './data.js';

/* W pliku app.js importujemy dane, które zawierają informacje o plikach i ich rozmiarze. Każda plik ma inaczej zapisany rozmiar. Domyślnie wielkość pliku jest zapisywana w bajtach [B]. Dla przypomnienia 1KB = 1024B, 1MB = 1024KB itp.

Twoim zadaniem jest napisanie funkcji strzałkowej, która obliczy sumę zajmowanej przestrzeni przez wszystkie pliki. Pamiętaj, aby sprowadzić rozmiary do tej samej jednostki przed wykonaniem obliczeń.

Wykorzystaj destrukturyzację oraz wartości domyślne przy pobieraniu danych.

Podziel zadanie na mniejsze części, które będą wykonywane przez niezależne funkcje. */


export const files = [
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


