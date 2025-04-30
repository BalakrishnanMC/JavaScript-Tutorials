let score = JSON.parse(localStorage.getItem('score'));
if(score === null) {
  score = {
    wins: 0,
    losses: 0,
    tie: 0
  }
};

const movesElement = document.querySelector('.js-moves');

const scoreCard = document.querySelector('.js-score-card');

const movesCard = document.querySelector('.js-move-card');

scoreCard.innerHTML = `Wins: ${score.wins} Lose: ${score.losses} Tie: ${score.tie}`;
function pickComputerMove(){
  let num = Math.random();
  if(num <= 1/3){
    return `rock`;
  }
  else if(num <= 2/3){
    return `paper`;
  }
  else{
    return `scissor`;
  }
}

function playGame(playerMove,computerMove){
  let result = ``;
  if(playerMove === `rock` && computerMove === `scissor` || playerMove === `paper` && computerMove === `rock` || playerMove === `scissor` && computerMove === `paper`){
    result = `You Win`;
    score.wins++;
  }
  else if(playerMove === `rock` && computerMove === `rock` || playerMove === `paper` && computerMove === `paper` || playerMove === `scissor` && computerMove === `scissor`){
    result = `Match Tie`;
    score.tie++;
  }
  else{
    result = `You Lose`;
    score.losses++;
  }
  localStorage.setItem('score',JSON.stringify(score));
  updateScoreCard();
  movesElement.innerHTML = `You
<img src="images/${playerMove}.png" class="move-icon">
<img src="images/${computerMove}.png" class="move-icon">
Computer`;
  movesCard.innerHTML = `${result}`;
}

function clearScore(){
  localStorage.removeItem('score');
  score = {
    wins: 0,
    losses: 0,
    tie: 0
  }
  updateScoreCard();
  movesElement.innerHTML = ``;
  movesCard.innerHTML = ``;
}

function updateScoreCard(){
  scoreCard.innerHTML = `Wins: ${score.wins} Lose: ${score.losses} Tie: ${score.tie}`;
}