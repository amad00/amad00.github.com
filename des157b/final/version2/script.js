(function(){
    'use strict';
    const participateBtn = document.querySelector('#welcome-btns button');
    const galleryBtn = document.querySelectorAll('#welcome-btns button')[1];
    const continueBtnIntro = document.querySelectorAll('.quotes > button')[0];
    const prevBtns = document.querySelectorAll('.prev-btn');
    const nextBtns = document.querySelectorAll('.next-btn');
    const submitBtn = document.querySelector('#submit-btn');
    const viewGalleryBtn = document.querySelectorAll('.quotes > button')[1];

    const welcomeSection = document.querySelector('#welcome');
    const quotes = document.querySelectorAll('.quotes');
    const questions = document.querySelector('#questions');
    const forms = document.querySelectorAll('form');
    const gallerySection = document.querySelector('#gallery');

    galleryBtn.addEventListener('click', function() {
        welcomeSection.style.display = 'none';
        gallerySection.style.display = 'flex';
    })

    participateBtn.addEventListener('click', function() {
        welcomeSection.style.display = 'none';
        quotes[0].style.display = 'flex';
    })

    continueBtnIntro.addEventListener('click', function() {
        quotes[0].style.display = 'none';
        questions.style.display = 'flex';
        forms[0].style.display = 'block';
    })

    for (let i = 0; i < nextBtns.length; i++) {
        nextBtns[i].addEventListener('click', function(event) {
            event.preventDefault();
            forms[i].style.display = 'none';
            forms[i+1].style.display = 'block';
        })
    }

    for (let i = 0; i < prevBtns.length; i++) {
        prevBtns[i].addEventListener('click', function(event) {
            event.preventDefault();
            forms[i+1].style.display = 'none';
            forms[i].style.display = 'block';
        })
    }

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        forms[4].style.display = 'none';
        questions.style.display = 'none';
        quotes[1].style.display = 'flex';
    })

    viewGalleryBtn.addEventListener('click', function(event) {
        event.preventDefault();
        quotes[1].style.display = 'none';
        gallerySection.style.display = 'flex';
    })
    
})()
