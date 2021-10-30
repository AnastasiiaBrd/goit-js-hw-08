import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
initForm();
form.addEventListener(`input`, throttle(onInputForm, 500));

function onInputForm() {
  const formData = new FormData(form);
  let userForm = {};
  formData.forEach((value, name) => (userForm[name] = value));
  localStorage.setItem(localStorageKey, JSON.stringify(userForm));
}
function initForm() {
  let persistedForm = localStorage.getItem(localStorageKey);
  if (persistedForm) {
    persistedForm = JSON.parse(persistedForm);
    Object.entries(persistedForm).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
form.addEventListener(`submit`, onSubmitForm);
function onSubmitForm(evt) {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  let userForm = {};
  const formData = new FormData(form);
  formData.forEach((value, name) => (userForm[name] = value));
  console.log(userForm);
  form.reset();
}
