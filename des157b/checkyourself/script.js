(function(){
    'use strict';

    let globalData;
    let inSteps = true;
    const button = document.querySelector('button');
    const barDivs = document.querySelectorAll('.color-bar');
    const dataSectionP = document.querySelectorAll('#number-steps-mi p');
    const circle =  document.querySelector('circle');
    const progressCircle = document.querySelector('.progress-circle');
    const steps = document.querySelectorAll('#activity-circle p')[0];
    const stepsText = document.querySelectorAll('#activity-circle p')[1];
    const totalinSteps = document.querySelectorAll('#activity-day > p')[0];
    const totalinMiles = document.querySelectorAll('#activity-day > p')[1];

    let circumference = 502; 
   
   
   
    function displayProgress(data, len){
        const total = totalSteps(data);
        let currTotal = 0;

        for(let i=0; i<len + 1;i++){
            if(inSteps){
                currTotal += parseInt(data[i].steps.replace(',', ''));
                steps.textContent = currTotal.toLocaleString();
            } else {
                currTotal += parseFloat(data[i].miles.replace(',', ''));
                steps.textContent = currTotal.toFixed(2);
            }
          
        }
        
        
        progressCircle.style.strokeDashoffset = circumference - ((currTotal / total)*circumference)
    }

    button.addEventListener('click', function(){
        if(inSteps){
            button.textContent = 'steps';
            inSteps = false;
        } else {
            button.textContent = 'mi';
            inSteps = true;
        }
        if(inSteps){
            stepsText.textContent = 'steps';
        } else{
            stepsText.textContent = 'miles';
        }
       
        dataText(globalData);
    });



    for(let i =0; i<barDivs.length; i++){
        barDivs[i].addEventListener('mouseover', function(event){
            dataSectionP[i].style.visibility = 'visible';
            displayProgress(globalData, i);
        });
        barDivs[i].addEventListener('mouseout', function(event){
            dataSectionP[i].style.visibility = 'hidden';
            progressCircle.style.strokeDashoffset = circumference;
            steps.textContent = 0;
        });
    }

    

    async function getData(){
        const steps = await fetch('data/data.json');
        const data = await steps.json();
        globalData = data;
        
        displayTimes(data);
        dataText(data);
        displayGraph(data);
        totalinSteps.textContent = `Total Steps: ${totalSteps(globalData).toLocaleString()}`;
        inSteps =false;
        totalinMiles.textContent = `Total Miles: ${totalSteps(globalData).toFixed(2)}`;
        inSteps = true;
    }
    getData();
    

    function displayTimes(data){
        const timeSection = document.querySelector('#times');
       
        for(let i=0; i<data.length; i++){
            const pTag = document.createElement('p');
            pTag.textContent = data[i].time;
            timeSection.appendChild(pTag);
        }
    }

    function dataText(data){
        
        for(let i=0; i<data.length; i++){
            if(inSteps){
                dataSectionP[i].textContent = data[i].steps;
            } else{
                dataSectionP[i].textContent = data[i].miles;
            }
        }

    }

    function displayGraph(data){
       
        const maxLen = 2000;

        for(let i=0; i<data.length; i++){
            let num = parseInt(data[i].steps.replace(',', ''));
            barDivs[i].style.width = `${(num/maxLen) * 100}%`;
        }

    }

    function totalSteps(data){
        let sum = 0;
        for(let i=0; i<data.length; i++){
            if(inSteps){
                sum += parseInt(data[i].steps.replace(',', ''));
            } else{
                sum += parseFloat(data[i].miles);
            }
            
        }
       
        return sum;
    }
  

})();