const btnMenu = document.querySelector('#menu-btn')

function toggleMenu() {
    const nav = document.querySelector('#navMobile')
    nav.classList.toggle('true')
} 

btnMenu.addEventListener('click', toggleMenu)