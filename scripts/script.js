const headerNav = document.getElementById('header__nav');
const headerButton = document.getElementById('header__nav__button');
const headerIcon = document.getElementById('header__nav__icon');

headerButton.onclick = () => {
    if (headerNav.classList.toggle('header__top__nav__phone')) {
        headerIcon.src = '/content/header/navClose.svg';
    } else {
        headerIcon.src = '/content/header/nav.svg';
    }
}

AOS.init({
    once: true,
    disable: 'mobile'
});