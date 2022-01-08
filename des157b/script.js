(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner'); 
    const sectionHeaders = document.querySelectorAll('section h3')
    const sections = document.querySelectorAll('section');
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

           /*  let headerColor = rainbowColors[randomInt(0,7)];
            sectionHeaders.forEach(function(header){
                header.style.color = headerColor;
            }); */
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

            /* sectionHeaders.forEach(function(header){
                header.style.color = '#1999D0';
            }) */
            mode = 'light';
        }
    })

    window.addEventListener('load', function(){
        // let group = randomInt (4, 10);
        // let groupCount = 1;
        for(let i =0; i <75; i++){
            let bar = document.createElement('div');
            let height = randomInt (4, 250);

            // if(groupCount == group){
            //     group = randomInt (4, 10);
            //     groupCount = 1;
            //     colorCount++;
            // }

            // if(colorCount == 3){
            //     colorCount = 0;
            // }
        
            bar.setAttribute('style', `height: ${height}px`); //background-color: ${color[colorCount]}`
            // groupCount++;
            banner.appendChild(bar);
        }
        changeBarColor(blueColors);
        
    })

    function changeBarColor(colorList){
        const bannerDivs = document.querySelectorAll('#banner div');
        let groupCount = 1;
        let delayTime = 0.2;
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

    function animationDelay(delay, div ){
        div.style.animationDelay = `${delay}s`;
    }

    function randomInt(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
})()