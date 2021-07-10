import User from './User.js';
import Admin from './Admin.js';

const userData = { login: 'user@devmentor.pl', password: '123456' }
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' }

const user = new User( userData );
user.register();

/*Obecnie posiadamy napisaną klasę User pozwalającą rejestrować użytkowników, którzy wpisali poprawne dane. Poprawnymi danymi jest login zawierający znak @ oraz hasło składające się z co najmniej 6 znaków.

Twoim zdaniem jest napisać w osobnym pliku drugą klasę o nazwie Admin, która będzie miała bardziej restykcyjne warunki tj. hasło będzie musiało się składać z co najmniej 10 znaków. Wykorzystaj klasę User do zbudowania klasy Admin.

Klasa Admin ma działać w taki sposób, że wywołanie poniższego kodu spowoduje wyświetlenie w konsoli error dla pierwszej części i done dla drugiej.

const admin1 = new Admin( userData );
admin1.register(); // error

const admin2 = new Admin( adminData );
admin2.register(); // done */



const admin1 = new Admin( userData );
admin1.register(); // error

const admin2 = new Admin( adminData );
admin2.register(); // done