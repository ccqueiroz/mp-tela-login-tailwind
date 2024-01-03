const changeTypePasswordInput = (component, locked = true) => {
    const input = component.parentElement.lastElementChild;
    input.setAttribute('type', locked ? 'password' : 'text');
}

export default changeTypePasswordInput;