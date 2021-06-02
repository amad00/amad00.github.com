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
    
    window.addEventListener('load', function(){
        if(mainTag.className == 'landscape'){
            const preloader = document.getElementById('preloader');
            preloader.className = 'fadeout';

            preloader.addEventListener('animationend', function(){
                preloader.style.display = 'none';

                alert("Hello, welcome to my website! Here are the three tasks for you to complete: \n 1. Select an image to view it's full size \n 2. Use the automatic slideshow in the overlay \n 3. Manually flip through the images in the overlay")
            })
        }
        
    })

    
    /*** IMAGES AND FIGCAPTION TEXT FOR OVERLAY ***/
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
        `${mainTag.className}1.png`,
        `${mainTag.className}2.png`,
        `${mainTag.className}3.png`,
        `${mainTag.className}4.png`,
        `${mainTag.className}5.png`,
        `${mainTag.className}6.png`
    ];

    playImg.addEventListener('click', playSlideShow);

    /*** Close the slidehow if X button or escape key is pressed ***/
    closeBtn.addEventListener('click', function(){
        overlay.style.display = 'none';
        pauseSlideShow();
    });
    document.addEventListener('keydown', function(event){
        if(event.key == "Escape"){
            overlay.style.display = 'none';
            pauseSlideShow();
        }})

    for (let i = 0; i < imgTags.length; i++) {
        imgTags[i].addEventListener('click', function(){
            setOverlay(i)})
    }

    /*** DISPLAY AND HIDE ARROW BUTTONS IF MOUSE IS ON OR OFF IMAGE ***/
    overlayImg.addEventListener('mouseover', function(){
        arrows.style.visibility = 'visible'})
        overlayImg.addEventListener('mouseout', function(){
        arrows.style.visibility = 'hidden'})
    arrows.addEventListener('mouseover', function(){
        arrows.style.visibility = 'visible'})
    arrows.addEventListener('mouseout', function(){
        arrows.style.visibility = 'hidden'})
    

/*** EVENT LISTENER TO CHANGE OVERLAY PICTURE IF ARROWS ON IMAGES WERE 
  CLICKED OR THE LEFT AND RIGHT ARROW KEYS WERE PRESSED ***/
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

    /*** DISPLAY OVERLAY AND SET WITH IMAGE SELECTED ***/
    function setOverlay(i){
        overlay.style.display = 'block';
        let imgSrc = imgTags[i].src.split('-')
        let imgSrc1 = imgSrc[1].split('.')
        let imgNum = parseInt(imgSrc1[0][imgSrc1[0].length - 1])

        overlayImg.src = `../images/${imgSrc1[0]}.png`;
        changeFigcaption(mainTag, imgNum - 1 )
        slideShowNum.textContent = `${imgNum}/6`;
        currentImage = imgNum - 1;
       

    }

    /*** CHANGE MENU TEXT COLOR FOR THE PAGE CURRENTLY ONE ***/
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
        

    }
   
    /*** CHANGE OVERLAY IMAGE TO NEXT OR PREVIOUS PHOTO ***/
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

    function pauseSlideShow(){
        clearInterval(interval);
        playBtn.id = 'play-btn';
        playImg.setAttribute('alt', 'play button');
        playImg.src = '../images/play.png';
        playImg.addEventListener('click', playSlideShow);
        playImg.removeEventListener('click', pauseSlideShow);
    }

})();