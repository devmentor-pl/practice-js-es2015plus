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

const programmer = new Programmer(features);
const time = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(time);

const showEachLevelTime = () => {
    // to taki fragment dla treningu :D
    const ownFeatures = [
        {
            label: 'Junior',
            features: { skills: 20, experience: 10, willingness: 5, },
        },
        {
            label: 'Mid',
            features: { skills: null, experience: null, willingness: null, },
        },
        {
            label: 'Senior',
            features: { skills: null, experience: null, willingness: null, },
        },
    ];
    const [junior, mid, senior] = ownFeatures;
    // -----------------------------------------------------------------------------------

    const workers = [
        { label: 'Junior', level: new Junior(junior.features) },
        { label: 'Mid', level: new Mid() },
        { label: 'Senior', level: new Senior() },
    ];

    const timeNeeded = (className) => className.getApproximateTimeTaskDoneInHours(task);
    const showTime = (label, time) => console.log(`${label}: ${time}`);

    workers.forEach(worker => {
        const { label, level } = worker;

        const time = timeNeeded(level);

        showTime(label, time);
    });
}

showEachLevelTime();