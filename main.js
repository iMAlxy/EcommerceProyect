const menuOnEmail = document.querySelector('.nav__email>img');
const arrowMenu = document.querySelector('.change');
const menuByDesktop = document.querySelector('.menu-desktop');
const burguerIcon = document.querySelector('.nav__menu');
const menuByMobile = document.querySelector('.menu-mobile');
const iconCart = document.querySelector('.nav__shopping-cart');
const asideShopping = document.querySelector('.shopping-cart__container');
const closeAsideIcon = document.querySelector('.mini-nav img');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');
const productDetailContainerCloseIcon = document.querySelector('.product-detail__images > img');

menuOnEmail.addEventListener('click', toggleMenuDesktop);
burguerIcon.addEventListener('click', toggleMenuMobile);
iconCart.addEventListener('click', toggleShoppingAside);
closeAsideIcon.addEventListener('click', closeShoppingAside);
productDetailContainerCloseIcon.addEventListener('click', closeProductDetailAside);

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
    asideShopping.classList.toggle('slide-down');
    menuByMobile.classList.remove('slide-right');
    productDetailContainer.classList.remove('slide-left');
}

function closeShoppingAside() { 
    asideShopping.classList.remove('slide-down');
    productDetailContainer.classList.remove('slide-left');
}

function openProductDetailAside() {
    productDetailContainer.classList.add('slide-left');
    menuByMobile.classList.remove('slide-right');
    asideShopping.classList.remove('slide-down');
}

function closeProductDetailAside() {
    productDetailContainer.classList.remove('slide-left');
}

const productList = [];
productList.push({
    name: 'T-Shirt',
    price: 120,
    image: 'https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Shoes',
    price: 320,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Camera',
    price: 980,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'T-Shirt',
    price: 120,
    image: 'https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Shoes',
    price: 320,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Camera',
    price: 980,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'T-Shirt',
    price: 120,
    image: 'https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Shoes',
    price: 320,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Camera',
    price: 980,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'T-Shirt',
    price: 120,
    image: 'https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Shoes',
    price: 320,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Camera',
    price: 980,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('cards-container__product');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);;
        productImg.classList.add('cards-container__img');
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('cards-container__product-info');
    
        const productInfoData = document.createElement('div');
    
        const productInfoDataPrice = document.createElement('p');
        productInfoDataPrice.innerText = '$' + product.price;
        const productInfoDataName = document.createElement('p');
        productInfoDataName.innerText = product.name;
    
        productInfoData.append(productInfoDataPrice, productInfoDataName);
    
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productInfoFigureImg)
    
        productInfo.append(productInfoData, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);