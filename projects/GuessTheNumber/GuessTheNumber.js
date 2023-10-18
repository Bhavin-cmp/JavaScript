let secretNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");

const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuesses = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //check validation
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number more than one");
  } else if (guess > 100) {
    alert("please enter a number less than 100");
  } else {
    previousGuesses.push(guess);
    if (numGuess === 11) {
      guessDisplay(guess);
      displayMsg(`game Over. Random number was ${secretNumber}`);
      endGame();
    } else {
      guessDisplay(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // check value is same or not
  if (guess === secretNumber) {
    displayMsg("you guest it right");
    endGame();
  } else if (guess < secretNumber) {
    displayMsg("Number is tooo low.");
  } else if (guess > secretNumber) {
    displayMsg("Number is tooo High.");
  }
}

function guessDisplay(guess) {
  // display message
  userInput.value = "";
  guessSlot.innerHTML += `${guess}   `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMsg(message) {
  // clean value, update guess number,
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}
function newGame() {
  // start Game
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    secretNumber = parseInt(Math.random() * 100 + 1);
    previousGuesses = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<span id='newGame'>start New Games</span>`;
  startOver.appendChild(p);

  playGame = false;
  newGame();
  //end Game
}
