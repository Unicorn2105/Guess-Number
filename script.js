'use strict';

let numCompare = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const textInput = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!textInput) {
    displayMessage('👺 No Number');
  }
  //When Player Wins
  else if (textInput === numCompare) {
    document.querySelector('.number').textContent = numCompare;
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess different
  } else if (textInput !== numCompare) {
    if (score == 1) {
      displayMessage('🥱 You Lost The game');
      document.querySelector('.score').textContent = 0;
    } else {
      displayMessage(textInput > numCompare ? '👆 Too High' : '👇 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  numCompare = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
