

const categoryEl = document.querySelector('#category');
const guessesEl = document.querySelector('#guesses');
const letUsedEl = document.querySelector('#letters-used');
const choices = {
  animals: ['lion', 'tiger', 'zebra', 'hippo', 'giraffe'],
  fruits: ['apple', 'banana', 'orange', 'pineapple', 'strawberry'],
  cities: ['new york', 'los angeles', 'chicago', 'houston', 'dallas', 'beverly hills'],
}
let guesses = 8;
const getWord = () => {
  let validInput = false;
  let category;
  while(!validInput){
    category = Number(prompt('Choose a category: 1 for animals, 2 for fruits, 3 for cities'));

    if(isNaN(category)|| category < 1 || category > 3){
      alert('Invalid input! Choose a number between 1 and 3');
    }
    else validInput = true;
  }
  let keys = Object.keys(choices);
  categoryEl.textContent = `Your chosen category is: ${keys[category-1][0].toUpperCase() + keys[category-1].slice(1)}`;
  guessesEl.textContent = `You have ${guesses} guesses left.`;
  const word = choices[keys[category-1]][Math.floor(Math.random() * choices[keys[category-1]].length)];
  return word;
}

const createWord = () => {
  const word = getWord();
  const wordEl = document.querySelector('#word');

  for (const char of word) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = char;
    div.appendChild(span);
    wordEl.appendChild(div);
    if (char === ' ') continue;
    div.classList.add('word');
    span.classList.add('none');
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
  if(guess === word){
      
    wordSpans.forEach((letter) => {if(letter.classList.contains('none')) letter.classList.remove('none')});
    guessBool = true;
  }
  else{
    wordSpans.forEach((letter) => {
      if(guess === letter.textContent){
        letter.classList.remove('none');
        guessBool = true;
      }
    })
  }
  if(!guessBool){
    let usedChars = document.querySelectorAll('#letters-used > span');
    if([...usedChars].map(char => char.textContent).includes(guess)){
      alert('You already guessed that!')
    }else{
      const span = document.createElement('span');
      span.textContent = guess;
      letUsedEl.appendChild(span);
    }
    /* if(usedChars){
      console.log(usedChars)
      usedChars.forEach(char => {
        if(char.textContent === guess) {
          alert('You already guessed that!')
          checkLoss();
        }
      })
    } */
    
    checkLoss();    
  }
}

const areAllLettersGuessed = () => {
  return !wordSpans.some((letter) => letter.classList.contains('none'));
}



const checkWin = () => {
  checkGuess();
  areAllLettersGuessed() ? 
  setTimeout(() => {
    alert('You won!🎉🎉')
    confirm('Play again?') ? window.location.reload() : alert('Bye!')
  }, 1000) 
  : setTimeout(checkWin, 1000);
  
}

const checkLoss = () => {
  guesses--;
  guessesEl.textContent = `You have ${guesses} guesses left.`;
  if(guesses === 0) {
    alert('You lost!😭😭');
    confirm('Play again?') ? window.location.reload() : alert('Bye!')
  }
}
const word =createWord();
const wordSpans = [...document.querySelectorAll('#word span')];
let div = document.createElement('div');  // Create the span element
div.textContent = 'Letters used: ';        // Set the text content
letUsedEl.appendChild(div); // Append the span to the parent element
setTimeout(checkWin, 1000);