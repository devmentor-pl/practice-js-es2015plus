> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e08-js-es2015plus` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` JavaScript: ECMAScript2015+

Mamy klasę `Programmer`, która reprezentuje programistę z 3 cechami:
- poziomem umiejętności (*skills*),
- doświadczeniem (*experience*),
- chęcią do rozwiązania zadania (*willingness*).

Na podstawie tych cech, których wartości zawierają się w przedziale od 0 do 100, możemy określić w przybliżeniu czas rozwiązania danego problemu. 

Samo zadanie posiada 2 cechy, na podstawie których obliczamy czas rozwiązania:
- trudność zadania,
- rozmiar zadania.

Wartości dla obu tych cech mieszczą się w przedziale od 1 do 3.

W pliku `./app.js` znajdziesz przykład użycia omawianej klasy.

Twoim zdaniem jest stworzenie klas `Junior`, `Mid` i `Senior`, które wykorzystują rozwiązania dostępne w klasie `Programmer`. Jeśli któraś z cech nie zostanie przekazana do konstruktora podczas tworzenia obiektu, to zakres jej wartości powinien być wylosowany z konkretnego przedziału: 

* Junior
    * skills: 0-30 
    * experience: 0-30 
    * willingness: 30-70
* Mid
    * skills: 20-60 
    * experience: 30-60 
    * willingness: 50-90 
* Senior, 
    * skills: 50-90 
    * experience: 60-90 
    * willingness: 40-60 

Następnie sprawdź, ile czasu będzie potrzeba na wykonanie konkretnego zadania przez programistę na każdym z poziomów zaawansowania.

&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-js-es2015plus/)*

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:
