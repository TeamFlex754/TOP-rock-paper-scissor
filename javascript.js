// Get the computer choice
function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice <= 0.33) {
        return "rock";
    } else if (computerChoice <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Get the human choice
function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return humanChoice;
}

// Declare the players scores as variables
let humanScore = 0;
let computerScore = 0;

// Play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = playRound(humanSelection, computerSelection);

console.log(result);
console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`)

// Now play 5 rounds per game


