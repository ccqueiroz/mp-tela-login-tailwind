const includeAlertFieldError = (field) => {
    const component = document.getElementById(`content-${field}-field`);
    const errorClasses = ['border-red-600', 'border-2', 'rounded-lg'];
    component?.classList?.remove('focus-within:before:bg-gradient-primary');
    component.firstElementChild?.classList?.remove('focus-within:shadow-neon-effect-input');
    errorClasses.forEach(item => component?.classList?.add(item));
}

const revokeAlertFieldError = (field) => {
    const component = document.getElementById(`content-${field}-field`);
    const errorClasses = ['border-red-600', 'border-2', 'rounded-lg'];
    component?.classList?.add('focus-within:before:bg-gradient-primary');
    component.firstElementChild?.classList?.add('focus-within:shadow-neon-effect-input');
    errorClasses.forEach(item => component?.classList?.remove(item));
}

const includeErrorSpan = (field, message) => {
    includeAlertFieldError(field);
    const span = document.getElementById(`span-error-${field}`);
    span?.classList?.remove('opacity-0');
    span?.classList?.add('opacity-100');
    span.firstElementChild.innerHTML = message;
}

const revokeErrorSpan = (field) => {
    const span = document.getElementById(`span-error-${field}`);
    span?.classList?.remove('opacity-100');
    span?.classList?.add('opacity-0');
    span.firstElementChild.innerHTML = '';
}

export {
    includeAlertFieldError,
    includeErrorSpan,
    revokeErrorSpan,
    revokeAlertFieldError,
}