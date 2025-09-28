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


console.log(getComputerChoice());

// Get the human choice
// Declare the players scores as variables
// Play a single round
// Now play 5 rounds per game


