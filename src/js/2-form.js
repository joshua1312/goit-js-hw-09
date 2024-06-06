let formData = { email: "", message: "" };

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const formDataKey = 'feedback-form-state';

    if (localStorage.getItem(formDataKey)) {
        const storedData = JSON.parse(localStorage.getItem(formDataKey));
        emailInput.value = storedData.email;
        messageInput.value = storedData.message;
    }

    form.addEventListener('input', (event) => {
        const formData = {
            email: emailInput.value,
            message: messageInput.value
        };
        localStorage.setItem(formDataKey, JSON.stringify(formData));
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = {
            email: emailInput.value,
            message: messageInput.value
        };
        if (formData.email === "" || formData.message === "") {
            alert("Fill please all fields");
        } else {
            console.log(formData);
            localStorage.removeItem(formDataKey);
            form.reset();
        }
    });
});