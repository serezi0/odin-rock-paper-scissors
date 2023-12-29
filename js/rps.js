let playerScore = 0;
let computerScore = 0;
// function getComputerChoice uses random generator for computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return random, choices[random];
}
function getPlayerChoice() {
  const choice = prompt("Test").toLowerCase();
  return choice;
}
// playRound calculates the round and returns msg as a string
function playRound() {
  if (computerSelection != playerSelection) {
    if (computerSelection == "rock") {
      if (playerSelection == "paper") {
        return "You win! Paper beats rock.";
      } else {
        return "You lose! Rock beats scissors.";
      }
    } else if (computerSelection == "paper") {
      if (playerSelection == "rock") {
        return "You lose! Paper beats rock.";
      } else {
        return "You win! Scissors beats paper.";
      }
    } else {
      if (playerSelection == "paper") {
        return "You lose! Scissors beats paper.";
      } else {
        return "You win! Rock beats scissors";
      }
    }
  } else {
    return "TIES";
  }
}
// getScore calculates the score based on the string from playRound
function getScore() {
  if (playRound().search("win") > 0) {
    playerScore++;
  } else if (playRound().search("lose") > 0) {
    computerScore++;
  }
}
// This is the loop for bo5. Endgame "if-s" are sloppy, but it works.
for (i = 0; i < 5; i++) {
  var computerSelection = getComputerChoice();
  var playerSelection = getPlayerChoice();
  console.log(
    "Player: " + playerSelection + " | Computer: " + computerSelection
  );
  playRound(playerSelection, computerSelection);
  getScore();
  console.log(playRound());
  if (i == 4 && playerScore > computerScore) {
    console.log("End of game! You win!");
  } else if (i == 4 && playerScore < computerScore) {
    console.log("End of game! You lose!");
  } else if (i == 4 && playerScore == computerScore) {
    console.log("DRAW. Better luck next time!");
  }
  console.log("Player: " + playerScore + " | Computer: " + computerScore);
}
