const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];
const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: '',
};

function initializeForm() {
    const infoData = localStorage.getItem(STORAGE_KEY);
    if (infoData) {
        formData = JSON.parse(infoData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleInput(event) {
    formData[event.target.name] = event.target.value;
    saveToLocalStorage();
}

function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log('Form Data:', formData);

    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    form.reset();
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
initializeForm();