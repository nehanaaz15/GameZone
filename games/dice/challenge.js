
// if player roll two consecutive six then he losses his global score
// Add an input field to the html where players can set the winning score 

var score,roundScore,activePlayer,gamePlaying;

init()

var lastDice;

document.querySelector('.btn-roll').addEventListener('click',function(){
		if(gamePlaying){
			// 1.Random Number
	var dice1 = Math.floor(Math.random()*6)+1
	var dice2 = Math.floor(Math.random()*6)+1

	// 2. display
	document.getElementById('dice-1').style.display = 'block'
	document.getElementById('dice-2').style.display = 'block'
	document.getElementById('dice-1').src = 'dice-' + dice1 + '.png'
	document.getElementById('dice-2').src = 'dice-' + dice2 + '.png'
	// 3. Update the score if the rolled number was not 1
	if(dice1 !==1 && dice2 !==1){
		roundScore += dice1 + dice2
		document.querySelector('#current-' + activePlayer).textContent = roundScore
	}
	else{
		nextPLayer()
	}

	// 	if(dice === 6 && lastDice === 6){
	// 		scores[activePlayer] = 0;
	// 	document.querySelector('#score-' + activePlayer).textContent = '0'
	// 	nextPLayer();
	// 	}
	// 	else if(dice !== 1){
	// 	//Add Score
	// 	roundScore += dice;
	// 	document.querySelector('#current-'+ activePlayer).textContent = roundScore

	// }
	// else{
	// 	//next player
	// 	nextPLayer()
	// }
	// 	lastDice = dice;
}
	
})

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gamePlaying){
		// add current score to global score
		scores[activePlayer] += roundScore

	// Update the user interface
	document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer]

	var input =  document.querySelector('.final-score').value;
	var winningScore;
	// Undefined , 0, null or "" are coerced to false anything else coerced to true
	if(input){
		winningScore = input;
	}
	else{
		winningScore = 100;
	}

	//check if player won the game
		if(scores[activePlayer] >= winningScore){
			document.querySelector('#name-' + activePlayer).textContent = 'Winner'
			document.getElementById('dice-1').style.display = 'none'
			document.getElementById('dice-2').style.display = 'none'
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false ;
		}
	else {
	nextPLayer()
	}
	}
})

function nextPLayer(){

		roundScore = 0;
		activePlayer === 0 ? activePlayer = 1 :activePlayer = 0
		document.getElementById('current-0').textContent = '0'
		document.getElementById('current-1').textContent = '0'
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.getElementById('dice-1').style.display = 'none'
		document.getElementById('dice-2').style.display = 'none'

}

document.querySelector('.btn-new').addEventListener('click',init)

function init(){
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
document.getElementById('dice-1').style.display = 'none';
 document.getElementById('dice-2').style.display = 'none';
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














		// document.querySelector('.player-0-panel').classList.remove('active');
		// document.querySelector('.player-0-panel').classList.add('active');
// document.querySelector('#current-'+ activePlayer).textContent = dice
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+dice+'</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);