import Programmer from './classes/Programmer';
// willingness - dobre chęci
import Junior from './classes/Junior';

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
junior.getTest()

const skills = junior.getSkills()
console.log( 'Junior skills', skills )

const experience = junior.getExperience()
console.log( 'Junior experience', experience )

const willingness = junior.getWillingness()
console.log( 'Junior willingness', willingness )

const timeJunior = junior.getApproximateTimeTaskDoneInHours( task );
console.log('timeJunior', timeJunior)



