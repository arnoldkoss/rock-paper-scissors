// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-choice");
            console.log("Player's choice is: " + playerChoice);
            runGame(playerChoice);
        });
    }
});

function runGame(playerChoice) {
    let num = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (num === 1) {
        computerChoice = "rock";
    } else if (num === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("Computer's choice is: " + computerChoice);
    // Update player's image
    document.querySelector(".player-choice img").setAttribute("src", `assets/images/${playerChoice}.png`);

    // Update computer's image
    document.querySelector(".computer-choice img").setAttribute("src", `assets/images/${computerChoice}.png`);
    checkAnswer(playerChoice, computerChoice);
}

function checkAnswer(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        incrementPlayerScore();
        result = "Player wins!";
    } else {
        incrementComputerScore();
        result = "Computer wins!";
    }
    document.getElementById("result").textContent = result;
}

let playerScore = 0;
let computerScore = 0;

function incrementPlayerScore() {
    playerScore++;
    document.getElementById("player-score").textContent = "Player Score: " + playerScore;
}

function incrementComputerScore() {
    computerScore++;
    document.getElementById("computer-score").textContent = "Computer Score: " + computerScore;
}