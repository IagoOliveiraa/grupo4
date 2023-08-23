document.addEventListener("DOMContentLoaded", function () {
  const secretNumber = Math.floor(Math.random() * 20) + 1;
  let score = 20;
  let highscore = 0;

  const message = document.querySelector(".message");
  const scoreLabel = document.querySelector(".score");
  const highscoreLabel = document.querySelector(".highscore");
  const guessInput = document.querySelector(".guess");
  const checkButton = document.querySelector(".btn.check");
  const againButton = document.querySelector(".btn.again");
  const numberDisplay = document.querySelector(".number");

  function displayMessage(msg) {
    message.textContent = msg;
  }

  function displayScore(scr) {
    scoreLabel.textContent = scr;
  }

  function displayHighscore(hs) {
    highscoreLabel.textContent = hs;
  }

  function displayNumber(num) {
    numberDisplay.textContent = num;
  }

  function resetGame() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    displayScore(score);
    guessInput.value = "";
    displayMessage("Start guessing...");
    displayNumber("?");
  }

  checkButton.addEventListener("click", function () {
    const guess = Number(guessInput.value);

    if (!guess) {
      displayMessage("No number!");
    } else if (guess === secretNumber) {
      displayMessage(" Correct!");
      displayNumber(secretNumber);

      if (score > highscore) {
        highscore = score;
        displayHighscore(highscore);
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? " Too high!" : " Too low!");
        score--;
        displayScore(score);
      } else {
        displayMessage(" You lost the game!");
        displayScore(0);
      }
    }
  });

  againButton.addEventListener("click", resetGame);

  resetGame();
});
