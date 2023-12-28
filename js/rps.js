// function getComputerChoice uses random generator for computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return random, choices[random];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection != playerSelection) {
    if (computerSelection == "Rock") {
      if (playerSelection == "Paper") {
        return "You win! Paper beats rock.";
      } else {
        return "You lose! Rock beats scissors.";
      }
    } else if (computerSelection == "Paper") {
      if (playerSelection == "Rock") {
        return "You lose! Paper beats rock.";
      } else {
        return "You win! Scissors beats paper.";
      }
    } else {
      if (playerSelection == "Paper") {
        return "You lose! Scissors beats paper.";
      } else {
        return "You win! Rock beats scissors";
      }
    }
  } else {
    return "draw";
  }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log("Computer: " + computerSelection);
console.log("Player: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));
