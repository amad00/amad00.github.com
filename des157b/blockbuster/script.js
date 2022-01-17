(function(){
    'use strict';

    const loadingSection = document.getElementById('loading');
    const myVideo = document.querySelector('#myVideo');
    
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const line5 = document.querySelector('#line5');
   

    const title = document.querySelector('#title');
    const poet = document.querySelector('#poet');

    let intervalID;

    const poem = {
        start: [0, 2, 4, 6, 8],
        stop: [1, 3, 5, 7, 9],
        line: [line1, line2, line3, line4, line5]
    }
    
    //when mouse is over author name, show poem title and add blur filter
    poet.addEventListener('mouseover', function(){
        title.style.visibility = 'visible';
        myVideo.style.filter = 'blur(4px)';
    });
    
    //when mouse is not on author name, hide poem title and remove blur filter
    poet.addEventListener('mouseout', function(){
        title.style.visibility = 'hidden';
        myVideo.style.filter = 'blur(0)';
    });


    // hide loading script
    window.addEventListener('load', function () {
        loading.style.display = 'none';
        
    });

    //reset the text to replay video
    myVideo.addEventListener('play', function () {
        if(myVideo.currentTime  < 1){
            for (let i = 0; i < poem.start.length ; i++) {
                poem.line[i].className = 'hidden';
                poem.line[i].style.animation = 'fade 4s forwards';
            }
            poet.style.visibility = 'hidden';
        
            intervalID = setInterval(checkTime, 1000);
        }
    });
   
    //check time to add poem lines
    function checkTime() {
        for (let i = 0; i < poem.start.length ; i++) {
            console.log(i)
            if (poem.start[i] < myVideo.currentTime){ 
        
                poem.line[i].className = 'showing';
                poem.line[i].style.animation = 'typewriter 4s forwards';
                if( poem.line[4].className =='showing'){
                    setTimeout(function() {
                        poet.style.visibility = 'visible';
                        clearInterval(intervalID);
                    }, 2000);
                     
                   
                }
               
            }
        }

    }

})();