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
  const signup = document.querySelector('#signup');

  let scrollPosition = window.scrollY;
  console.log(scrollPosition);

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
    signup.classList.remove('highlight__btn');
    return;
  }

  if (scrollPosition < 3000) {
    console.log('elo');
    signup.classList.add('highlight__btn');
    services.classList.remove('highlight');
    return;
  }

  if ((element && scrollPosition < 600) || element) {
    element.classList.remove('highlight');
    signup.classList.remove('highlight__btn');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
