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

// Play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        return `You win! ${humanChoice} beats ${computerChoice}.`
    } else {
        return `You lose! ${computerChoice} beats ${humanChoice}.`
    }

}




// Now play 5 rounds per game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        

        if (result.includes("win")) {
            humanScore++;
            
        } else if (result.includes("lose")) {
            computerScore++;
            
        }
        alert(`${result}\nScore:\nYou: ${humanScore}\nComputer: ${computerScore}`)
    }
    alert(`Final Score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
}

playGame();

