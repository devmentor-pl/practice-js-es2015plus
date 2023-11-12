import Programmer from './classes/Programmer'
import Junior from './classes/Junior'
import Mid from './classes/Mid'
import Senior from './classes/Senior'

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

const juniorProgrammer = new Junior()
const juniorProgrammerTime = juniorProgrammer.getApproximateTimeTaskDoneInHours(task)
console.log(juniorProgrammerTime)

const midProgrammer = new Mid()
const midProgrammerTime = midProgrammer.getApproximateTimeTaskDoneInHours(task)
console.log(midProgrammerTime)

const seniorProgrammer = new Senior()
const seniorProgrammerTime = seniorProgrammer.getApproximateTimeTaskDoneInHours(task)
console.log(seniorProgrammerTime)
