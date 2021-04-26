(function () {
    "use strict";
    // your code starts here
    
    const addressData = document.querySelectorAll("#address input[type=text]");
    const addressDataN = document.querySelectorAll("#address input[type=number]");
    const storyData = document.querySelectorAll("#story input[type=text]");
    const addressForm = document.querySelector('#address');
    const storyForm = document.querySelector('#story');
    const submitBtn = document.querySelector('#submit-btn');
    const nextBtn = document.querySelector('#next-btn');
    const pageNum = document.querySelector('#page-num');
    const addrN = [];
    const addrW = [];
    const story = [];

    nextBtn.addEventListener('click', function(event){
        event.preventDefault();
        let retW = getFormInfo(addrW, addressData);
        let retN = getFormInfo(addrN, addressDataN);
        console.log(addrW);
        console.log(addrN);

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

    
    


    /* Putting story together */
    const storyInfo = document.querySelector('#story-info');
    const addrInfo = document.querySelector('#addr-info')

    const pUser = document.querySelector('#pUser-name');
    const storyContent = document.querySelector('#story-content');
    const pReciever = document.querySelector('#pReciever-name');

    const addrName = document.querySelector('#Addr-name');
    const addrStreet = document.querySelector('#Addr-street');
    const addrCity = document.querySelector('#Addr-city');

    const sendAnotherCardBtn = document.querySelector('#send-postcard');

    submitBtn.addEventListener('click', function(){
        let s = getFormInfo(story, storyData);
        console.log(s);

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
        }
        
       
    })

    /* DISPLAY ANOTHER POST CARD */
    sendAnotherCardBtn.addEventListener('click', function(){
        sendAnotherCardBtn.style.display = 'none';
        storyInfo.style.display = 'none';
        addrInfo.style.display = 'none';
        addressForm.style.display = 'block';
        nextBtn.style.display = 'block';
        pageNum.style.display = 'block';
        pageNum.textContent = '1/2';
        


    });

    function displayPostCard (){
        console.log("in deisplay post card");
        capitalizeFirstLetter(addrW);
        lowerCaseAll(story);
        console.log(addrW);
        console.log(story);
        const allPsStory = document.querySelectorAll('#story-info p');
        const allPsAddr = document.querySelectorAll('#addr-info p');
        const allSpans = document.querySelectorAll("#story-content span");
       
        colorSpans(allSpans);
        console.log(allPsAddr);
        allSpans[0].textContent = `${story[0]}`;
        allSpans[1].textContent = `${story[1]}`;
        allSpans[2].textContent = `${story[2]}`;
        allSpans[3].textContent = `${story[3]}`;
        allSpans[4].textContent = `${story[4]}`;
        allSpans[5].textContent = `${story[5]}`;
        // displayPs(allPsAddr);
        // displayPs(allPsStory);
        //name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();
        pReciever.textContent = `${addrW[3]}!`;
        /* storyContent.textContent = `You won't believe the amazing time that I am having! Only yesterday I saw a ${story[0]} and the view was incredible. We are eating so much ${story[1]}. I also ran into ${story[2]} and while hiking. Sadly, I've already lost my ${story[3]} when I was riding my ${story[4]}. But, I'm having a blast and only wish that you were here to experience this with me! No worries though, I'll bring your back some ${story[5]}.`; */
        pUser.textContent = `${addrW[0]}`;

        addrName.textContent = `${addrW[3]}`;
        addrStreet.textContent = `${addrN[0]} ${addrW[1]} Ave`;
        addrCity.textContent =`${addrW[2]}, CA, ${addrN[1]}`;
    }
    
   /*  function displayPs (pArr){
        for(const p of pArr){
            p.style.display = 'block';
        }
    } */

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

    /* let post = document.querySelector('#postcard-form');
    let secondImg = document.querySelector('.second');
    let firstImg = document.querySelector('.first');



    post.addEventListener('click', function(){
        // post.style.transform = 'rotateY(180deg)';
        // post.style.transition = 'all 1s ease-out';
        // post.style.backgroundImage = "url('images/portland.jpg')";
        post.style.zIndex='0';
        secondImg.style.zIndex = '2';
        firstImg.style.zIndex = '1';
      //  transform: rotateY(180deg);
   // transition: all 1s ease-out;
    })

    secondImg.addEventListener('click', function(){
        post.style.zIndex='1';
        secondImg.style.zIndex = '0';
        firstImg.style.zIndex = '2';

    })

    firstImg.addEventListener('click', function(){
        post.style.zIndex='2';
        secondImg.style.zIndex = '1';
        firstImg.style.zIndex = '0';

    }) */

})();