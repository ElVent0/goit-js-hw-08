import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const localObject = {};

const inputAction = () => {
  localObject.email = formEl.elements.email.value;
  localObject.message = formEl.elements.message.value;
  //   console.log(localObject);
  writingModule();
};

const writingModule = () => {
  let stringWithData = JSON.stringify(localObject);
  localStorage.setItem('feedback-form-state', stringWithData);
};

let parsedDataFromLocalStorage;

const parsingLocal = () => {
  let dataFromLocalStorage = localStorage.getItem('feedback-form-state');
  parsedDataFromLocalStorage = JSON.parse(dataFromLocalStorage);
};

const initialForm = () => {
  // parsingLocal();
  //   console.log(parsedDataFromLocalStorage);
  //   if (parsedDataFromLocalStorage.email === null) {
  //     formEl.elements.email.value = '';
  //   } else {
  // formEl.elements.email.value = parsedDataFromLocalStorage.email;
  //   }
  //   if (parsedDataFromLocalStorage.message === null) {
  //     formEl.elements.message.value = '';
  //   } else {
  // formEl.elements.message.value = parsedDataFromLocalStorage.message;
  //   }

  const parsedDataFromLocalStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (parsedDataFromLocalStorage) {
    formEl.elements.email.value = parsedDataFromLocalStorage.email;
    formEl.elements.message.value = parsedDataFromLocalStorage.message;
  }
};

const formSubmitAction = event => {
  event.preventDefault();
  parsingLocal();
  console.log(parsedDataFromLocalStorage);
  formEl.reset();
  localObject.email = '';
  localObject.message = '';
  writingModule();
  //   localStorage.removeItem('feedback-form-state');
};

formEl.addEventListener('submit', formSubmitAction);

initialForm();

formEl.addEventListener('input', throttle(inputAction, 500));
