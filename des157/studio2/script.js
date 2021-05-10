(function () {
    "use strict";
    console.log("reading js");

    let intervalCol1;
    let intervalCol2;
    let intervalCol3;

    const allCols = document.querySelectorAll('section');
    let prevs = [allCols[0].className, allCols[1].className, allCols[2].className];

    for(let i =0; i < allCols.length; i++){
        const secDivs = document.querySelectorAll(`#col${i+1} div`);

        if(allCols[i].className == 'top'){
            secDivs[0].addEventListener('click', function(){
                autoS1(allCols[i], prevs[i], secDivs, 1)})
            secDivs[1].addEventListener('click', function(){
                autoS1(allCols[i], prevs[i], secDivs, 2)})
            secDivs[2].addEventListener('click', function(){
                autoS1(allCols[i], prevs[i], secDivs, 3)})
            
        } else if(allCols[i].className == 'middle'){
            secDivs[0].addEventListener('click', function(){
                autoS1(allCols[i], prevs[i], secDivs, 1)})
            secDivs[2].addEventListener('click',function(){
                autoS1(allCols[i], prevs[i], secDivs, 3)})

            secDivs[1].addEventListener('click', function(){
                autoS1(allCols[i], prevs[i], secDivs, 2)})

        } else {
            secDivs[1].addEventListener('click', function(){
                autoS1(allCols[i], prevs[i], secDivs, 2)})
            secDivs[2].addEventListener('click', function(){
                autoS1(allCols[i], prevs[i], secDivs, 3)})
            secDivs[0].addEventListener('click', function(){
                autoS1(allCols[i], prevs[i], secDivs, 1)})
        }
       
    }

   /*  const timeoutCol1 = setTimeout(createInterval, 2000);
    const timeoutCol2 = setTimeout(createInterval, 5000);
    const timeoutCol3 = setTimeout(createInterval, 7000);

    function createInterval(){
        setInterval(autoScroll, 10000);
    } */

    

   /*  setTimeout(function(){
        intervalCol1 = setInterval( autoS1, 3000);
    }, 1000); */
    
    /* setTimeout(function(){
        let prevGrid1 = 'top';
        const c1 = document.getElementById('col1');
        const allDivs = document.querySelectorAll('#col1 div');
        autoS1(c1, prevGrid1, allDivs)
    }, 3000);

    setTimeout(function(){
        let prevGrid2= 'middle';
        const c2 = document.getElementById('col2');
        const allDivs = document.querySelectorAll('#col2 div');
        autoS1(c2, prevGrid2, allDivs)
    }, 6000);

    setTimeout(function(){
        let prevGrid3 = 'bottom';
        const c3 = document.getElementById('col3');
        const allDivs = document.querySelectorAll('#col3 div');
        autoS1(c3, prevGrid3, allDivs)
    }, 9000);
 */


   /*  setTimeout(function(){
        intervalCol3 = setInterval( autoS3, 10000);
    }, 5000); */
      
   
    const imgColumns = document.querySelectorAll('section');
    const topVisible = '68% 34%';
    const middleVisible = '16% 68% 16%';
    const bottomVisible = '34% 68%';
   // let prevGrid1 = 'top';

   // setTimeout(autoS1(prevGrid), 4000);
   // setTimeout( autoS1, 3000);
    function autoS1(col, prev, allDivs, num){
       // const c1 = document.getElementById('col1');
        const cClass = col.className;
        //const allDivs = document.querySelectorAll('#col1 div');
        console.log("NUM", num)
        //prevGrid = cClass;
        let divImg1 = allDivs[0];
        let divImg2 = allDivs[1];
        let divImg3 = allDivs[2];

        if(cClass == 'top' || cClass == 'bottom'){ //if at top or bottom scroll to middle
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

        } else if (cClass == 'middle'){
            if(num == 3){
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

      // prev[num] = cClass;
       // prevGrid1 = cClass;
        console.log('scrolling1')
       /*  setTimeout( function(){
            autoS1 (col, cClass, allDivs)}, 10000); */

    }


})();