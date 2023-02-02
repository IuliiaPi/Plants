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
    if (!click) {
        menuBody.addEventListener("click", onMenuLinkClick);
    }
});



// pop-up price

// import priceData from "./prices_pop-up.js";

const pricePopUps = document.querySelectorAll('.pop-up');

const popUpBasics = document.querySelector('.pop-up_basics');
const popUpStandard = document.querySelector('.pop-up_standard');
const popUpProCare = document.querySelector('.pop-up_pro-care');

const accordionBtn = document.querySelector('.accordion-btn');

const accordionBtnBasics = document.querySelector('.accordion-btn_basics');
const accordionBtnStandard = document.querySelector('.accordion-btn_standard');
const accordionBtnProCare = document.querySelector('.accordion-btn_pro-care');

const popUpAccordionBtns = document.querySelectorAll('.pop-up__accordion-btn');
const priceItems = document.querySelector('.price__items');

accordionBtnBasics.addEventListener('click', (e) => {
    popUpBasics.classList.toggle('visible');
    priceItems.classList.add('hidden');
});

accordionBtnStandard.addEventListener('click', (e) => {
    popUpStandard.classList.toggle('visible');
    priceItems.classList.add('hidden');
});

accordionBtnProCare.addEventListener('click', (e) => {
    popUpProCare.classList.toggle('visible');
    priceItems.classList.add('hidden');
});


if (popUpAccordionBtns) {
    popUpAccordionBtns.forEach(popUpAccordionBtn => {
        popUpAccordionBtn.addEventListener("click", onPopUpAccordionBtnClick);
    });
}

function onPopUpAccordionBtnClick(e) {
    pricePopUps.forEach(popUp => {
        popUp.classList.remove('visible');
    });
    priceItems.classList.remove('hidden');
}


// pop-up contacts

// import contactsData from "./contacts_pop-up.js";

const contactsData = [

    {
        id: 1,
        city: 'Canandaigua, NY',
        phone: '+1	585	393 0001',
        address: '151 Charlotte Street',
    },
    {
        id: 2,
        city: 'New York City',
        phone: '+1	212	456 0002',
        address: '9 East 91st Street',
    },
    {
        id: 3,
        city: 'Yonkers, NY',
        phone: '+1 914 678 0003',
        address: '511 Warburton Ave',
    },
    {
        id: 4,
        city: 'Sherrill, NY',
        phone: '+1	315	908 0004',
        address: '14 WEST Noyes BLVD',
    },

]

const contactsSelect = document.querySelector('.contacts__select');
const accordionBtnContacts = document.querySelector('.accordion-btn_contacts');
const accordionBtnArrow = document.querySelector('.accordion-btn__arrow_contacts');

const contactsOptions = document.querySelector('.contacts__options');
const contactsPopUp = document.querySelector('.contacts__pop-up');

accordionBtnContacts.addEventListener('click', (e) => {
    contactsOptions.classList.toggle('visible');
    contactsSelect.classList.toggle('contacts__select_active');
    contactsPopUp.classList.remove('visible');

    accordionBtnArrow.classList.toggle('accordion-btn__arrow_active');
});


const selectTitle = document.querySelector('.select__title');

const contactsOptionCanandaigua = document.querySelector('.contacts__option_canandaigua');
const contactsOptionNewYorkCity = document.querySelector('.contacts__option_new-york-city');
const contactsOptionYonkers = document.querySelector('.contacts__option_yonkers');
const contactsOptionSherrill = document.querySelector('.contacts__option_sherrill');

const contactItemCity = document.querySelector('.contact__list_subtitle .contact__item_city');
const linkCallUs = document.querySelector('.link_call-us');
const contactItemOfficeAddress = document.querySelector('.contact__list_subtitle .contact__item_office-address');

const btnCallUs = document.querySelector('.btn_call-us');
const btnLinkCallUs = document.querySelector('.btn_call-us .link_call-us');

// const contactContainer = document.querySelector('.contact__container');
// contactsData.forEach((item, index) => {   // or  for(let i = 0; i < contactsData.length; i++) { }

//     selectTitle.textContent = "City";
//     selectTitle.textContent = item.city;

//     contactItemCity.textContent = item.city;


//     const contactContent = document.createElement('div');
//     contactContent.classList.add('contact__content');
//     contactContainer.append(contactContent);

//     const contactBtn = document.createElement('button');
//     contactBtn.classList.add('contact__btn');
//     contactContent.append(contactBtn);


//     const contactItem = document.createElement('li');
//     contactItem.classList.add('contact__item');
//     contactItem.textContent = item.name;
//     contactsListContainer.append(contactItem);
// });

// const contactPopUpContent = document.createElement('div');
// contactPopUpContent.classList.add('contact__pop-up-content');
// contactPopUp.append(contactPopUpContent);

contactsOptionCanandaigua.addEventListener('click', (e) => {

    accordionBtnArrow.classList.remove('accordion-btn__arrow_active');
    contactsOptions.classList.toggle('visible');
    contactsPopUp.classList.toggle('visible');

    selectTitle.textContent = "Canandaigua, NY";
    contactItemCity.textContent = "Canandaigua, NY";
    linkCallUs.textContent = '+1 585 393 0001';
    linkCallUs.setAttribute("href", "tel:+1 585 393 0001");

    contactItemOfficeAddress.textContent = '151 Charlotte Street';

    btnLinkCallUs.setAttribute("href", "tel:+1 585 393 0001");
});

