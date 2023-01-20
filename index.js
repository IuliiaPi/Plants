// menu burger

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

const menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
}

const headerLogo = document.querySelector('.header__logo');
        headerLogo.addEventListener("click", onMenuLinkClick);

function onMenuLinkClick(e) {
    if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
}

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(menuLinks);
    if ( !click ) {
        menuBody.addEventListener("click", onMenuLinkClick);
    }
});



// pop-up

// import priceData from "./prices_pop-up.js";


const popUp = document.querySelector('.pop-up');
const accordionBtn = document.querySelector('.accordion-btn');
const popUpAccordionBtn = document.querySelector('.pop-up__accordion-btn');
const priceItems = document.querySelector('.price__items');

accordionBtn.addEventListener('click', (e) => {
    // document.body.classList.toggle('_lock');
    popUp.classList.toggle('visible'); 
    priceItems.classList.add('hidden'); 
});

popUpAccordionBtn.addEventListener('click', (e) => {
    // document.body.classList.remove('_lock');
    popUp.classList.remove('visible'); 
    priceItems.classList.remove('hidden'); 
});

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(popUp);
    if ( !click ) {
        // menuBody.addEventListener("click", onMenuLinkClick);
        // document.body.classList.remove('_lock');
        // popUp.classList.remove('visible'); 
        // priceItems.classList.remove('hidden'); 
        // popUp.style.display = 'none';
    }
});


// pop-up

// import contactsData from "./contacts_pop-up.js";

const contactContainer = document.querySelector('.contact__container');

contactsData.forEach((item, index) => {   // or  for(let i = 0; i < contactsData.length; i++) { }
    
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact__content');
    contactContainer.append(contactContent);

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contact__btn');
    contactContent.append(contactBtn);
    
    
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery-item');
    galleryItem.textContent = item.name;
    contactsListContainer.append(galleryItem);
});