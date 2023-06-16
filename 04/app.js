import User from './User.js';
import Admin from './Admin.js';

const userData = { login: 'user@devmentor.pl', password: '123456' }
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' }

const user = new User(userData);
user.register();
// const user2 = new User();
// user.register(); 
// sprawdzam, co się stanie, gdy nie podam danych i wyskakuje mi błąd. Próbowałam przypisać domyślne wartości do obiektu, jak w zadaniu 05 ({ login = '', password = '' } = {}), ale wtedy walidacja pokazuje, że jest ok i wyświetla w konsoli 'done'. Nie wiem za bardzo skąd ten błąd.

const admin1 = new Admin(userData);
admin1.register(); // error

const admin2 = new Admin(adminData);
admin2.register(); // done

// const admin3 = new Admin();
// admin3.register(); 
// ten sam problem co wyżej