const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert(`Всі поля повинні бути заповненні`);
    }

    console.log(`email: ${login.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}
