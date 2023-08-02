'use strict';

let random = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

// DISPLAY MESSAGE FUNCTION (enter css className , message you want to display)
let displaymsg = function (className, message) {
  document.querySelector(`.${className}`).textContent = message;
};

//GUESS FUNCTION
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //if guess is null
  if (!guess) {
    displaymsg('message', 'Please enter a number');
  } //if guess is wrong
  else if (guess != random) {
    if (score > 1) {
      displaymsg('message', guess > random ? 'too high' : 'too low');
      score--;
      displaymsg('score', score);
    } else {
      displaymsg('score', 0);

      displaymsg('message', 'you lost');
    }
  } //if guess is correct
  else if (guess == random) {
    displaymsg('message', 'Congrats bruh');
    displaymsg('number', guess);

    document.querySelector('.number').style.width = '50rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      displaymsg('highscore', highScore);
    }
  }
});

//AGAIN FUNCTION
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  random = Math.trunc(Math.random() * 20);

  displaymsg('score', score);
  displaymsg('number', '?');
  displaymsg('message', 'Start guessing ...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
