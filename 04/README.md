> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e08-js-es2015plus` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#04` JavaScript: ECMAScript2015+

W plikach tego zadania znajdziesz klasę `User`, która pozwala zarejestrować użytkownika po wpisaniu poprawnych danych. Poprawnymi danymi są:
- login zawierający znak @,
- hasło składające się z co najmniej 6 znaków.

W osobnym pliku stwórz drugą klasę o nazwie `Admin`, która będzie miała bardziej restrykcyjne warunki: hasło będzie musiało składać się z co najmniej 10 znaków. Wykorzystaj klasę `User` do zbudowania klasy `Admin`.

Klasa `Admin` ma działać w taki sposób, że wywołanie poniższego kodu spowoduje wyświetlenie w konsoli `error` dla pierwszej części i `done` dla drugiej.

```
const admin1 = new Admin( userData );
admin1.register(); // error

const admin2 = new Admin( adminData );
admin2.register(); // done
```

&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-js-es2015plus/)*

> :arrow_left: [*poprzednie zadanie*](./../03) | [*następne zadanie*](./../05) :arrow_right:
