//инпорт лода
import throttle from 'lodash.throttle';

// визначили сталу змінну ключ для локалстораджу
const LOCAL_KEY = 'feedback-form-state';

// визначили Дом елемент для форми
const formDom = document.querySelector('.feedback-form');

// деструктурізація DOM
const { email, message } = formDom.elements;

//отримання останніх данних з локалстореджа або
let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
// очищення значень у полях ДОМ
resetForm();
function resetForm() {
  if (formDom) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

// слухач на зміну значень  email, message
formDom.addEventListener('input', throttle(onInputData, 1000));

/**
 * onInputData
 *  колбек функція на зміну значен ь
 */
function onInputData() {
  //передача змінених значень у formData
  formData = { email: email.value, message: message.value };

  // зповнення стораджа значеннямі із фіксованим ключем
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

// слухач на submit
formDom.addEventListener('submit', hendlerSubmit);

/**
 * onInputData
 * @param {DOMelement} event
 *  колбек функція на submit
 */
function hendlerSubmit(event) {
  // переривання стандартного поводження при submit
  event.preventDefault();

  //перевірка заповнених значень DOMelements
  if (email.value === '' || message.value === '') {
    return alert('Fill please all fields');
  }

  //виведення результатів formData
  console.log(formData);

  //скидання значень елементів форми
  event.currentTarget.reset();

  //очищення значень в локалсторедже по ключу
  localStorage.removeItem(LOCAL_KEY);

  //очищення formData
  formData = {};
}
