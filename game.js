function playGame()
{
    let rounds = 0;
    let humanScore = 0;
    let computerScore = 0;
    const total = 5;
    while(rounds < total){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        if (result == "You win!") humanScore++;
        if (result == "Computer wins!") computerScore++;
        console.log(`Round ${rounds + 1}: You=${humanSelection}, CPU=${computerSelection} -> ${result}`);
        rounds += 1;
    }
    if (humanScore > computerScore) {
        return console.log(`You win the game! ${humanScore}-${computerScore}`);
    }
    if (computerScore > humanScore) {
        return console.log(`Computer wins the game! ${computerScore}-${humanScore}`);
    }
    return console.log(`Game is a tie! ${humanScore}-${computerScore}`);
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

function getHumanChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const input = prompt("What's your answer? Rock : 1, Paper : 2, Scissors : 3");

  const index = Number(input) - 1;

  if (index >= 0 && index < choices.length) {
    return choices[index];
  } else {
    return "Invalid choice";
  }
}

const resultsDiv = document.querySelector('#results');
const buttons = document.querySelectorAll('#buttons button')

buttons.forEach((btn) => {
  btn.addEventListener("click" , () => {
    const playerSelection = btn.dataset.choice; // "Rock" / "Paper" / "Scissors"
    resultsDiv.textContent = `You clicked: ${playerSelection}`;
    console.log("playerSelection:", playerSelection); // keep for now
  });
});