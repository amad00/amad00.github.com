(function () {
    "use strict";

    const startOverlay = document.getElementById('start-overlay');
    const startBtn = document.getElementById('start-btn');
    const gameRoll = document.getElementById('gameroll');
    const gameText = document.getElementById('gametext');
    const player1 = document.querySelectorAll('#player1 p');
    const player2 = document.querySelectorAll('#player2 p');
    const die = document.querySelectorAll('#gamearea img');
    const rollBtn = document.getElementById('roll-btn');
    const passBtn = document.getElementById('pass-btn');

    const rubiksSound = new Audio('media/RubiksSound.m4a');
    const clappingSound = new Audio('media/multipleClapping.m4a');


    let gameData = {
        dice: ['1-cube.png', '2-cube.png','3-cube.png','4-cube.png','5-cube.png','6-cube.png' ],
        players: ['Player 1', 'Player 2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startBtn.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        document.getElementById('quit-btn').addEventListener('click', function(){
            location.reload();
        });
        
        const p1 = document.getElementById('p1name').value;
        const p2 = document.getElementById('p2name').value;
        
        if(p1 && p2){
            gameData.players[0] = p1;
            gameData.players[1] = p2;
            player1[1].textContent = gameData.players[0];
            player2[1].textContent = gameData.players[1];
        }

        startOverlay.style.display = 'none';
        die[0].style.visibility = 'hidden';
        die[1].style.visibility = 'hidden';
        initialRoll()
        displayTurn();
    })

    /* ADD EVENT LISTENER FOR ROLL */ 
    function initialRoll(){
        rollBtn.addEventListener('click', function(){
            throwDice();
            rubiksSound.play();
        })

        passBtn.addEventListener('click', function(){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            displayTurn();
        })

    }

    function displayTurn(){
        gameText.textContent = `Roll the dice for the ${gameData.players[gameData.index]}`;
        let currPlayerImg = document.querySelector(`#player${gameData.index + 1} img`);
        currPlayerImg.style.display = 'flex';

        let index = gameData.index;
        index ? (index = 0) : (index = 1);
        let otherPlayerImg = document.querySelector(`#player${index + 1} img`);
        otherPlayerImg.style.display = 'none';
    }

    /* ROLL THE DICE */ 
    function throwDice(){
        die[0].style.visibility = 'visible';
        die[1].style.visibility = 'visible';

        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        gameRoll.textContent  = ` ${gameData.roll1} - ${gameData.roll2}`;
        die[0].src = `images/${gameData.dice[gameData.roll1-1]}`;
        die[1].src = `images/${gameData.dice[gameData.roll2-1]}`;
        
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum === 2){
            gameText.textContent = 'Sorry! You rolled two ones!';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(displayTurn, 2000);
            
        } else if (gameData.roll1 ===1 || gameData.roll2 ===1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            gameText.textContent = `Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}`;
            setTimeout(displayTurn, 2000);

        } else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
           
        }
        checkWinningCondition();
    }

    /* CHECK IF WINNING CONDITION IS MET */ 
    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            showCurrentScore();
            passBtn.style.display = 'none';
            rollBtn.style.display = 'none';
            gameText.style.display = 'none';
            setTimeout(displayWinner, 1000);

        } else {
            showCurrentScore();
           
        }
    }

    /* SAY WINNER NAME AND CHANGE DIE IMAGES*/ 
    function displayWinner(){
        gameText.style.display = 'flex';
        gameText.textContent  = `${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!`;

        gameText.style.fontFamily = "'Fascinate', cursive";
        const quit = document.getElementById('quit-btn')
        quit.textContent = 'Start a New Game?';
        quit.style.width = '300px';
        gameRoll.style.display = 'none';

        die[0].src = 'images/colored-cube.png';
        die[1].src = 'images/colored-cube.png';

        clappingSound.play();
    }

   /* SHOW PLAYER SCORE */ 
    function showCurrentScore(){
            player1[0].textContent = gameData.score[0]
            player2[0].textContent = gameData.score[1]
        
    }


})();