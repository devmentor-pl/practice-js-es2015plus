import User from './User.js';
import Admin from './Admin.js';

const userData = { login: 'user@devmentor.pl', password: '123456' }
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' }

const user = new User( userData );
const admin1 = new Admin( userData );
const admin2 = new Admin( adminData );

user.register();
admin1.register();
admin2.register();