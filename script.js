'use strict';

let random = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

//GUESS FUNCTION
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //if guess is null
  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number';

    //if guess is too high
  } else if (guess > random) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You Lost';
    }

    //if guess is too low
  } else if (guess < random) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You Lost';
    }

    //if guess is correct
  } else if (guess == random) {
    document.querySelector('.message').textContent = 'Congrats bruh';
    document.querySelector('.number').textContent = guess;
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

//AGAIN FUNCTION
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  random = Math.trunc(Math.random() * 20);

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('number').style.width = '15rem';
});
