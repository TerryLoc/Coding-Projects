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

function validatePhone() {
  let number = document.getElementById('contact-phone').value;

  if (number.length === 0) {
    phoneError.innerText = 'Phone number is required';
    return false;
  }
  if (number.length !== 10) {
    phoneError.innerText = 'Number should be 10 digits';
    return false;
  }

  if (!number.match(/^[0-9]{10}$/)) {
    phoneError.innerText = 'Only digits please';
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById('contact-email').value;

  if (email.length === 0) {
    emailError.innerText = 'Email is required';
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email invalid';
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMsg() {
  let msg = document.getElementById('contact-msg').value;
  let required = 30;
  let left = required - msg.length;

  if (left > 0) {
    msgError.innerHTML = left + ' more characters required';
    return false;
  }

  msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMsg()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fill out the form fully.';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
}
