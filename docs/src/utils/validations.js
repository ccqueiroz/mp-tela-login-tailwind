import { errorMessagens } from './errorMessages.js';
import { 
    includeErrorSpan,
    revokeErrorSpan,
    revokeAlertFieldError,
 } from './errorSpan.js';

 const validationEmail = (email) => {
    const message = errorMessagens.emailInvalid;
    const emailRegex = /^(?![-._])(?!.*[.]{2,})[\w.-]+[^.]@(?!.*[.]{2,})[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*$/;
    if (!email) return false;
  
    const isValidEmail = email.match(emailRegex);
  
    if (!isValidEmail) {
        includeErrorSpan('email', message);
        return false;
    };
    return true;
}

const validationEmptyField = (email, password, checkConfirmPassword = false, confirmPassword) => {
    const message = errorMessagens.emptyField;
    let returnError = true;
    if (!email) {
        includeErrorSpan('email', message);
    }
    
    if (!password) {
        includeErrorSpan('password', message);
    }

    if (checkConfirmPassword && !confirmPassword) {
        includeErrorSpan('confirm-password', message);
    }

    returnError = !checkConfirmPassword ? !(!email || !password) : !(!email || !password || !confirmPassword);

    return returnError;
}

const checkConfirmPassword = (password, confirmPassword) => {
    const message = errorMessagens.confirmPassword;
    let returnError = password === confirmPassword;

    if (!returnError) {
        includeErrorSpan('confirm-password', message);
    }

    return returnError;
}

function validedInput (event) {
    const error = document.getElementById(`span-error-${event.target.id}`).firstElementChild.innerHTML;

    if (!error) return;

    let revokeError = false;

    if (
        (error === errorMessagens.emptyField || 
            error === errorMessagens.confirmPassword
        ) && 
        event.target.value.length > 3
    ) {
        revokeError = true;
    } else if (error === errorMessagens.emailInvalid && validationEmail(event.target.value)) {
        revokeError = true;
    } else {
        revokeError = false;
    }

    if (revokeError) {
        revokeErrorSpan(event.target.id);
        revokeAlertFieldError(event.target.id);
        return;
    }
}

export {
    validationEmail,
    validationEmptyField,
    checkConfirmPassword,
    validedInput
};