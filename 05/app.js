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


console.log('----- Junior -----')
const junior = new Junior( features )

const skills = junior.getSkills()
console.log( 'Junior skills', skills )

const experience = junior.getExperience()
console.log( 'Junior experience', experience )

const willingness = junior.getWillingness()
console.log( 'Junior willingness', willingness )

const timeJunior = junior.getApproximateTimeTaskDoneInHours( task );
console.log('timeJunior', timeJunior)


console.log('----- Mid -----')
const mid = new Mid( features )

const skillsMid = mid.getSkills()
console.log( 'mid skills', skillsMid )

const experienceMid = mid.getExperience()
console.log( 'mid experience', experienceMid )

const willingnessMid = mid.getWillingness()
console.log( 'mid willingness', willingnessMid )

const timeMid = mid.getApproximateTimeTaskDoneInHours( task );
console.log('timeMid', timeMid)


console.log('----- Senior -----')
const senior = new Senior( features )

const skillsSenior = senior.getSkills()
console.log( 'senior skills', skillsSenior )

const experienceSenior = senior.getExperience()
console.log( 'senior experience', experienceSenior )

const willingnessSenior = senior.getWillingness()
console.log( 'senior willingness', willingnessSenior )

const timeSenior = senior.getApproximateTimeTaskDoneInHours( task );
console.log('timeSenior', timeSenior)

