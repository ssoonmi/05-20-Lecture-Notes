import { disableFormButton } from './utils/auth.js';

const form = document.querySelector('#signup-form');
const errorsContainer = document.querySelector("#errors-container");

disableFormButton("#signup-form input", "#signup-form button");

form.addEventListener('submit', async (e) => {
  console.log('submitting');
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get('email');
  const username = formData.get('username');
  const password = formData.get('password');
  const password2 = formData.get('password2');
  const _csrf = formData.get('_csrf');

  const body = { email, username, password, password2, _csrf };
  errorsContainer.innerHTML = '';
  const res = await fetch('/api/users', {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  if (!res.ok) {
    const { message, errors } = data;
    for (let error of errors) {
      const errorLi = document.createElement('li');
      errorLi.innerHTML = error;
      errorsContainer.appendChild(errorLi);
    }
    return;
  }

  window.location.href = '/home';
});