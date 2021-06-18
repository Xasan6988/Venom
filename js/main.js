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


// всплывающая форма

const hideForm = document.querySelector('.hide-form');
const orederTicket = document.querySelector('.order-ticket');
const orderTrigger = document.querySelector('.order-trigger');
const orderTicketForm = document.querySelector('.order-ticket__form');
const orderTicketFormWrapper = document.querySelector('.order-ticket__form-wrapper');
const orderTicketPreloaderWrapper = document.querySelector('.order-ticket__preloader-wrapper');
const orderTicketThanksWrapper = document.querySelector('.order-ticket__thanks-wrapper');
const orderTicketThanksName = document.querySelector('.order-ticket__thanks-name');


setTimeout(() => {
  const heightForm = orederTicket.offsetHeight;

  hideForm.style.bottom = `-${heightForm}px`;
}, 1000);

const sendData = (data, callback, callBefore) => {

  if (callBefore) callBefore();

  fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(callback)
};

const showPreloader = () => {
  orderTicketFormWrapper.style.display = 'none';
  orderTicketPreloaderWrapper.style.display = 'block';
};

const showThankYou = (data) => {
  orderTicketFormWrapper.style.display = 'none';
  orderTicketPreloaderWrapper.style.display = 'none';
  orderTicketThanksWrapper.style.display = 'block';
  orderTicketThanksName.textContent = data.name;
};


orderTrigger.addEventListener('click', () => {
  hideForm.classList.toggle('hide-form-active');
});

orderTicketForm.addEventListener('change', e => {
  const target = e.target;
  const label = target.labels[0];

  if (label && target.value) {
    label.classList.add('order-ticket__label-focus');
  } else {
    label.classList.remove('order-ticket__label-focus');
  }
});


orderTicketForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(orderTicketForm);
  const data = {};

  for (let [name,  value] of formData) {
    data[name] = value;
  }

  sendData(data, showThankYou, showPreloader);
});

