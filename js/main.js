let menuBtn = document.querySelector('.menu-button');
let closeBtn = document.querySelector('.menu-close');
let menu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
  menu.classList.add('is-active');
  closeBtn.classList.add('is-active');
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-active');
  closeBtn.classList.remove('is-active');
})
