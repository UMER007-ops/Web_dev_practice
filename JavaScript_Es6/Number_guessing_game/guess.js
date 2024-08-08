let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value,10);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
    if (isNaN(guess)){
        alert('please enter a valid numer');
    }else if(guess<1){
        alert('enter a number greater than 0');
    }else if(guess>100){
        alert('enter a number less than 101');
    }else{
        prevGuess.push(guess)
        if(numGuess === 9){
            displayGuess(guess)
            displayMessage(`gameover random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
};

const checkGuess = (guess) => {
    if(guess === randomNumber){
        displayMessage('You guessed it right');
        endGame();
    }else if(guess < randomNumber){
        displayMessage('number is Tooo low');
    }else if(guess > randomNumber){
        displayMessage('number is Tooo high');
    }
};

const displayMessage = (message) => {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
};

const displayGuess = (guess) => {
    userInput.value = "";
    guessSlot.innerHTML += `${ guess } `;
    numGuess++;
    remaining.innerHTML = `${ 10 - numGuess }`;
};

const endGame = () => {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
};

const newGame = () => {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 0;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
};

