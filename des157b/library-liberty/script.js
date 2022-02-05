
/**** stacking for 2015 images ****/ 

const img2015 = document.querySelectorAll('#cont2015 img');
const img2018 = document.querySelectorAll('#cont2018 img');
const img2019 = document.querySelectorAll('#cont2019 img');

const img2018P1 = [img2018[0], img2018[1]];
const img2018P2 = [img2018[2], img2018[3]];


img2015.forEach(function(eachImg){
    eachImg.addEventListener('click', function(){
        switchImages(img2015)
    })
})
img2018P1.forEach(function(eachImg){
    eachImg.addEventListener('click', function(){
        switchImages(img2018P1)
    })
})
img2018P2.forEach(function(eachImg){
    eachImg.addEventListener('click', function(){
        switchImages(img2018P2)
    })
})
img2019.forEach(function(eachImg){
    eachImg.addEventListener('click', function(){
        switchImages(img2019)
    })
})


function switchImages(images, clickedImg){
    console.log('in function')
    // if(clickedImg.style.zIndex == 0){
        let firstZ = window.document.defaultView.getComputedStyle(images[0]).getPropertyValue('z-index');
        let SecZ = window.document.defaultView.getComputedStyle(images[1]).getPropertyValue('z-index');
        console.log(firstZ)
        images[0].style.zIndex = SecZ
        images[1].style.zIndex = firstZ
    // }


}

/**** tooltips ****/ 
tippy('#cont2008', {
    content: 'moved to california',
    theme: 'light',
    animation: 'scale-subtle',
    size: 'large'


});

tippy('#cont2015', {
    content: 'adopted rocket!',
    theme: 'light',
    animation: 'scale-subtle',
    offset: [0, 20]


});

tippy('#cont2016', {
    content: 'portland & voodoo donuts!',
    theme: 'light',
    animation: 'scale-subtle',
    // placement: 'right-end'
    // offset: [0, 20]

});

/* put these in loop to chnage which one shows */



setInterval(function(){

    let img1Z = window.document.defaultView.getComputedStyle(document.querySelector('#img2018-1')).getPropertyValue('z-index');

    let img2Z = window.document.defaultView.getComputedStyle(document.querySelector('#img2018-2')).getPropertyValue('z-index');

    let img3Z = window.document.defaultView.getComputedStyle(document.querySelector('#img2018-3')).getPropertyValue('z-index');

    let img4Z = window.document.defaultView.getComputedStyle(document.querySelector('#img2018-4')).getPropertyValue('z-index');

    if(img1Z == 0){
        tippy('#img2018-1', {
            content: 'high school graduation',
            theme: 'light',
            animation: 'scale-subtle'
            // offset: [0, 20]
        
        });
    }  

    if(img2Z == 0){

        tippy('#img2018-2', {
            content: 'long beach',
            theme: 'light',
            animation: 'scale-subtle',
            placement: 'bottom'
            // offset: [0, 20]
        });
    }

    if(img3Z == 0){

        tippy('#img2018-3', {
            content: 'half moon bay',
            theme: 'light',
            animation: 'scale-subtle',
            placement: 'bottom'
            // offset: [0, 20]
        
        });
    }
    
    if(img4Z == 0){

        tippy('#img2018-4', {
            content: 'oregon',
            theme: 'light',
            animation: 'scale-subtle'
            // offset: [0, 20]
        
        });
    }
    
}, 100)



tippy('#img2019-1', {
    content: 'visited portland',
    theme: 'light',
    animation: 'scale-subtle'
    // offset: [0, 20]

});

tippy('#img2021', {
    content: 'bought a car!',
    theme: 'light',
    animation: 'scale-subtle'
    // offset: [0, 20]

});