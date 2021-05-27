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
    const slide = document.querySelector('#overlay figure img')

    let currentImage = 0;
    let interval;
    const landscapeText = [
        '2018',
        'Portland, 2019',
        '2016',
        'Russian River, 2017',
        'Portland, 2019',
        '2018'
    ];

    playImg.addEventListener('click', playSlideShow);
    closeBtn.addEventListener('click', function(){
        overlay.style.display = 'none';
        pauseSlideShow();
    })

    for (let i = 0; i < imgTags.length; i++) {
        imgTags[i].addEventListener('click', function(){
            setOverlay(i)})
        
    }

    function setOverlay(i){
        overlay.style.display = 'block';
        let imgSrc = imgTags[i].src.split('-')
        slide.src = `../images/${imgSrc[1]}`;
        let imgSrc1 = imgSrc[1].split('.')
        let imgNum = parseInt(imgSrc1[0][imgSrc1[0].length - 1])
        figcaptionTag.textContent = landscapeText[imgNum - 1];
        slideShowNum.textContent = `${imgNum}/6`;
        currentImage = imgNum - 1;
       

    }

    console.log("main", mainTag)

   /*  for(let i=0; i<pages.length; i++){
        console.log(pages[i])
        let color =  pages[i].style.color;
        pages[i].addEventListener('click', function(){
            let page = pages[i].textContent.toLowerCase();
            changePage(page);
        })
        pages[i].addEventListener('mouseover', function(){
            pages[i].style.color = 'black';
        })
        pages[i].addEventListener('mouseout', function(){
            if(mainTag.className == pages[i].textContent.toLowerCase()){
                pages[i].style.color = 'black';
            } else {
                pages[i].style.color = '#939598';
            }
        })
    } */

    function changePageLinkColor(){
       // mainTag.className = page;
        let classNameP = mainTag.className;
        console.log("change", classNameP)
        for(let i=0; i<pages.length; i++){
            
            if(pages[i].textContent.toLowerCase() == classNameP){
                pages[i].style.color = 'black';
            } else if(pages[i].textContent.toLowerCase() == 'about' && classNameP == 'about-class'){
                pages[i].style.color = 'black';
            } else {
                 pages[i].style.color = '#939598';
            }
        }
    }
    changePageLinkColor();
    

    function playSlideShow(){
        // console.log("in slidehow")
        playBtn.id = 'pause-btn';
        playImg.setAttribute('alt', 'pause button');
        playImg.src = '../images/pause.png';
        playImg.removeEventListener('click', playSlideShow);
        playImg.addEventListener('click', pauseSlideShow);
        
        const myImages = [
            `${mainTag.className}1.jpeg`,
            `${mainTag.className}2.jpeg`,
            `${mainTag.className}3.jpeg`,
            `${mainTag.className}4.jpeg`,
            `${mainTag.className}5.jpeg`,
            `${mainTag.className}6.jpeg`
        ];


        interval = setInterval(nextPhoto, 3000);
        function nextPhoto(){
            console.log("in next photo")
            currentImage++;
    
            if(currentImage > 5){
                currentImage = 0;
            }
            slide.src = `../images/${myImages[currentImage]}`;
            slideShowNum.textContent = `${currentImage +1}/6`;


           
            console.log(figcaptionTag.textContent)

            switch(mainTag.className) {
                case 'landscape':
                    figcaptionTag.textContent = landscapeText[currentImage];
                  break;
                case 'micro':
                  // code block
                  break;
                case 'sunset':
                  // code block
                  break;
                default:
                  // code block
              }
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