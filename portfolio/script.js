

(function () {
    'use strict';

    const body = document.querySelector('body');
    const headerBackground = document.querySelector('#header-background');
    const header = document.querySelector('header');
    const navIcon = document.querySelector('#nav-icon');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li');
    const nameLogo = document.querySelector('#logo');
    const aboutSection = document.querySelector('#about');
    const projectSection = document.querySelector('#projects');
    const contactSection = document.querySelector('#contact');

    const projectCategories = document.querySelectorAll('#project-categories button');
    const allProjects = document.querySelectorAll('#projects > section');
    let category = 'Development'
    displayProjects(category)
    

    let navOpen = false;
    let scrollValue = window.scrollY;

    //if nav icon in clicked
    navIcon.addEventListener('click', function () {
        //if mobile screen size
        if (window.innerWidth < 600) {
            //if nav is open, then close it
            if (navOpen) {
                header.style.animation = 'moveOut 1s ease-in-out';
                headerBackground.classList.remove('open');
                headerBackground.style.display = 'flex'
                setTimeout(function () {
                    header.classList.remove('open');
                }, 800)
                navIcon.classList.remove('open');
                nav.style.display = 'none';
                body.style.overflow = 'initial';
                body.style.height = 'auto';

                aboutSection.style.filter = 'blur(0)';
                projectSection.style.filter = 'blur(0)';
                contactSection.style.filter = 'blur(0)';
                navIcon.style.top = '0'

                nameLogo.style.display = 'flex'

                navOpen = false;
            } else {
                //if nav is not open then open is
                body.style.overflow = 'hidden';
                body.style.height = '100%';
                setTimeout(function () {
                    headerBackground.className = 'open';
                    headerBackground.style.display = 'block'
                    aboutSection.style.filter = 'blur(5px)';
                    projectSection.style.filter = 'blur(5px)';
                    contactSection.style.filter = 'blur(5px)';
                    navIcon.style.top = '2em'
                }, 800)

                header.className = 'open';
                navIcon.className = 'open';
                nav.style.display = 'flex';
                header.style.animation = 'moveIn 1s ease-in-out';
               

                nameLogo.style.display = 'none'

                navOpen = true;

            }
        }

    });

   // when nav is open on mobile 
    navLinks.forEach(function (eachLink) {
        //if nav is open on mobile and you click and element then close nav
        // console.log(eachLink.textContent)
        if (window.innerWidth < 600) {
            eachLink.addEventListener('click', function () {
               /*  if (eachLink.textContent == 'Projects'){
                    projectSection.style.paddingTop = '20vh'
                    console.log(eachLink.textContent)
                    console.log("added padding")
                } */

                headerBackground.classList.remove('open');
                header.classList.remove('open');
                navIcon.classList.remove('open');
                nav.style.display = 'none';
                body.style.overflow = 'initial';

                aboutSection.style.filter = 'blur(0)';
                projectSection.style.filter = 'blur(0)';
                contactSection.style.filter = 'blur(0)';

                navOpen = false;

            })
        }
    });

    window.addEventListener('scroll', function () {
        //if scrolling down remove nav header bar
        if (window.scrollY > 100 && window.scrollY >= scrollValue) {
            headerBackground.style.marginTop = '-15vh';
        } else {
            //if scrolling up show nav header bar
            headerBackground.style.marginTop = '0';
            
        }
        scrollValue = window.scrollY;
       
    })


    //PROJECT SECTION CATEGORIES DISPLAY
    const categoryBtns = document.querySelectorAll("#project-categories button h2")

    function changeCategoryColor(category){
        for (let i=0; i < categoryBtns.length; i++){
            //if the project category is selected, change the color of corresponding category text
            if(categoryBtns[i].textContent == category){
                categoryBtns[i].style.color = '#262626'
            } else {
                categoryBtns[i].style.color = '#858F99'
            }
        }
    }

    //display projects of corresponding category
    function displayProjects(category){
        allProjects.forEach(function(eachProject){
            let projectClass = eachProject.className.split(" ")[0]
            console.log(projectClass)
            if(projectClass == category){
                eachProject.classList.remove("hiding")
                eachProject.classList.add("showing")
            } else {
                eachProject.classList.remove("showing")
                eachProject.classList.add("hiding")
            }
        })
        AOS.init(); // moved here so that it adds the animation whenever the screen shows/hides different projects otherwise it will only work on the projects that are first diplayed when the page loads

    }


    //if project category title is selected change the tile color and show corresponding projects
    projectCategories.forEach(function (categoryTitle){
        categoryTitle.addEventListener('click', function(){
            category = categoryTitle.firstElementChild.textContent
            changeCategoryColor(category)
            displayProjects(category)
        })
       
    })
   
     

})();