const menuBtn = document.querySelector('.menu-btn')
const burger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')


let showMenu = false

function toggleMenu() {
  if (!showMenu){
    burger.classList.add('open')
    nav.classList.add('open')
    menuNav.classList.add('open')
   
    showMenu = true
  } else {
    burger.classList.remove('open')
    nav.classList.remove('open')
    menuNav.classList.remove('open')
    
    showMenu = false
  }
}

menuBtn.addEventListener('click', toggleMenu)