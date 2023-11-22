'use strict';

const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const msgError = document.getElementById('msg-error');
const submitError = document.getElementById('submit-error');

function validateName() {
  let name = document.getElementById('contact-name').value;

  if (name.length === 0) {
    nameError.innerText = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerText = 'Write full name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
