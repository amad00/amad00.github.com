(function () {
    "use strict";
    console.log("reading js");
    
    /***  GETTING USER INPUT AND MAKING SURE ALL FIELDS ARE FILLED ***/

    const addressData = document.querySelectorAll("#address input[type=text]");
    const addressDataN = document.querySelectorAll("#address input[type=number]");
    const storyData = document.querySelectorAll("#story input[type=text]");
    const addressForm = document.querySelector('#address');
    const storyForm = document.querySelector('#story');
    const submitBtn = document.querySelector('#submit-btn');
    const nextBtn = document.querySelector('#next-btn');
    const pageNum = document.querySelector('#page-num');
    let addrN = [];
    let addrW = [];
    let story = [];

    /* Display next form */
    nextBtn.addEventListener('click', function(event){
        event.preventDefault();
        let retW = getFormInfo(addrW, addressData);
        let retN = getFormInfo(addrN, addressDataN);

        if(retW > 0 || retN > 0){
            alert("Please fill out the fields!");
        } 
        else {
            addressForm.style.display = 'none';
            nextBtn.style.display = 'none';
            pageNum.textContent = '2/2';
            storyForm.style.display = 'block';
            submitBtn.style.display = 'block';
        }

    })


    /*** PUTTING THE STORY TOGETHER ***/
    
    const storyInfo = document.querySelector('#story-info');
    const addrInfo = document.querySelector('#addr-info')

    const pUser = document.querySelector('#pUser-name');
    const storyContent = document.querySelector('#story-content');
    const pReciever = document.querySelector('#pReciever-name');

    const addrName = document.querySelector('#Addr-name');
    const addrStreet = document.querySelector('#Addr-street');
    const addrCity = document.querySelector('#Addr-city');

    const sendAnotherCardBtn = document.querySelector('#send-postcard');
    let flip;

    let post = document.querySelector('#postcard-form');
    let secondImg = document.querySelectorAll('main img')[0];
    let firstImg = document.querySelectorAll('main img')[1];


    /* Once user hits submit, show postcard with thier inputs in the story */
    submitBtn.addEventListener('click', function(){
        let s = getFormInfo(story, storyData);
        console.log(story);

        if(s > 0 ){
            alert("Please fill out the fields!");
        } 
        else {
            submitBtn.style.display = 'none';
            storyForm.style.display = 'none';
            nextBtn.style.display = 'none';
            pageNum.style.display = 'none';
            addrInfo.style.display ='block';
            storyInfo.style.display ='block';
            sendAnotherCardBtn.style.display = 'block';
            
            displayPostCard();
            flip = setTimeout(function() { flipThroughCards();}, 2000); //timer so the event listeners aren't added right away
        }
        
       
    })

    /* Display the form from the beginning */
    sendAnotherCardBtn.addEventListener('click', function(){
        sendAnotherCardBtn.style.display = 'none';
        storyInfo.style.display = 'none';
        addrInfo.style.display = 'none';
        addressForm.style.display = 'block';
        nextBtn.style.display = 'block';
        pageNum.style.display = 'block';
        pageNum.textContent = '1/2';

        stopFlipThroughCards();
        
        //reset arrays to be empty
        addrN = [];
        addrW = [];
        story = [];
        
        
    });

    /*** FUNCTIONS ***/

    /* Display tpostcard with user input */
    function displayPostCard (){
        capitalizeFirstLetter(addrW);
        lowerCaseAll(story);
    
        const allPsStory = document.querySelectorAll('#story-info p');
        const allPsAddr = document.querySelectorAll('#addr-info p');
        const allSpans = document.querySelectorAll("#story-content span");

        const states = ['CA', 'NV', 'NY', 'FL', 'MI', 'CO'];
        const streets = ['Ave', 'Street', 'Blvd', 'Hill', 'Rd', 'Dr'];
       
        colorSpans(allSpans);

        //If the celebrity name is more than one word, capitalize each word
        let names = story[2].split(" ");  
        
        if (names.length > 1){
            capitalizeFirstLetter(names);
            let tempName = names[0].concat(" ", names[1]);

            if(names.length > 2){
                for (let i=2; i < names.length; i++){
                    console.log(`names[${i}]`, names[i])
                    tempName = tempName.concat(" ", names[i]);
                }
                
            }
            story[2] = tempName;
        }
        allSpans[0].textContent = `${story[0]}`; //exotic animal
        allSpans[1].textContent = `${story[1]}`; //favorite food
        allSpans[2].textContent = `${story[2]}`; //celebrity
        allSpans[3].textContent = `${story[3]}`; // something you lost
        allSpans[4].textContent = `${story[4]}`; //vehicle
        allSpans[5].textContent = `${story[5]}`; //something you want
       
        pReciever.textContent = `${addrW[3]}!`;
        pUser.textContent = `${addrW[0]}`;

        addrName.textContent = `${addrW[3]}`;
        addrStreet.textContent = `${addrN[0]} ${addrW[1]} ${streets[randomInt(0, 5)]}`;
        addrCity.textContent =`${addrW[2]}, ${states[randomInt(0, 5)]}, ${addrN[1]}`;
    }

    /* Put form info into arrays */
    function getFormInfo(arr, formData){
        let empytyFields = 0;
        for(const eachWord of formData){
            if(eachWord.value){
                arr.push(eachWord.value);
                eachWord.value="";
            } else { empytyFields++}
        }
        return empytyFields;

    }

    /* Change user input to uppercase or lowercase and color the postcard user input text for the story*/
    function capitalizeFirstLetter(arr) {
        for(let i=0; i <arr.length; i++){
            arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1).toLowerCase();
        }

    }

    function lowerCaseAll(arr){
        for(let i=0; i <arr.length; i++){
            arr[i] = arr[i].toLowerCase();
        }
    }

    function colorSpans(arr){
        for(let i=0; i <arr.length; i++){
            arr[i].style.color = '#BD3B46';
        }
    }
    
    /* When user clicks on postcard, that flips through the post card and images */
    function flipThroughCards (){
        post.addEventListener('click', portlandInFront);
        secondImg.addEventListener('click', sunsetInFront);
        firstImg.addEventListener('click', postcardInFront);
    }

    /* When user wants to redo madlib and send another post card, remove event listeners */
    function stopFlipThroughCards(){
        post.removeEventListener('click', portlandInFront);
        secondImg.removeEventListener('click', sunsetInFront);
        firstImg.removeEventListener('click', postcardInFront);
    }

    /* Changing the position so images of postcard */
    function portlandInFront (){
        post.style.zIndex='0';
        secondImg.style.zIndex = '2';
        firstImg.style.zIndex = '1';
    }

    function sunsetInFront(){
        post.style.zIndex='1';
        secondImg.style.zIndex = '0';
        firstImg.style.zIndex = '2';
    }

    function postcardInFront(){
        post.style.zIndex='2';
        secondImg.style.zIndex = '1';
        firstImg.style.zIndex = '0';
    }

    /* Random integer */
    function randomInt(min, max){
        return Math.floor( (max - min + 1) * (Math.random())) + min;
    }


})();