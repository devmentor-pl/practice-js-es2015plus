import Programmer from './classes/Programmer';
import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Senior from './classes/Senior';

const features = {
    skills: 10, 
    experience: 10, 
    willingness: 10,
}

const task = {
    difficult: 1,
    size: 1,
}

// const programmer = new Programmer( features );
// const time = programmer.getApproximateTimeTaskDoneInHours( task );
// console.log(time);

const programmers = [new Junior(), new Mid(), new Senior()];

for (let i = 1; i <= 3; i++) {
    const newTask = {...task, difficult: i};
    console.log(`Task difficulty: ${i}`);

    programmers.forEach(programmer => {
        const time = programmer.getApproximateTimeTaskDoneInHours( newTask );
        console.log(`Average time for ${programmer.constructor.name.toUpperCase()}: ${time}`);
    });
    
    console.log('\n');    
}

