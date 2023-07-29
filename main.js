const menuOnEmail = document.querySelector('.nav__email>img');
const arrowMenu = document.querySelector('.change')
const menuByDesktop = document.querySelector('.menu-desktop');
const BurguerIcon = document.querySelector('.nav__menu');
const menuByMobile = document.querySelector('.menu-mobile');

menuOnEmail.addEventListener('click', toggleMenuDesktop);
BurguerIcon.addEventListener('click', toggleMenuMobile);

function toggleMenuDesktop() {
    menuByDesktop.classList.toggle('slide-down');
}

function toggleMenuMobile() {
    menuByMobile.classList.toggle('slide-right');
}
