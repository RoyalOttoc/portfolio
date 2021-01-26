'use strict';

// Make navbar trasparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener('scroll', ()=>{
    
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark')
    } else{
        navbar.classList.remove('navbar--dark')
    }
        
})

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link
    
    if(link == null){
        return;
    }
    
    scrollIntoView(link);
});

//Handel click on "contact me" button on home
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', ()=>{
    scrollIntoView('#contact')
})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'})
}
