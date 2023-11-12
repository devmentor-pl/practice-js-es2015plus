import { files } from './data.js'

let totalSize = 0

files.forEach(file => {
	let {
		size: { length, unit = 'B' },
	} = file

	if (unit === 'B') {
		length = length / Math.pow(1024, 2)
	}

	if (unit === 'KB') {
		length = length / 1024
	}

	if (unit === 'GB') {
		length = length * 1024
	}

	totalSize += length
})

console.log(`${totalSize.toFixed(2)} MB`)
