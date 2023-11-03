'use strict';

let toastBox = document.getElementById('toa');

function showToast() {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerText = 'Success';
}
