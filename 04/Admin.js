import User from './User.js'

export default class Admin extends User  {
  constructor(login = '', password = ''){
    super (login, password);
  }
  register() {
    if (this.isValid()) {
      console.log('valid from user');
      return true;
    }
      console.log('error from user');
      return false;
  }

  isPasswordCorrect() {
    if(this.password.length >= 10) {
      return true;
    }
  }

  isValid() {
      if(this.isLoginCorrect() && this.isPasswordCorrect()) {
          return true;
      }

      return false;
  }
};
