(function () {
    "use strict";

    const startOverlay = document.getElementById('start-overlay');
    const startGame = document.getElementById('start');
    const gameArea = document.getElementById('gamearea');
    const gameRoll = document.getElementById('gameroll');
    const gameText = document.getElementById('gametext');
    const player1 = document.querySelectorAll('#player1 p');
    const player2 = document.querySelectorAll('#player2 p');
    const die = document.querySelectorAll('#gamearea img');
   

    let gameData = {
        dice: ['1-cube.png', '2-cube.png','3-cube.png','4-cube.png','5-cube.png','6-cube.png' ],
        players: ['player1', 'player2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        // gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        // gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        gameData.players[0] = document.getElementById('p1name').value;
        gameData.players[1] = document.getElementById('p2name').value;
        player1[1].textContent = gameData.players[0];
        player2[1].textContent = gameData.players[1];
        startOverlay.style.display = 'none';
        die[0].style.visibility = 'hidden';
        die[1].style.visibility = 'hidden';
        initialRoll()
        setUpTurn();
    })

    /* ADD EVENT LISTENER FOR ROLL */ 
    function initialRoll(){
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        })

    }

    function setUpTurn(){
        gameText.textContent = `Roll the dice for the ${gameData.players[gameData.index]}`;
    }

    /* ROLL THE DICE */ 
    function throwDice(){
        console.log('IN THROW DICE')
        //actionArea.innerHTML = '';
        die[0].style.visibility = 'visible';
        die[1].style.visibility = 'visible';

        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameRoll.textContent  = ` ${gameData.roll1} - ${gameData.roll2}`;
        //gameText.textContent  = `Roll the dice for ${gameData.players[gameData.index]}`;
        die[0].src = `images/${gameData.dice[gameData.roll1-1]}`;
        die[1].src = `images/${gameData.dice[gameData.roll2-1]}`;


        
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        console.log('player', gameData.players[gameData.index]);
        console.log('roll 1',gameData.roll1 );
        console.log('roll 2',gameData.roll2 );
        console.log('sum',gameData.rollSum);

        if(gameData.rollSum === 2){
            console.log('TWO ONES')
            gameText.textContent = 'You rolled two ones!';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 3000);
            
        } else if (gameData.roll1 ===1 || gameData.roll2 ===1){
            console.log('ONE')
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            gameText.textContent = `Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}`;
            setTimeout(setUpTurn, 3000);
            

        } else {
            console.log('NO ONES')
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            })
           
        }
        checkWinningCondition();
    }

      /* CHECK IF WINNING CONDITION IS MET */ 
    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            showCurrentScore();
            gameText.textContent  = `${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!`;
            gameText.style.fontFamily = "'Fascinate', cursive";
            const quit = document.getElementById('quit')
            quit.textContent = 'Start a New Game?';
            quit.style.width = '300px';

            document.getElementById('pass').style.display = 'none';
            document.getElementById('roll').style.display = 'none';
            gameRoll.style.display = 'none';

            die[0].src = 'images/colored-cube.png';
            die[1].src = 'images/colored-cube.png';
        } else {
            showCurrentScore();
           
        }
    }

   /* SHOW PLAYER SCORE */ 
    function showCurrentScore(){
        if(gameData.index === 0){
            player1[0].textContent = gameData.score[0]
        } else {
            player2[0].textContent = gameData.score[1]
        }
        
    }


})();