'use strict';
//selecting element by id score--0 and 1

const p0El = document.querySelector('.player--0');
const p1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition > global var
let scores, currentScore, activeP, isRunning;

const changeP = function () {
  document.getElementById(`current--${activeP}`).textContent = 0;
  currentScore = 0;
  activeP = activeP === 0 ? 1 : 0;
  p0El.classList.toggle('player--active');
  p1El.classList.toggle('player--active');
};

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activeP = 0;
  isRunning = true;

  p0El.classList.remove('player--winner');
  p1El.classList.remove('player--winner');
  p1El.classList.remove('player--active');
  p0El.classList.add('player--active');
};
init();

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (isRunning) {
    //1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Chech dice if
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;

      document.getElementById(`current--${activeP}`).textContent = currentScore;
    } else {
      //switch to next player
      changeP();
    }
  }
});

btnHold.addEventListener('click', function () {
  //1. add current score to act p score
  if (isRunning) {
    scores[activeP] += currentScore;
    document.getElementById(`score--${activeP}`).textContent = scores[activeP];
    //2. check if p score is >= 100;
    if (scores[activeP] >= 10) {
      isRunning = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activeP}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeP}`)
        .classList.remove('player--active');
    } else {
      //switch to the next p
      changeP();
    }
  }
});

btnnNew.addEventListener('click', init);
