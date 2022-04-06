(function () {
    'use strict';

    AOS.init();

    const body = document.querySelector('body');
    const headerBackground = document.querySelector('#header-background');
    const header = document.querySelector('header');
    const navIcon = document.querySelector('#nav-icon');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li');

    let navOpen = false;
    let scrollValue = window.scrollY;

    navIcon.addEventListener('click', function () {

        if (window.innerWidth < 600) {
            if (navOpen) {
                headerBackground.classList.remove('open');
                header.classList.remove('open');
                navIcon.classList.remove('open');
                nav.style.display = 'none';
                body.style.overflow = 'initial';
                navOpen = false;
            } else {
                body.style.overflow = 'hidden';
                headerBackground.className = 'open';
                header.className = 'open';
                navIcon.className = 'open';
                nav.style.display = 'flex';

                navOpen = true;

            }
        }

    });

    navLinks.forEach(function (eachLink) {
        if (window.innerWidth < 600) {
            eachLink.addEventListener('click', function () {
                headerBackground.classList.remove('open');
                header.classList.remove('open');
                navIcon.classList.remove('open');
                nav.style.display = 'none';
                body.style.overflow = 'initial';
                navOpen = false;

            })
        }
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100 && window.scrollY >= scrollValue) {
            headerBackground.style.marginTop = '-15vh';
        } else {
            headerBackground.style.marginTop = '0';
        }
        scrollValue = window.scrollY;
    })

    window.addEventListener('load', function () {
        alert('Hello, my portfolio site is still under construction, but please feel free to look around.');
    })

    /* .classList.remove('open') */

})();