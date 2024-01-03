import buildSVGShowPassword from "./buildSVGShowPassword.js";
import changeTypePasswordInput from "./changeTypePasswordInput.js";

const showPassword = (element) => {
    const keyLocked = 'password-locked-picture';
    const keyUnLocked = 'password-unlocked-picture';

    const stateLock = element.querySelector('svg').getAttribute('data-name') === 'password-locked-picture';
    element.querySelector('svg').setAttribute('data-name', stateLock ? keyUnLocked : keyLocked);
    buildSVGShowPassword(element, stateLock);
    changeTypePasswordInput(element, !stateLock);
}

window.showPassword = showPassword;