// Here is a list of requirements for easy reference:
// Create a simple guessing game that pushes users toward the correct answer in some iterative way. The game does not need to be practical or complicated.
// Use window object methods to gather input from the user and display information to the user.
// Use DOM manipulation to give a visual indication of the game's progress in some way.

const categoryEl = document.querySelector('#category');
const guessesEl = document.querySelector('#guesses');
const letUsedEl = document.querySelector('#letters-used');
const choices = {
  animals: ['lion', 'tiger', 'zebra', 'hippo', 'giraffe'],
  fruits: ['apple', 'banana', 'orange', 'pineapple', 'strawberry'],
  cities: ['new york', 'los angeles', 'chicago', 'houston', 'dallas'],
}
let guesses = 8;
const getWord = () => {
  const category = prompt('Choose a category: 1 for animals, 2 for fruits, 3 for cities');
  let keys = Object.keys(choices);
  categoryEl.textContent = `Your chosen category is: ${keys[category-1][0].toUpperCase() + keys[category-1].slice(1)}`;
  guessesEl.textContent = `You have ${guesses} guesses left.`;
  const word = choices[keys[category-1]][Math.floor(Math.random() * choices[keys[category-1]].length)];
  return word;
}

const createWord = () => {
  const word = getWord();
  const wordEl = document.querySelector('#word');

  for (let i = 0; i < word.length; i++) {
    const div = document.createElement('div');
    div.classList.add('word');
    const span = document.createElement('span');
    span.classList.add('none');
    span.textContent = word[i];
    div.appendChild(span);
    wordEl.appendChild(div);
  }
  return word;
}

const getGuess = () => {
  const guess = prompt('Guess a letter or the entire word (if you know it)');
  return guess.toLowerCase();
}

const checkGuess = () => {
  const guess = getGuess();
  
  let guessBool = false;
  
  wordSpans.forEach((letter) => {
    if(guess === letter.textContent){
      letter.classList.remove('none');
      guessBool = true;
    }
    else if(guess === word){
      
      wordSpans.forEach((letter) => {if(letter.classList.contains('none')) letter.classList.remove('none')});
      guessBool = true;
      setTimeout(() => alert('You won!🎉🎉'), 500);
    }
  })
  if(!guessBool){
    const span = document.createElement('span');
    span.textContent = guess;
    letUsedEl.appendChild(span);
    checkLoss();
  }
}

const areAllLettersGuessed = () => {
  return !wordSpans.some((letter) => letter.classList.contains('none'));
}



const checkWin = () => {
  checkGuess();
  setTimeout(() => {
    areAllLettersGuessed() ? alert('You won!🎉🎉') : checkWin();
  }, 1000);
  
}

const checkLoss = () => {
  guesses--;
  guessesEl.textContent = `You have ${guesses} guesses left.`;
  if(guesses === 0) alert('You lost!😭😭');
}
const word =createWord();
const wordSpans = [...document.querySelectorAll('#word span')];
let div = document.createElement('div');  // Create the span element
div.textContent = 'Letters used: ';        // Set the text content
letUsedEl.appendChild(div);                // Append the span to the parent element
setTimeout(checkWin, 1000);