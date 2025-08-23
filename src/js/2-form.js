let formData = { email: '', message: '' };
const inputForm = document.querySelector('.feedback-form');

const savedData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
formData = { ...formData, ...savedData };
inputForm.elements.email.value = formData.email;
inputForm.elements.message.value = formData.message;

inputForm.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

inputForm.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  inputForm.reset();
});