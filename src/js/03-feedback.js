import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

formEl.addEventListener('input', throttle(recordDataFromInput, 500));
formEl.addEventListener('submit', buttonSubmit);

function recordDataFromInput() {
  const dataFromInput = {};
  dataFromInput.email = emailEl.value;
  dataFromInput.message = messageEl.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataFromInput));
}

function buttonSubmit(event) {
  event.preventDefault();
  console.log({
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  });

  event.currentTarget.reset();
  localStorage.clear();
}

function initialForm() {
  const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (parsedData !== null) {
    emailEl.value = parsedData.email;
    messageEl.value = parsedData.message;
  }
}

initialForm();
