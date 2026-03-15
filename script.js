const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');
const form = document.querySelector('.contact-form');
const feedback = document.querySelector('.form-feedback');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (form && feedback) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    feedback.textContent = 'Thanks! Your request was captured. We will contact you shortly.';
    form.reset();
  });
}
