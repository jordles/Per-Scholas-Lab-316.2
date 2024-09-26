// Here is a list of requirements for easy reference:
// Create a simple guessing game that pushes users toward the correct answer in some iterative way. The game does not need to be practical or complicated.
// Use window object methods to gather input from the user and display information to the user.
// Use DOM manipulation to give a visual indication of the game's progress in some way.

const categoryEl = document.querySelector('#category');
const word = [...document.querySelectorAll('#word span')];
const choices = {
  animals: ['lion', 'tiger', 'zebra', 'hippo', 'giraffe'],
  fruits: ['apple', 'banana', 'orange', 'pineapple', 'strawberry'],
  cities: ['new york', 'los angeles', 'chicago', 'houston', 'dallas'],
}

const getWord = () => {
  const category = prompt('Choose a category: 1 for animals, 2 for fruits, 3 for cities');
  let keys = Object.keys(choices);
  categoryEl.textContent = `Your chosen category is: ${keys[category-1][0].toUpperCase() + keys[category-1].slice(1)}`;
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
}

const getGuess = () => {
  const guess = prompt('Guess a letter');
  return guess.toLowerCase();
}

const checkGuess = () => {
  const guess = getGuess();
  
  const guessEl = document.querySelector('#guesses');
  let guessBool = false;
  word.forEach((letter) => {
    if(guess === letter.textContent){
      letter.classList.remove('none');
      guessBool = true;
    }
  })
  if(!guessBool) guessEl.textContent += guess;
}

const areAllLettersGuessed = () => {
  console.log(!(word.some((letter) => letter.classList.contains('none'))))
  return !word.some((letter) => letter.classList.contains('none'));
}



const checkWin = () => {
  checkGuess();
  areAllLettersGuessed() ? alert('You won!') : checkWin();
}
createWord();
checkWin();