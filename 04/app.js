import User from './User.js';
import Admin from './Admin.js';

const userData = { login: 'user@devmentor.pl', password: '123456' }
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' }

const user1 = new User(userData);
user1.register();

const user2 = new User(adminData);
user2.register();

const admin1 = new Admin(userData);
admin1.register();

const admin2 = new Admin(adminData);
admin2.register();