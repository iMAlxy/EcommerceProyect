const menuOnEmail = document.querySelector('.nav__email>img');
const arrowMenu = document.querySelector('.change')
const menuByDesktop = document.querySelector('.menu-desktop');
const BurguerIcon = document.querySelector('.nav__menu');
const menuByMobile = document.querySelector('.menu-mobile');
const iconCart = document.querySelector('.nav__shopping-cart')
const asideShopping = document.querySelector('.shopping-cart__container')
const closeAsideIcon = document.querySelector('.mini-nav img')

menuOnEmail.addEventListener('click', toggleMenuDesktop);
BurguerIcon.addEventListener('click', toggleMenuMobile);
iconCart.addEventListener('click', toggleShoppingAside);
closeAsideIcon.addEventListener('click', closeShoppingAside);

function toggleMenuDesktop() {
    menuByDesktop.classList.toggle('slide-down');
    menuByMobile.classList.remove('slide-right');
}

function toggleMenuMobile() {
    menuByMobile.classList.toggle('slide-right');
    menuByDesktop.classList.remove('slide-down');
    asideShopping.classList.remove('slide-down');
}

function toggleShoppingAside() {
    asideShopping.classList.toggle('slide-down')
    menuByMobile.classList.remove('slide-right');
}

function closeShoppingAside() { 
    asideShopping.classList.remove('slide-down');
}