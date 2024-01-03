import { 
    validationEmail,
    validationEmptyField,
    checkConfirmPassword,
    validedInput
} from '../utils/validations.js';

const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    confirmPassword: () => document.getElementById('confirm-password'),
    btnLogin: () => document.getElementById('btn-create-account'),
}

function createAccount() {
    const email = form.email().value;
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    if (!validationEmptyField(email, password, true, confirmPassword)) return false;

    if (!validationEmail(email)) return false;

    if (!checkConfirmPassword(password, confirmPassword)) return false;

    form.email().removeEventListener('keyup', validedInput);
    form.password().removeEventListener('keyup', validedInput);
    form.confirmPassword().removeEventListener('keyup', validedInput);

    window.location.href = 'http://127.0.0.1:5500/tela/home.html';
}

form.email().addEventListener('keyup', validedInput);
form.password().addEventListener('keyup', validedInput);
form.confirmPassword().addEventListener('keyup', validedInput);

window.createAccount = createAccount;