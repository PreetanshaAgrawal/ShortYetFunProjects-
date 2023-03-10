// grab elements (a new way to grab elements when you have too many elements)
const selectElement = selector =>{
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Cannot find element ${selector}`);
};


// nav styles to scroll
const scrollElement = () =>{
    const headerElement = selectElement("#header");
    if(this.scrollY >= 15) {
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollElement);


// open menu and search popup
const menuToggleIcon = selectElement("#menu-toggle-icon");

const toggleMenu = () =>{
    const mobileMenu = selectElement("#menu");
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);


// open/close search from popup
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));


// close the search popup with esc keyPress
window.addEventListener('keyup', event => {
    if(event.key === 'Escape') {
        searchFormContainer.classList.remove('activated');
    }
});

// Switch theme and add it to localStorage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    bodyElement.classList.add('light-theme')
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');
    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }
    else{
        localStorage.removeItem('currentTheme');
    }
})

// swiper - (swiper is open source js and css library for dragging the slider)

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation : {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3
        }
    }
})