import {files} from './data.js';

// Funkcja do konwertowania rozmiarów na bajty
const convertToBytes = ({ length, unit = 'B' }) => {
    switch (unit) {
        case 'KB':
            return length * 1024; // 1KB = 1024B
        case 'MB':
            return length * 1024 * 1024; // 1MB = 1024KB = 1024 * 1024B
        case 'GB':
            return length * 1024 * 1024 * 1024; // 1GB = 1024MB = 1024 * 1024 * 1024B
        default:
            return length; // zakładamy, że jeśli brak jednostki, to są to bajty
    }
};

// Funkcja do obliczania całkowitego rozmiaru plików
const calculateTotalSize = (files) => {
    return files.reduce((total, file) => {
        const { size } = file; // Destrukturyzacja obiektu
        return total + convertToBytes(size); // Dodajemy rozmiar pliku do sumy
    }, 0);
};

// Wywołanie funkcji i wyświetlenie wyniku
const totalSize = calculateTotalSize(files);
console.log(`Całkowity rozmiar plików w bajtach: ${totalSize}`);