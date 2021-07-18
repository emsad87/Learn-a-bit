const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar__menu');
const navLink = document.querySelectorAll('.navbar__link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}
