'use strict';

const scrollControl = document.querySelector('.gallery');

const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

scrollControl.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollControl.scrollLeft += evt.deltaY;
  scrollControl.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener('click', () => {
  scrollControl.style.scrollBehavior = 'smooth';
  scrollControl.scrollLeft += 900;
});
backBtn.addEventListener('click', () => {
  scrollControl.style.scrollBehavior = 'smooth';
  scrollControl.scrollLeft -= 900;
});
