(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner'); 
    const sectionHeaders = document.querySelectorAll('section h3')
    const sections = document.querySelectorAll('section');
    const musicImages = document.querySelectorAll('h3 img');
    const allSectionInfo = [];
    let mode = 'light';
    const blueColors = ['#1999D0', '#2EAFE7',' #6BCBF3',' #AEE1F7'];
    const rainbowColors = ['#FA2B2B', '#F0AE2F', '#FDEA43', '#54E231', '#269FF6','#3749EE','#9736E3'];
    let groups = []
    let randomNumCount = 0;

    button.addEventListener('click', function() {
        const buttonImg = document.querySelector('button > img');
    
        if (mode === 'light') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            buttonImg.src = 'images/wave.png';
            changeBarColor(rainbowColors);

            musicImages.forEach(function(eachImg){
                eachImg.src = 'images/music-note-red.png';
            });
            mode = 'dark';

        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            buttonImg.src = 'images/rainbow.png';
            changeBarColor(blueColors);

            musicImages.forEach(function(eachImg){
                eachImg.src = 'images/music-note-blue.png';
             });
            mode = 'light';
        }
    })

    /* Create banner bars with different heights */
    window.addEventListener('load', function(){
        for(let i =0; i <75; i++){
            let bar = document.createElement('div');
            let height = randomInt (4, 250);
            bar.setAttribute('style', `height: ${height}px`);
            banner.appendChild(bar);
        }
        changeBarColor(blueColors);
        
    })

    /* Randomly select a ceratin amount of bars to assign colors */
    function changeBarColor(colorList){ 
        const bannerDivs = document.querySelectorAll('#banner div');
        let groupCount = 1;
        let delayTime = 1;
        for(let i =0; i <7; i++){
            groups.push(randomInt(8,14));
        }

        for(let i =0; i <75; i++){
            bannerDivs[i].style.backgroundColor = colorList[randomNumCount];
            animationDelay(delayTime, bannerDivs[i]);
            if (groupCount == groups[randomNumCount]){
                groupCount = 0;
                randomNumCount++
               
            }
            if(colorList == blueColors && randomNumCount == 3){
                randomNumCount = 0;
            }
            delayTime += 0.1;
            groupCount++;
        }
        randomNumCount = 0
    }

    /* Each bar has 0.1 delay time so that they are different  */
    function animationDelay(delay, div ){
        div.style.animationDelay = `${delay}s`;
    }

    
    sections.forEach(function(eachSection){
       allSectionInfo.push(eachSection.getBoundingClientRect());
    });
    
    /* Only show music not when hovering over that specific section */
    function musicNoteHover(mouseX, mouseY){

        for( let i=0; i< allSectionInfo.length; i++){
            if(mouseX >= allSectionInfo[i].x && mouseX <=allSectionInfo[i].right && mouseY >=allSectionInfo[i].y && mouseY <=allSectionInfo[i].bottom){
                musicImages[i+1].style.display = 'inline';
                if(i==0){
                    musicImages[0].style.display = 'inline';
                }
            } else {
                musicImages[i+1].style.display = 'none';
                if(i==0){
                    musicImages[0].style.display = 'none';
                }
            }
        }
    }

    window.addEventListener('mousemove', function(event){
        setInterval(musicNoteHover(event.clientX, event.clientY), 1000);
       
    })

    function randomInt(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
})()