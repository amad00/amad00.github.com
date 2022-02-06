
/**** stacking for 2015 images ****/ 

const img2015 = document.querySelectorAll('#cont2015 img');
const img2018 = document.querySelectorAll('#cont2018 img');
const img2019 = document.querySelectorAll('#cont2019 img');

const img2018P1 = [img2018[0], img2018[1]];
const img2018P2 = [img2018[2], img2018[3]];

const tippy1 = document.getElementById('img2018-1');
const tippy2 = document.getElementById('img2018-2');
const tippy3 = document.getElementById('img2018-3');
const tippy4 = document.getElementById('img2018-4');

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


function switchImages(images){
    console.log('in function')
    let firstZ = window.document.defaultView.getComputedStyle(images[0]).getPropertyValue('z-index');
    let SecZ = window.document.defaultView.getComputedStyle(images[1]).getPropertyValue('z-index');
    
    images[0].style.zIndex = SecZ;
    images[1].style.zIndex = firstZ;
   
    if(images[0].id == 'img2018-1' ){
       
        if(images[0].style.zIndex == -1){
           instance1.disable();
           instance2.enable();
        } else {
            instance1.enable();
            instance2.disable();
        }
    }

       
    if(images[0].id == 'img2018-3' ){
        if(images[0].style.zIndex == -1){
            instance3.disable();
            instance4.enable();
        } else {
            instance3.enable();
            instance4.disable();
        }
    }



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
    content: 'michigan',
    theme: 'light',
    animation: 'scale-subtle',
    // placement: 'right-end'
    // offset: [0, 20]

});

const instance1 =  tippy(tippy1, {
    content: 'high school graduation',
    theme: 'light',
    animation: 'scale-subtle'
    
});


const instance2 =  tippy(tippy2, {
    content: 'long beach',
    theme: 'light',
    animation: 'scale-subtle',
    placement: 'bottom'
    
});

instance2.disable();


const instance3 = tippy(tippy3, {
    content: 'half moon bay',
    theme: 'light',
    animation: 'scale-subtle',
    placement: 'bottom'
    // offset: [0, 20]

});


const instance4 = tippy(tippy4, {
    content: 'oregon',
    theme: 'light',
    animation: 'scale-subtle'
    // offset: [0, 20]

});

instance4.disable();

tippy('#img2019-1', {
    content: 'portland & voodoo donuts!',
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