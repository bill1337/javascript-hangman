var secretWords = ["mario", "banjo kazooie", "dark pit", "pichu", "ganondorf", "waluigi"];
var chosenWord = secretWords[Math.floor(Math.random() * secretWords.length)];
let printedWord = chosenWord.replace(/./g,'-' );
var guesses = 8;
console.log(chosenWord); 
while (true) {
  const guess = prompt(`Guess a letter, ${guesses} remaining`);
  if (!guess) break;
  const guessLowerCase = guess.toLowerCase();
  let found = false;
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === guessLowerCase) {
      printedWord = printedWord.slice(0, i) + guessLowerCase + printedWord.slice(i + 1);
      found = true;
    }
  }
  alert(printedWord);
  if (!printedWord.includes('-')) {
    alert('You Win');
    break;
  }
  if (!found) guesses--;
  if (guesses === 0) {
    alert('You Lose');
    break;
  }
}