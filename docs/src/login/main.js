import { 
    validationEmail,
    validationEmptyField,
    validedInput,
} from '../utils/validations.js';

 import {
    inclueToastify,
 } from '../utils/toastify.js'

const mockCredentials = {
    email: 'jonh.doe@gmail.com',
    password: '123456'
}

const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    btnLogin: () => document.getElementById('btn-login'),
}

const checkCredentials = (email, password) => {
    if (email !== mockCredentials.email || password !== mockCredentials.password) {
        inclueToastify();
        return false;
    }

    return true;
}

function login() {
    const email = form.email().value;
    const password = form.password().value;

    if (!validationEmptyField(email, password)) return false;

    if (!validationEmail(email)) return false;

    if (!checkCredentials(email, password)) return false;

    form.email().removeEventListener('keyup', validedInput);
    form.password().removeEventListener('keyup', validedInput);

    window.location.href = 'http://127.0.0.1:5500/tela/home.html';
}


form.email().addEventListener('keyup', validedInput);
form.password().addEventListener('keyup', validedInput);

window.login = login;
