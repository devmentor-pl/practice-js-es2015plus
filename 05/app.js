/*Mamy utworzoną klasę Programmer, która reprezentuje programistę z 3 cechami tj. poziom umiejętności (skills), doświadczenie (experience*) i chęć do rozwiązania zadania (willingness). Na podstawie tych cech, których przedział wartości jest od 0 do 100, możemy określić w przybliżeniu czas rozwiązania danego problemu.

Samo zadanie posiada 2 cechy na podstawie, których obliczamy czas rozwiązania tj. trudność zadania i jego rozmiar z przedziału od 1 do 3.

W pliku ./app.js jest przykład użycia wspomnianej klasy.

Twoim zdaniem jest napisanie klas Junior, Mid, Senior, które wykorzystują rozwiązania dostępne w Programmer jednak ich cechy mogą być losowane z konkretnego przedziału, co ma być wykonywane podczas tworzenia obiektu na podstawie konkretnej klasy, jeśli któraś z cech nie zostanie przekazana do konstruktora.

Junior
skills: 0-30
experience: 0-30
willingness: 30-70
Mid
skills: 20-60
experience: 30-60
willingness: 50-90
Senior,
skills: 50-90
experience: 60-90
willingness: 40-60
Następnie sprawdź ile czasu będzie potrzeba na wykonanie konkrentego zadania przez programistę na każdym z poziomów zaawansowania.*/



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

const programmer = new Programmer( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);

const junior = new Junior();
console.log(junior);
const juniorTime =  junior.getApproximateTimeTaskDoneInHours( task );
console.log(juniorTime);

const mid = new Mid();
console.log(mid);
const midTime =  mid.getApproximateTimeTaskDoneInHours( task );
console.log(midTime);

const senior = new Senior();
console.log(senior);
const seniorTime =  junior.getApproximateTimeTaskDoneInHours( task );
console.log(seniorTime);