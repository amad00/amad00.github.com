(function () {
    "use strict";

    const mainTag = document.querySelector('main');
    const pages = document.querySelectorAll('header a');
    const imgTags = document.querySelectorAll('main section div img');
    const playBtn = document.getElementById('play-btn');
    const playImg = document.querySelector('#play-btn img');
    const slideShowNum = document.querySelector('#top-bar div p');
    const figcaptionTag = document.querySelector('figcaption');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');
    const overlayImg = document.querySelector('#overlay figure img')
    const arrows = document.getElementById('arrows')
    const leftArrow = document.querySelectorAll('#arrows button')[0]
    const rightArrow = document.querySelectorAll('#arrows button')[1]

    let currentImage = 0;
    let interval;

    let slideShowIntruction;
    let slideShowIntructionTimer;
    
    
    window.addEventListener('load', function(){
        if(mainTag.className == 'landscape'){
            const preloader = document.getElementById('preloader');
            preloader.className = 'fadeout';

            preloader.addEventListener('animationend', function(){
                preloader.style.display = 'none';
            })
           
        }
        
    })
  
     /*** Images and figcaption text for overlay ***/
    const landscapeText = [
        'Mendocino, 2018',
        'Portland, 2019',
        '2016',
        'Russian River, 2017',
        'Portland, 2019',
        '2018'
    ];
    const microText = [
        'Portland, 2019',
        'El Cerrito, 2017',
        'Russian River, 2017',
        'El Cerrito, 2017',
        'El Cerrito, 2017',
        'Russian River, 2017'
    ];
    const sunsetText = [
        'El Cerrito, 2017',
        '2018',
        'Stinson, 2017',
        'El Cerrito, 2017',
        'El Cerrito, 2017',
        'Stinson, 2017'
    ];
    const urbanText = [
        'San Francisco, 2018',
        'San Francisco, 2018',
        'Berkeley, 2016',
        'San Francisco, 2018',
        'Long Beach, 2019',
        'El Cerrito, 2017'
    ];

    const myImages = [
        `${mainTag.className}1.jpg`,
        `${mainTag.className}2.jpg`,
        `${mainTag.className}3.jpg`,
        `${mainTag.className}4.jpg`,
        `${mainTag.className}5.jpg`,
        `${mainTag.className}6.jpg`
    ];

    playImg.addEventListener('click', playSlideShow);

    /*** Close the slidehow if X button or escape key is pressed ***/
    closeBtn.addEventListener('click', function(){
        overlay.style.display = 'none';
        pauseSlideShow();
        clearInterval(slideShowIntructionTimer)
    });
    document.addEventListener('keydown', function(event){
        if(event.key == "Escape"){
            overlay.style.display = 'none';
            pauseSlideShow();
            clearInterval(slideShowIntructionTimer)
        }})

    for (let i = 0; i < imgTags.length; i++) {
        imgTags[i].addEventListener('click', function(){
            setOverlay(i)})
    }

    /*** Display and hide arrwo buttons if mouse is on or off image ***/
    overlayImg.addEventListener('mouseover', function(){
        arrows.style.visibility = 'visible'})
        overlayImg.addEventListener('mouseout', function(){
        arrows.style.visibility = 'hidden'})
    arrows.addEventListener('mouseover', function(){
        arrows.style.visibility = 'visible'})
    arrows.addEventListener('mouseout', function(){
        arrows.style.visibility = 'hidden'})
    

  /*** Event listener to chnage overlay picture if arrows on images were 
        clicked or the left and rigght arrow keys were pressed ***/
    leftArrow.addEventListener('click', function(){
        currentImage-= 2;
        changePhoto()})

    rightArrow.addEventListener('click', function(){
        changePhoto()})

    document.addEventListener('keydown', function(event){
        if(event.keyCode == 37){
            currentImage-= 2;
            changePhoto();
        } else if(event.keyCode == 39){
            changePhoto();
        }
    });

     /*** Display overlay and set with image selected ***/
    function setOverlay(i){
        overlay.style.display = 'flex';
        let imgSrc = imgTags[i].src.split('-')
        let imgSrc1 = imgSrc[1].split('.')
        let imgNum = parseInt(imgSrc1[0][imgSrc1[0].length - 1])

        overlayImg.src = `../images/${imgSrc1[0]}.jpg`;
        changeFigcaption(mainTag, imgNum - 1 )
        slideShowNum.textContent = `${imgNum}/6`;
        currentImage = imgNum - 1;
       
        //start blinking 'click to start slideshow' text
        slideShowIntruction = document.querySelectorAll('#top-bar div p')[1];
        if(slideShowIntruction) {
            slideShowIntructionTimer =  setInterval(function(){
                slideShowIntruction.className = (slideShowIntruction.className == 'imageFade' ? 'imageFadeIn' : 'imageFade')
            }, 2000)
        }
    }

    /*** Change menu text color for the page currently on***/
    function changePageLinkColor(){
        let classNameP = mainTag.className;
 
        for(let i=0; i<pages.length; i++){
            if(pages[i].textContent.toLowerCase() == classNameP){
                pages[i].style.color = 'black';
            } 
        }
    }
    changePageLinkColor();
    

    function playSlideShow(){
        playBtn.id = 'pause-btn';
        playImg.setAttribute('alt', 'pause button');
        playImg.src = '../images/pause.png';
        playImg.removeEventListener('click', playSlideShow);
        playImg.addEventListener('click', pauseSlideShow);

        interval = setInterval(changePhoto, 4000);
        
        //remove blinking 'click to start slideshow' text
        if(mainTag.className == 'landscape' && slideShowIntruction){
            slideShowIntruction.className = '';
            slideShowIntruction.style.visibility = 'hidden';
            clearInterval(slideShowIntructionTimer)
            slideShowIntruction.parentNode.removeChild(slideShowIntruction);
        }

    }

    function pauseSlideShow(){
        clearInterval(interval);
        playBtn.id = 'play-btn';
        playImg.setAttribute('alt', 'play button');
        playImg.src = '../images/play.png';
        playImg.addEventListener('click', playSlideShow);
        playImg.removeEventListener('click', pauseSlideShow);
        
       
    }

    /*** Change overlay image to next or previous photo ***/
    function changePhoto(){
        currentImage++;

        if(currentImage > 5){
            currentImage = 0;
        } else if(currentImage < 0){
            currentImage = 5;
        }
        overlayImg.className = 'imageFade'
        figcaptionTag.className = 'imageFade'
        setTimeout(function(){
            overlayImg.src = `../images/${myImages[currentImage]}`;
            slideShowNum.textContent = `${currentImage +1}/6`;
            overlayImg.className = 'imageFadeIn'

            changeFigcaption(mainTag, currentImage)
            figcaptionTag.className = ''
        }, 1000)
        
    }


    function changeFigcaption(mainTag, index){
        switch(mainTag.className) {
            case 'landscape':
                figcaptionTag.textContent = landscapeText[index];
              break;
            case 'micro':
                figcaptionTag.textContent = microText[index];
              break;
            case 'sunset':
                figcaptionTag.textContent = sunsetText[index];
              break;
            default:
                figcaptionTag.textContent = urbanText[index];
        }
    }

   

})();