const menuOnEmail = document.querySelector('.nav__email>img');
const arrowMenu = document.querySelector('.change')
const menuByDesktop = document.querySelector('.menu-desktop');

menuOnEmail.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop() {
    menuByDesktop.classList.toggle('inactive');
}