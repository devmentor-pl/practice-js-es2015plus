import Programmer from './classes/Programmer';
import Junior from './classes/Junior.js'
import Mid from './classes/Mid.js'
import Senior from './classes/Senior.js'


const task1 = {
  difficult: 1,
  size: 1,
}

const task2 = {
  difficult: 2,
  size: 2
}

const task3 = {
  difficult: 3,
  size: 3
}

// let taskTable = {}

// const createTasksTable = function (task, obj) {
  
//     for (let i=0 ; i < 3; i++) {
//       console.log('difficult= ' + task.difficult)
//       console.log('size= ' + task.size)
//       let diffVar = Number(task.difficult) + i
//       let sizeVar = Number(task.size) + i
//       const newObj = {...obj, ...{'difficult': diffVar, 'size': sizeVar}}      
//       console.log(newObj)
//     }
// }

// chciałem zrobić żeby taski dodawały się jako kolejne obiekty i zwiększały się odpowiednio o 1 ( czyli pewnie pętla for z "i" i "j"). Jednak utknąłem na samym budowaniu struktury. Mógłbyś mi podpowiedzieć jak można osiągnąć taką strukturę :

// const taskTable = {
//    task1: { difficult: 1, size: 1},
//    task2: { difficult: 1, size: 2},
//    .........
//    task3: { difficult: 2, size: 1}, itd ?
// } może łatwiej w inny sposób sprawdzić dla wszystkich rozwiązań z jakiegoś zakresu ( rozsądnie niedużego jak w przykładzie)

// myślę, że samo wyświetlanie zrobiłbym w funkcji a nie pisał dla wszystkich.

// ostatnia myśl to nie wiem czy czasem nie przekombinowuje rozwiązań ale szukam automatu jak kod się powtarza ale czesto wtedy kod robi mi się skomplikowany

// createTasksTable(task1,taskTable)


const junior1 = new Junior
const mid1 = new Mid
const senior1 = new Senior
console.log(junior1, mid1, senior1)

console.log(task1)
const time1 = junior1.getApproximateTimeTaskDoneInHours(task1);
console.log(time1 + 'h');
const time2 = mid1.getApproximateTimeTaskDoneInHours( task1);
console.log(time2 + 'h');
const time3 = senior1.getApproximateTimeTaskDoneInHours(task1);
console.log(time3 + 'h');

console.log(task2)
const time4 = junior1.getApproximateTimeTaskDoneInHours(task1);
console.log(time4 + 'h');
const time5 = mid1.getApproximateTimeTaskDoneInHours( task1);
console.log(time5 + 'h');
const time6 = senior1.getApproximateTimeTaskDoneInHours(task1);
console.log(time6 + 'h');

console.log(task3)
const time7 = junior1.getApproximateTimeTaskDoneInHours(task1);
console.log(time7 + 'h');
const time8 = mid1.getApproximateTimeTaskDoneInHours( task1);
console.log(time8 + 'h');
const time9 = senior1.getApproximateTimeTaskDoneInHours(task1);
console.log(time9 + 'h');


// const features = {
//     skills: 10, 
//     experience: 10, 
//     willingness: 10,
// }

// const programmer = new Programmer( features );
// const time = programmer.getApproximateTimeTaskDoneInHours( task );
// console.log(time);