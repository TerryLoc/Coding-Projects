'use strict';

// localStorage.clear();

const notesCon = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
  notesCon.innerHTML = localStorage.getItem('notes');
}

showNotes();

function updateStorge() {
  localStorage.setItem('notes', notesCon.innerHTML);
}

createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', true);
  img.setAttribute('contenteditable', false);
  img.src = 'images/delete.png';
  notesCon.appendChild(inputBox).appendChild(img);
});

notesCon.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateStorge();
  } else if (e.target.tagName === 'P') {
    notes = document.querySelectorAll('.input-box');
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorge();
      };
    });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.execCommand('insertLineBreak');
    event.preventDefault();
  }
});
