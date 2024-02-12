import User from './User.js';

// Rozszerzenie klasy User o klasę Admin
export default class Admin extends User {
    constructor({ login = '', password = '' }) {
        super({ login, password });
    }

    isPasswordCorrect() {
        // Nadpisanie metody aby dostosowac kryteria hasła adminów
        return this.password.length >= 10;
    }
}