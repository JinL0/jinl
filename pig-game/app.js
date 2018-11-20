/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, activePlayer, roundScore, gamePlaying;
init(); 

//console.log(dice);

/*
- Difference between innerHtml && textcontent
 */
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-1').textContent;
//document.querySelector(".dice").style.display = 'none';
//function btn(){

//}

/*
document.querSelector(".btn-roll").addEventListener('click', function () {
    // do something
   -1. random number
   -display the result
});
document.querSelector(".btn-roll").addEventListener('click', btn);
*/
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textConetent = '0';
document.getElementById('score-1').textConetent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector(".btn-roll").addEventListener('click', function () {
    var dice = Math.floor(Math.random() * 6)  + 1;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display  = 'block';
    diceDom.src = 'dice-' + dice + ".png";
    if(dice > 1) {
        roundScore += dice;

        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
});

document.querySelector(".btn-hold").addEventListener('click', function() {
    //add Current Score to Global Score
    scores[activePlayer] += roundScore;
    //update UI
    roundScore = 0;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //Check if player win the game
    if(scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else{ nextPlayer(); }
});

function nextPlayer(){
    roundScore = 0;
    activePlayer = 1 - activePlayer;
    //activePlayer === 0 ? activerPlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').textContent = "" + scores[0];
    document.getElementById('current-1').textContent = "" + scores[1];
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
   roundScore = 0;
   scores = [0, 0];
   activePlayer = 0;
   gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}

