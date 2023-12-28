// function getComputerChoice uses random generator for computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return random, choices[random];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection != "Rock") {
    if (computerSelection != "Paper") {
      return "You win! Rock beats scissors.";
    } else {
      return "You lose! Paper beats rock.";
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