contactsOptionNewYorkCity.addEventListener('click', (e) => {

    accordionBtnArrow.classList.remove('accordion-btn__arrow_active');
    contactsOptions.classList.toggle('visible');
    contactsPopUp.classList.toggle('visible');

    selectTitle.textContent = "New York City";
    contactItemCity.textContent = "New York City";
    linkCallUs.textContent = '+1 212 456 0002';
    linkCallUs.setAttribute("href", "tel:+1 212 456 0002");

    contactItemOfficeAddress.textContent = '9 East 91st Street';

    btnLinkCallUs.setAttribute("href", "tel:+1 212 456 0002");
});

contactsOptionYonkers.addEventListener('click', (e) => {

    accordionBtnArrow.classList.remove('accordion-btn__arrow_active');
    contactsOptions.classList.toggle('visible');
    contactsPopUp.classList.toggle('visible');

    selectTitle.textContent = "Yonkers, NY";
    contactItemCity.textContent = "Yonkers, NY";
    linkCallUs.textContent = '+1 914 678 0003';
    linkCallUs.setAttribute("href", "tel:+1 914 678 0003");

    contactItemOfficeAddress.textContent = '511 Warburton Ave';

    btnLinkCallUs.setAttribute("href", "tel:+1 914 678 0003");
});

contactsOptionSherrill.addEventListener('click', (e) => {

    accordionBtnArrow.classList.remove('accordion-btn__arrow_active');
    contactsOptions.classList.toggle('visible');
    contactsPopUp.classList.toggle('visible');

    selectTitle.textContent = "Sherrill, NY";
    contactItemCity.textContent = "Sherrill, NY";
    linkCallUs.textContent = '+1 315 908 0004';
    linkCallUs.setAttribute("href", "tel:+1 315	908 0004");

    contactItemOfficeAddress.textContent = '14 WEST Noyes BLVD';

    btnLinkCallUs.setAttribute("href", "tel:+1 315 908 0004");
});


btnCallUs.addEventListener('click', (e) => {

    contactsOptions.classList.remove('visible');
    contactsPopUp.classList.toggle('visible');

    contactsSelect.classList.toggle('contacts__select_active');
    accordionBtnArrow.classList.remove('accordion-btn__arrow_active');

    selectTitle.textContent = "City";
});


// service block

const serviceBtns = document.querySelectorAll('.service__btn');
const serviceItems = document.querySelectorAll('.service__item');

// if (serviceBtns) {
// for(let i = 0; i < 3; i++) { 
//     serviceBtns.addEventListener("click", onServiceBtnClick);  
// }

// serviceBtns.forEach(serviceBtn => {
// serviceBtn.addEventListener("click", onServiceBtnClick);
// });
// }

// function onServiceBtnClick(e) {
// serviceItems.forEach(serviceItem => {
// serviceBtns.classList.add('btn_active');
// serviceItem.classList.add('service__item_invalid');
// });

const btnGardens = document.querySelector('.btn_gardens');
const btnLawn = document.querySelector('.btn_lawn');
const btnPlanting = document.querySelector('.btn_planting');

const serviceItemsGardens = document.querySelectorAll('.service__item_gardens');
const serviceItemsLawn = document.querySelectorAll('.service__item_lawn');
const serviceItemsPlanting = document.querySelectorAll('.service__item_planting');

if (btnGardens) {
btnGardens.addEventListener("click", function (e) {
    btnGardens.classList.add('btn_active');
    btnLawn.classList.remove('btn_active');
    btnPlanting.classList.remove('btn_active');

    serviceItemsGardens.forEach(serviceItemGardens => {
        serviceItemGardens.classList.remove('service__item_invalid');
        serviceItemGardens.classList.add('service__item_valid');
    });

    serviceItemsLawn.forEach(serviceItemLawn => {
        serviceItemLawn.classList.add('service__item_invalid');
    });

    serviceItemsPlanting.forEach(serviceItemPlanting => {
        serviceItemPlanting.classList.add('service__item_invalid');
    });

});
}

btnLawn.addEventListener("click", function (e) {
    btnGardens.classList.remove('btn_active');
    btnLawn.classList.add('btn_active');
    btnPlanting.classList.remove('btn_active');

    serviceItemsGardens.forEach(serviceItemGardens => {
        serviceItemGardens.classList.remove('service__item_valid');
        serviceItemGardens.classList.add('service__item_invalid');
    });

    serviceItemsLawn.forEach(serviceItemLawn => {
        serviceItemLawn.classList.remove('service__item_invalid');
    });

    serviceItemsPlanting.forEach(serviceItemPlanting => {
        serviceItemPlanting.classList.add('service__item_invalid');
    });

});


btnPlanting.addEventListener("click", function (e) {
    btnGardens.classList.remove('btn_active');
    btnLawn.classList.remove('btn_active');
    btnPlanting.classList.add('btn_active');

    serviceItemsGardens.forEach(serviceItemGardens => {
        serviceItemGardens.classList.add('service__item_invalid');
    });

    serviceItemsLawn.forEach(serviceItemLawn => {
        serviceItemLawn.classList.remove('service__item_invalid');
        serviceItemLawn.classList.add('service__item_invalid');
    });

    serviceItemsPlanting.forEach(serviceItemPlanting => {
        serviceItemPlanting.classList.remove('service__item_invalid');
    });

});

    // if (serviceBtns.classList.contains('.service__item_invalid')) {
    //     serviceItems.classList.remove('.service__item_invalid');
    // }
