
menuButton = document.getElementById('menuButton');
menuList = document.querySelector('nav .menu');

menuButton.addEventListener('click',toggleMenu);
function toggleMenu(){
    menuList.classList.toggle('onOffMenu');
    menuButton.classList.toggle('fa-xmark');
    menuButton.classList.toggle('fa-bars');
}