
const createElementToastify = (type) => {
    const defaultMeasurements = {
        top: type === 'error' ? 'top-1' : 'top-16',
        background: type === 'error' ? 'bg-red-600' : 'bg-teal-600',
        textColor: type === 'error' ? 'text-primary' : 'text-zinc-800',
        message: type === 'error' ? 'E-mail ou a Senha estão incorretos.' : 'Dica: Use email: jonh.doe@gmail.com e senha: 123456',
        icoSvg: type === 'error' ? 
            `<svg data-name="error-image" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" width="100%">
                <g>
                    <path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"></path>
                </g>
            </svg>` : 
            `<svg data-name="error-image" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill="currentColor" aria-hidden="true" viewBox="0 0 16 16" width="100%">
                <g>
                    <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11 4c0.552 0 1 0.672 1 1.5s-0.448 1.5-1 1.5-1-0.672-1-1.5 0.448-1.5 1-1.5zM5.5 4.876c0.932 0 1.594 0.349 1.594 0.895 0 0.116 0.060 0.672-0.003 0.775-0.232-0.384-0.856-0.659-1.591-0.659s-1.359 0.275-1.591 0.659c-0.062-0.103-0.003-0.659-0.003-0.775 0-0.546 0.662-0.895 1.594-0.895zM7.818 13c-1.863 0-3.498-1.004-4.42-2.515 1.1 0.86 3.040 1.028 5.083 0.625 2.191-0.433 3.892-1.43 4.507-2.759-0.338 2.624-2.524 4.649-5.17 4.649z"></path>
                </g>
            </svg>`,
        sizeIcon: type === 'error' ? 'w-5 h-5' : 'w-7 h-7',
    }
    const toastify = document.createElement('div');
    toastify.setAttribute('id', `content-toastify-${type}`);
    toastify.setAttribute('class', `w-max h-max min-w-80 max-w-xs flex flex-col absolute z-50 ${defaultMeasurements.background} right-4 translate-x-96 ${defaultMeasurements.top} p-2 pt-4 rounded-md drop-shadow-lg transition-transform delay-300`);
    
    const btnToastify = document.createElement('button');
    btnToastify.setAttribute('id', 'close-toastify');
    btnToastify.setAttribute('class', `${defaultMeasurements.textColor} self-end absolute top-0`);
    btnToastify.textContent = 'x';
    btnToastify.onclick = removeToastify;

    const bodyToast = document.createElement('div');
    bodyToast.setAttribute('id', 'body-toastify');
    bodyToast.setAttribute('class', 'flex gap-x-2.5 pb-2');

    const svgContainer = document.createElement('div');
    svgContainer.setAttribute('id', 'content-img');
    svgContainer.setAttribute('class', `${defaultMeasurements.sizeIcon} ${defaultMeasurements.textColor} ${type !== 'error' && 'self-center'}`);
    svgContainer.innerHTML = defaultMeasurements.icoSvg;

    const messageSpan = document.createElement('span');
    messageSpan.setAttribute('id', 'message-toastify');
    messageSpan.setAttribute('class', `${defaultMeasurements.textColor} text-sm whitespace-pre-wrap break-words`);
    messageSpan.innerHTML = defaultMeasurements.message;

    bodyToast.appendChild(svgContainer);
    bodyToast.appendChild(messageSpan);

    toastify.appendChild(btnToastify);
    toastify.appendChild(bodyToast);

    return toastify;
}

const buildToastify = () => {
    const toastifyError = createElementToastify('error');
    const toastifyTip = createElementToastify('tip');
    document.body.appendChild(toastifyError);
    document.body.appendChild(toastifyTip);
}

const deleteElementToastify = (id) => {
    if (id) {
        const toastify = document.getElementById(id);
        document.body.removeChild(toastify);
    } else {
        const toastifyError = document.getElementById('content-toastify-error');
        const toastifyTip = document.getElementById('content-toastify-tip');
        if (toastifyError) document.body.removeChild(toastifyError);
        if (toastifyTip)  document.body.removeChild(toastifyTip);
    }
}

export const inclueToastify = () => {
    if (document.getElementById('content-toastify')) return;
    
    buildToastify();
    const componentError = document.getElementById('content-toastify-error');
    const componentTip = document.getElementById('content-toastify-tip');

    if (componentError && componentTip) {
        setInterval(() => {
            componentError.classList.remove('translate-x-96');
            componentError.classList.add('translate-x-0');
        }, 50);
        setInterval(() => {
            componentTip.classList.remove('translate-x-96');
            componentTip.classList.add('translate-x-0');
        }, 450);
        setTimeout(removeToastify, 3000);
    }

}

export const removeToastify = (element) => {
    const component = element?.target?.offsetParent;
    if (component) {
        component.setAttribute('style', 'transform: translateX(24rem);');
        setTimeout(() => deleteElementToastify(element?.target?.offsetParent?.getAttribute('id')), 600);
    } else {
        const componentError = document.getElementById('content-toastify-error');
        const componentTip = document.getElementById('content-toastify-tip');
        componentError?.setAttribute('style', 'transform: translateX(24rem);');
        componentTip?.setAttribute('style', 'transform: translateX(24rem);');
        setTimeout(deleteElementToastify, 600);

    }
}
