let playerScore = 0;
let computerScore = 0;

const result = document.getElementById("result");
const score = document.getElementById("score");
const buttons = document
  .getElementById("playerContainer")
  .querySelectorAll("button");
const congrats = document.getElementById("congrats");
const reloadButton = document.getElementById("reload");

// generates random computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return random, choices[random];
}

// calculates the round and writes result
function playRound(human, computer) {
  if (human == computer) {
    result.innerHTML = "Draw!";
  } else if (
    (human == "scissors" && computer == "paper") ||
    (human == "paper" && computer == "rock") ||
    (human == "rock" && computer == "scissors")
  ) {
    result.innerHTML = `You win - ${human} beats ${computer}!`;
    playerScore++;
  } else {
    result.innerHTML = `You lose - ${computer} beats ${human}!`;
    computerScore++;
  }
}

// checks bo5, game over announcement, disable player buttons, reveal reload button
function gameOver() {
  if (playerScore == 5 || computerScore == 5) {
    buttons.forEach((button) => {
      button.disabled = true;
    });
    reloadButton.style.visibility = "visible";
    if (playerScore > computerScore) {
      congrats.innerHTML = "You Are The Winner!";
    } else {
      congrats.innerHTML = "Pathetic Looser!";
    }
  }
}

// reloads the game
reloadButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  score.innerHTML = "0 : 0";
  result.innerHTML = "";
  congrats.innerHTML = "";
  buttons.forEach((button) => {
    button.disabled = false;
  });
  reloadButton.style.visibility = "hidden";
});

// loop adds event listener to clicked button and writes score
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerChoice = button.id;
    let ComputerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(ComputerChoice);
    playRound(playerChoice, ComputerChoice);
    score.innerHTML = `${playerScore} : ${computerScore}`;
    gameOver();
  });
});
