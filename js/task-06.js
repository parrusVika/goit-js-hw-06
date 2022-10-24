const textInputEll = document.querySelector('#validation-input');

textInputEll.addEventListener('blur', () => {
    if (textInputEll.value.length == textInputEll.getAttribute('data-length')) {
        textInputEll.classList.add('valid');
        textInputEll.classList.remove('invalid')
    } else {
        textInputEll.classList.remove('valid');
        textInputEll.classList.add('invalid')
    }
})