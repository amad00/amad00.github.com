(function () {
    'use strict';

    AOS.init();

    const body = document.querySelector('body');
    const headerBackground = document.querySelector('#header-background');
    const header = document.querySelector('header');
    const navIcon = document.querySelector('#nav-icon');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li');
    const aboutSection = document.querySelector('#about');
    const projectSection = document.querySelector('#projects');
    const contactSection = document.querySelector('#contact');

    let navOpen = false;
    let scrollValue = window.scrollY;

    navIcon.addEventListener('click', function () {

        if (window.innerWidth < 600) {
            if (navOpen) {
                header.style.animation = 'moveOut 1s ease-in-out';
                headerBackground.classList.remove('open');
                setTimeout(function () {
                    header.classList.remove('open');
                }, 800)
                navIcon.classList.remove('open');
                nav.style.display = 'none';
                body.style.overflow = 'initial';

                aboutSection.style.filter = 'blur(0)';
                projectSection.style.filter = 'blur(0)';
                contactSection.style.filter = 'blur(0)';

                navOpen = false;
            } else {
                body.style.overflow = 'hidden';
                setTimeout(function () {
                    headerBackground.className = 'open';
                    aboutSection.style.filter = 'blur(5px)';
                    projectSection.style.filter = 'blur(5px)';
                    contactSection.style.filter = 'blur(5px)';
                }, 800)

                header.className = 'open';
                navIcon.className = 'open';
                nav.style.display = 'flex';
                header.style.animation = 'moveIn 1s ease-in-out';





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

})();