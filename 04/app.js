import Admin from './Admin.js';
import User from './User.js';


const userData = { login: 'user@devmentor.pl', password: '123456' }
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' }

const user = new User( userData );
const admin1 = new Admin(userData);
const admin2 = new Admin(adminData);

admin1.register(); // error
admin2.register(); // done
user.register();