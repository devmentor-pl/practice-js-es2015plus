// import { files } from './data.js'
const files = require('./data.js')

const calcSizeFiles = (arr) => {
	let sum = 0

	arr.forEach((item) => {
		const {
			size: { length, unit },
		} = item

		sum += convertSizeToByte(length, unit)
	})
	return sum.toFixed(2)
}

const convertSizeToByte = (length, unit = 'B') => {
	if (unit === 'GB') {
		return length * 1024 * 1024 * 1024
	} else if (unit === 'MB') {
		return length * 1024 * 1024
	} else if (unit === 'KB') {
		return length * 1024
	} else if (unit === 'B') {
		return length
	}
}

console.log(
	`Wielkość: ${calcSizeFiles(files)} B, ilość plików: ${files.length}.`
)

// rozwiązanie Mateusza B
function convertToBytes(length, unit) {
	const data = {
		'B': 1,
		'KB': 1024,
		'MB': 1024 * 1024,
		'GB': 1024 * 1024 * 1024,
	}

	if (typeof data[unit] === 'undefined') {
		console.error('Nie mam takiej jednostki')
	}
	return data[unit] * length
}


const getTotalSize = () => {
	let size = 0
	files.forEach(({ size: { length, unit = 'B' } }) => {
		size += convertToBytes(length, unit)
	})
	return size
}
console.log(`${getTotalSize()} rozwiązanie Mateusza z YT`);