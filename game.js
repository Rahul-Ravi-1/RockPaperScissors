let rounds = 0;
let humanScore = 0;
let computerScore = 0;
const total = 5;
const resultsDiv = document.querySelector('#results');
const buttons = document.querySelectorAll('#buttons button')
const scores = document.querySelectorAll(".score")
const playerScoreSpan = document.querySelector("#playerScore");
const computerScoreSpan = document.querySelector("#computerScore");

function renderScores() {
  playerScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
}
function endGameMessage() {
  if (humanScore === 5) return "YOU WIN THE GAME!";
  if (computerScore === 5) return "COMPUTER WINS THE GAME!";
  return "";
}

function playGame(playerSelection) {

  if (humanScore === total || computerScore === total) return;

  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  resultsDiv.textContent =
    `Round ${rounds + 1}: ${result} (You: ${playerSelection} | CPU: ${computerSelection})`;

  if (result === "You win!") humanScore++;
  if (result === "Computer wins!") computerScore++;
  renderScores();
  rounds++;

  if (humanScore === total || computerScore === total) {
    resultsDiv.textContent = endGameMessage();
    buttons.forEach((b) => (b.disabled = true));
  }
}


function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Tie!";
  }

  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You win!";
  }

  return "Computer wins!";
}

function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum < 0.33) {
    return "Rock";
  } else if (randomNum < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//Main Function 
resultsDiv.textContent = "Click something!";
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerSelection = btn.dataset.choice; // "Rock" / "Paper" / "Scissors"
    playGame(playerSelection);
  });
});
renderScores();