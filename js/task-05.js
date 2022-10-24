const inputEll = document.querySelector("#name-input");
const outputEll = document.querySelector('#name-output');
const nameEll = ({ currentTarget }) => {
    outputEll.textContent = currentTarget.value;

    if (nameEll.textContent === "") {
        nameEll.textContent = "Anonymous"
    }
}

inputEll.addEventListener('input', nameEll)
