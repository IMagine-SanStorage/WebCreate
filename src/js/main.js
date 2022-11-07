const toogleBar = document.querySelector('.navbar .navbar_toogleButton');
const menu = document.querySelector('.navbar .navbar_menu');
const icons = document.querySelector('.navbar .navbar_icons');

toogleBar.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});