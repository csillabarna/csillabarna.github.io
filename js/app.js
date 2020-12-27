const menuBtn = document.querySelector('.menu-btn')
const burger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const navItems = Array.from(document.querySelectorAll('.menu-nav__item'))
const slides = document.getElementsByClassName('mySlides')
const dots = document.getElementsByClassName('dot')
const header = document.querySelector('.header')
const footer = document.querySelector('.social-icons')
let showMenu = false
let slideIndex = 1

function toggleMenu() {
  if (!showMenu){
    burger.classList.add('open')
    nav.classList.add('open')
    menuNav.classList.add('open')
    navItems.forEach(item =>item.classList.add('open'))
    showMenu = true
  } else {
    burger.classList.remove('open')
    nav.classList.remove('open')
    menuNav.classList.remove('open')
    navItems.forEach(item =>item.classList.remove('open'))
    showMenu = false
    window.onload
  }
}

menuBtn.addEventListener('click', toggleMenu)


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n)
}

// dots
function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  let i

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}
showSlides(slideIndex)

// keyboard navigation for carousel
function keyboard (event){ 
  switch (event.keyCode){
    case 37:
      plusSlides(-1)
      break
    case 39:
      plusSlides(+1)
      break
  }
}

window.addEventListener('keydown', keyboard)

// hide navbar and footer when scrolling down
//  - show when scrolling up

let prevScrollpos = window.pageYOffset
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    header.style.top = '0'
    footer.style.top = '150px'
    header.style.transition = 'all 0.3s ease-in-out'
    footer.style.transition = 'all 0.6s ease-in-out'

  } else {
    header.style.top = '-150px'
    footer.style.top = '-250px'
  }
  prevScrollpos = currentScrollPos
}

