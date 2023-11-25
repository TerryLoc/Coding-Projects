'use strict';

const scrollControl = document.querySelector('.gallery');

const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

scrollControl.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollControl.scrollLeft += evt.deltaY;
});
