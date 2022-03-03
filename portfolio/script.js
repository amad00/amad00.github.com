(function(){
    'use strict';

    AOS.init();
    
    const body = document.querySelector('body');
    const headerBackground = document.querySelector('#header-background');
    const header =  document.querySelector('header');
    const navIcon = document.querySelector('#nav-icon');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li');

    let navOpen = false;
    let scrollValue = window.scrollY;

    navIcon.addEventListener('click', function(){

        if(navOpen){
            headerBackground.classList.remove('open');
            header.classList.remove('open');
            navIcon.classList.remove('open'); 
            nav.style.display = 'none';
            body.style.overflow = 'initial';
            navOpen = false;
        } else{
            headerBackground.className = 'open';
            header.className = 'open';
            navIcon.className = 'open'; 
            nav.style.display = 'flex';
            body.style.overflow = 'hidden';
            navOpen = true;
            
        }

    });

    navLinks.forEach(function(eachLink){
        eachLink.addEventListener('click', function(){
            headerBackground.classList.remove('open');
            header.classList.remove('open');
            navIcon.classList.remove('open'); 
            nav.style.display = 'none';
            body.style.overflow = 'initial';
            navOpen = false;

        })
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && window.scrollY >= scrollValue) {
            headerBackground.style.marginTop = '-15vh';
        } else {
            headerBackground.style.marginTop = '0';
        }
        scrollValue = window.scrollY;
    })

    /* .classList.remove('open') */

})();