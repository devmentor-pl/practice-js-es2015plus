import {files} from './data.js';

// Funkcja do obliczania sumy przestrzeni zajmowanej przez pliki
const calculateTotalSpace = (files) => {
  // Funkcja do przeliczania rozmiarów na bajty
  const convertToBytes = (size, unit = 'B') => {
		const unitMultiplier = {
			B: 1,
			KB: 1024,
			MB: 1024 * 1024,
			GB: 1024 * 1024 * 1024,
		};

		// Sprawdzenie czy jednostka istnieje w spisie, jeśli nie, to zwracamy 0
		if (!unitMultiplier[unit]) {
			console.error(`Unknown unit: ${unit}. Unable to convert size.`);
			return 0;
		}
		return size * unitMultiplier[unit];
	};

  // Funkcja pomocnicza do sumowania rozmiarów
  const sumSizes = (total, file) => total + convertToBytes(file.size.length, file.size.unit);

  // Obliczam sumę
  const totalSpace = files.reduce(sumSizes, 0);

  return totalSpace;
};


const totalSpace = calculateTotalSpace(files);
console.log(`Total space occupied by all files: ${totalSpace} B`);
