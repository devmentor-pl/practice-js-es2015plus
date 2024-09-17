import User from './User.js'
import Admin from './Admin.js'

const userData = { login: 'user@devmentor.pl', password: '123456' }
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' }

const user = new User(userData)
console.log(user)
user.register()

const admin1 = new Admin(userData)
console.log(admin1)
admin1.register() // error

const admin2 = new Admin(adminData)
console.log(admin2)
admin2.register() // done
