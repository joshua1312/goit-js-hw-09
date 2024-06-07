let formData = { email: "", message: "" };

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const form_Key = 'feedback-form-state';
    const message_Input = form.querySelector('textarea[name="message"]');
    const email_Input = form.querySelector('input[name="email"]');

    if (localStorage.getItem(form_Key)) {
        const storedData = JSON.parse(localStorage.getItem(form_Key));
        message_Input.value = storedData.message;
        email_Input.value = storedData.email;

    }

    form.addEventListener('input', () => {
        const formData = {
            message: message_Input.value,
            email: email_Input.value
        };
        localStorage.setItem(form_Key, JSON.stringify(formData));
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = {
            message: message_Input.value,
            email: email_Input.value
        };
        if (formData.email === "" || formData.message === "") {
            alert("Fill please all fields");
        } else {
            console.log(formData);
            localStorage.removeItem(form_Key);
            form.reset();
        }
    });
});