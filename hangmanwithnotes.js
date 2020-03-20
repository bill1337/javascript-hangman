
//list of possible words
var secretWords = ["mario", "banjo kazooie", "dark pit", "pichu", "ganondorf", "waluigi"];

//picks one of the words at random
var chosenWord = secretWords[Math.floor(Math.random() * secretWords.length)];

//replaces letters in chosen word into "-", to be unveiled once user guesses correct letter
let printedWord = chosenWord.replace(/./g,'-' );

//how many guesses before game over
var guesses = 8;
console.log(chosenWord); 
while (true) {
  const guess = prompt(`Guess a letter, ${guesses} remaining`);
  if (!guess) break;
  const guessLowerCase = guess.toLowerCase();
  let found = false;
  
  // logic for replacing the "-" with the correct letter in the correct location
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === guessLowerCase) {
      printedWord = printedWord.slice(0, i) + guessLowerCase + printedWord.slice(i + 1);
      found = true;
    }
  }
  
  //winning conditions
  alert(printedWord);
  if (!printedWord.includes('-')) {
    alert('You Win');
    break;
  }
  
  //losing conditions
  if (!found) guesses--;
  if (guesses === 0) {
    alert('You Lose');
    break;
  }
}