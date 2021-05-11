(function () {
    "use strict";
    console.log("reading js");

    const allCols = document.querySelectorAll('section');

    /* EVENT LISTENERS FOR SCROLLING THROUGH IMAGES THROUGH CLICK */
    
    for(let i =0; i < allCols.length -1; i++){
        const secDivs = document.querySelectorAll(`#col${i+1} div`);

        if(allCols[i].className == 'top'){
            secDivs[0].addEventListener('click', function(){
                changeGrid(allCols[i], secDivs, 'c1')})
            secDivs[1].addEventListener('click', function(){
                changeGrid(allCols[i], secDivs, 'c2')})
            secDivs[2].addEventListener('click', function(){
                changeGrid(allCols[i], secDivs, 'c3')})

            
        } else if(allCols[i].className == 'middle'){
            secDivs[0].addEventListener('click', function(){
                changeGrid(allCols[i], secDivs, 'c4')})
            secDivs[1].addEventListener('click',function(){
                changeGrid(allCols[i], secDivs, 'c5')})
            secDivs[2].addEventListener('click', function(){
                changeGrid(allCols[i], secDivs, 'c6')})
         

        } else {
            secDivs[0].addEventListener('click', function(){
                changeGrid(allCols[i], secDivs, 'c7')})
            secDivs[1].addEventListener('click', function(){
                changeGrid(allCols[i], secDivs, 'c8')})
            secDivs[2].addEventListener('click', function(){
                changeGrid(allCols[i], secDivs, 'c9')})
           
        }
       
    }
    

      
   
    const topVisible = '68% 34%';
    const middleVisible = '16% 68% 16%';
    const bottomVisible = '34% 68%';
   

   /* CODE FOR SCROLLING THROUGH THE THREE IMAGES - CHANGES THE GRID LAYOUT */
    function changeGrid(col, allDivs, num){
      
        const cClass = col.className;
    
        let divImg1 = allDivs[0];
        let divImg2 = allDivs[1];
        let divImg3 = allDivs[2];

        if(cClass == 'top' || cClass == 'bottom'){ //if at top or bottom scroll to middle
            //check to see if image is at the right position to display overlay
            if(num == 'c1' || num == 'c3' || num == 'c4' || num == 'c6' || num == 'c7' || num == 'c9'){
                overlay(num);
            } else{
                col.className = 'middle';
                col.style.gridTemplateRows = middleVisible;
                divImg1.style.alignSelf = 'end';
                divImg2.style.margin = '59px 0';
                divImg2.style.alignSelf = 'center';
                divImg3.style.alignSelf = 'start';

                divImg2.style.gridRow = '2 / span 1';
                divImg2.style.gridColumn = '1 / span 1';
                divImg3.style.gridRow = '3 / span 1';
                divImg3.style.gridColumn = '1 / span 1';
            }

        } else if (cClass == 'middle'){
            if(num == 'c2' || num == 'c5' || num == 'c8'){
                overlay(num);
            } else{
                if(num == 'c3' || num == 'c6' || num == 'c9'){
                    col.className = 'bottom'
                    col.style.gridTemplateRows = bottomVisible;
                    divImg2.style.margin = '0';
                    divImg2.style.alignSelf = 'end';
                    divImg3.style.alignSelf = 'center';

                    divImg2.style.gridRow = '1 / span 1';
                    divImg2.style.gridColumn = '1 / span 1';
                    divImg3.style.gridRow = '2 / span 1';
                    divImg3.style.gridColumn = '1 / span 1';

                } else {
                    col.className = 'top';
                    col.style.gridTemplateRows = topVisible;
                    divImg2.style.margin = '0';
                    divImg1.style.alignSelf = 'center';
                    divImg2.style.alignSelf = 'start';
                    

                    divImg1.style.gridRow = '1 / span 1';
                    divImg1.style.gridColumn = '1 / span 1';
                    divImg2.style.gridRow = '2 / span 1';
                    divImg2.style.gridColumn = '1 / span 1';

                }
            }

          

        } 

    
    }

   /* DISPLAY OVERLAY*/
    function overlay(num){
        document.querySelector('#overlay').style.display = 'block';
        let imgCaption = document.querySelector('#overlay section figure figcaption');
        let img = document.querySelector('#overlay section figure img');
        let pTag = document.querySelector('#overlay section p');

        switch (num){
            case 'c1':
                imgCaption.textContent = 'Michigan, 2017';
                img.src = `images/c1.jpeg`;
                pTag.textContent = "This was taken on a beach trip. It was when my whole family and I went to Michigan for vacation and to visit some family members, and family friends.";
                break;
            case 'c2':
                imgCaption.textContent = ' Portland, 2019';
                img.src = `images/c2.jpeg`;
                pTag.textContent = "My mom, sister, and I took a roadtrip to Portland for a family friends wedding. It was my first time in Portland. This was taken on a day we decided to drive around to see Portland.";
                break;
            case 'c3':
                imgCaption.textContent = '2018';
                img.src = `images/c3.jpeg`;
                pTag.textContent = "I took this when my family and I drove up the coast on our way to Portland. We took the scenic route and it was really beautiful.";
                break;
            case 'c4':
                imgCaption.textContent = 'Oakland, 2019';
                img.src = `images/c4.jpg`;
                pTag.textContent = "I went to a Shawn Mendes conert with my roommate. We had a blast singing along to all the songs. I ended going to the Q&A portion part as well and that was cool. This was not my first Shawn Mendes concert, but it was the first time I ever went to the Q&A portion of a concert.";
                break;
            case 'c5':
                imgCaption.textContent = 'San Francicso, 2020';
                img.src = `images/c5.JPG`;
                pTag.textContent = "I love poetry and spoken word. And Phil and Sarah are two of my favorites. It was incredible to see them live, after watching them on YouTube for so long. I was very happy to get my books signed by them.";
                break;
            case 'c6':
                imgCaption.textContent = 'San Francicso, 2019';
                img.src = `images/c6.jpg`;
                pTag.textContent = "My rommate and I went to Hamilton. I had avoided listening to any of the songs until I was able to watch the play, so I did not know what to expect, although I did know the premise of the play. I thought the songs were great.";
                break;
            case 'c7':
                imgCaption.textContent = 'El Cerrito, 2017';
                img.src = `images/c7.jpeg`;
                pTag.textContent = "This is one of the first images I remember taking after saving up to buy my own camera. I had been on a walk with my mom and dog, and we stopped on a hill by our house to take in the view. I had been so excited with result. Seeing that I could capture something like that, all I wanted to do was continue taking pictures.";
                break;
            case 'c8':
                imgCaption.textContent = 'Palm Springs, 2017';
                img.src = `images/c8.jpeg`;
                pTag.textContent = "This is a picture of my dog Rocket I took while on vacation in Palm Springs. It was the first trip my family and I took with him after adopting him. He absolutely loves the sun. So while he avoided the pool and any body of water, he was always laying in the sun.";
                break;
            case 'c9':
                imgCaption.textContent = 'Los Angeles, 2018';
                img.src = `images/c9.jpeg`;
                pTag.textContent = "This was my first time in LA with my family. We took a day to drive around downtown and one of our stops was going to see the Hollywood sign up close.";
                break;

        }
       
    }

    /* CLOSE THE OVERLY WITH BUTTON */
    const closeBtn = document.querySelector('button');
    closeBtn.addEventListener('click', function(event){
        const overlay = document.querySelector('#overlay').style.display = 'none';
      
    });

    /* CLOSE THE OVERLY WITH ESCAPE KEY */
    document.addEventListener('keydown', function(event){
        if (event.key=="Escape"){
            document.querySelector('#overlay').style.display = 'none';
        }
    });


})();