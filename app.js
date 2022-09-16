const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//Display mobile menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const element = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const services = document.querySelector('#services-page');

  let scrollPosition = window.scrollY;

  if (window.innerWidth < 960) {
    return;
  }

  if (scrollPosition < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if (scrollPosition < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    services.classList.remove('highlight');
    return;
  }

  if (scrollPosition < 2345) {
    services.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((element && scrollPosition < 600) || element) {
    element.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
