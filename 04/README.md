> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `#s1e08-js-es2015plus` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#04` JavaScript: ECMAScript2015+

Obecnie posiadamy napisaną klasę `User` pozwalającą rejestrować użytkowników, którzy wpisali poprawne dane. Poprawnymi danymi jest login zawierający znak `@` oraz hasło składające się z co najmniej 6 znaków.

Twoim zdaniem jest napisać w osobnym pliku drugą klasę o nazwie `Admin`, która będzie miała bardziej restykcyjne warunki tj. hasło będzie musiało się składać z co najmniej 10 znaków. Wykorzystaj klasę `User` do zbudowania klasy `Admin`.

Klasa `Admin` ma działać w taki sposób, że wywołanie poniższego kodu spowoduje wyświetlenie w konsoli `error` dla pierwszej części i `done` dla drugiej.

```
const admin1 = new Admin( userData );
admin1.register(); // error

const admin2 = new Admin( adminData );
admin2.register(); // done
```

&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../04) | [*następne zadanie*](./../05) :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*
