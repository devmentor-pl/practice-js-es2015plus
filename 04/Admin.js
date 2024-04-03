import User from './User.js';

export default class Admin extends User {
    constructor ( {login = '', password = ''}) {
        super(login);
        this.password = password;
        this.registered = false;
    }
    isPasswordCorrect() {
        if(this.password.length >= 10) {
            return true;
        }
        
        return false;
    }
}


// export default class Admin {
//     constructor( {login = '', password = ''} ) {
//         this.login = login;
//         this.password = password;
//         this.registered = false;
//     }
//     register() {
//         if(this.isValid() && this.registered) {
//             console.log('done');
//             return true;
//         } else {
//             console.log('error');
//         }
        
//         this.registered = !this.registered;
//     }

//     isValid() {
//         if(this.isLoginCorrect() && this.isPasswordCorrect()) {
//             return true;
//         }

//         return false;
//     }

//     isLoginCorrect() {
//         if(this.login.includes('@')) {
//             return true;
//         }

//         return false;
//     }

// }