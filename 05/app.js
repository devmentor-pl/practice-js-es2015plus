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

console.log('----- Programmernior -----')
const programmer = new Programmer( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time)


// console.log('----- Junior -----')
// const junior = new Junior( features )
// junior.getTest()

// const skills = junior.getSkills()
// console.log( 'Junior skills', skills )

// const experience = junior.getExperience()
// console.log( 'Junior experience', experience )

// const willingness = junior.getWillingness()
// console.log( 'Junior willingness', willingness )

// const timeJunior = junior.getApproximateTimeTaskDoneInHours( task );
// console.log('timeJunior', timeJunior)


// console.log('----- Mid -----')
// const mid = new Mid( features )
// mid.getTest()

// const skills = mid.getSkills()
// console.log( 'mid skills', skills )

// const experience = mid.getExperience()
// console.log( 'mid experience', experience )

// const willingness = mid.getWillingness()
// console.log( 'mid willingness', willingness )

// const timeMid = mid.getApproximateTimeTaskDoneInHours( task );
// console.log('timeMid', timeMid)


console.log('----- Senior -----')
const senior = new Senior( features )
senior.getTest()

const skills = senior.getSkills()
console.log( 'senior skills', skills )

const experience = senior.getExperience()
console.log( 'senior experience', experience )

const willingness = senior.getWillingness()
console.log( 'senior willingness', willingness )

const timeSenior = senior.getApproximateTimeTaskDoneInHours( task );
console.log('timeSenior', timeSenior)

