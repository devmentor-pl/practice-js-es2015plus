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
