import Programmer from './classes/Programmer'
import Senior from './classes/Senior'
import Junior from './classes/Junior'
import Mid from './classes/Mid'
const features = {
	skills: 10,
	experience: 10,
	willingness: 10,
}

const task = {
	difficult: 1,
	size: 1,
}

const programmer = new Programmer(features)
const time = programmer.getApproximateTimeTaskDoneInHours(task)
console.log(time)
const junior = new Junior(features)
const timeJunior = junior.getApproximateTimeTaskDoneInHours(task)
console.log(`junior potrzebuje ${timeJunior} godziny`)
const mid = new Mid(features)
const timeMid = mid.getApproximateTimeTaskDoneInHours(task)
console.log(`mid potrzebuje ${timeMid} godziny`)
const senior = new Senior(features)
const timeSenior = senior.getApproximateTimeTaskDoneInHours(task)
console.log(`senior potrzebuje ${timeSenior} godziny`)
