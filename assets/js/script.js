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
const winningScore = 5;  // Set the winning score here

function incrementPlayerScore() {
    playerScore++;
    document.getElementById("player-score").textContent = "Player Score: " + playerScore;
    updateScoreColor();
    checkWinner();
}

function incrementComputerScore() {
    computerScore++;
    document.getElementById("computer-score").textContent = "Computer Score: " + computerScore;
    updateScoreColor();
    checkWinner();
}

function updateScoreColor() {
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");

    if (playerScore > computerScore) {
        playerScoreElement.style.color = "green";
        computerScoreElement.style.color = "red";
    } else if (playerScore < computerScore) {
        playerScoreElement.style.color = "red";
        computerScoreElement.style.color = "green";
    } else {
        playerScoreElement.style.color = "black";
        computerScoreElement.style.color = "black";
    }
}



function checkWinner() {
    if (playerScore === winningScore) {
        // Display player wins
        displayResult("Player wins the game!");
        
    } else if (computerScore === winningScore) {
        // Display computer wins
        displayResult("Computer wins the game!");
        
    }
    removeWinnerText();
}
function removeWinnerText() {
    const resultElement = document.getElementById("result");
    setTimeout(() => {
        resultElement.textContent = "";
    }, 3000); // Adjust the time (in milliseconds) as needed
}

function displayResult(result) {
    const resultElement = document.getElementById("final-result");
    resultElement.textContent = result;
    setTimeout(() => {
        resultElement.textContent = "";
    }, 4000);
    resetGame();
    
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = "Player Score: 0";
    document.getElementById("computer-score").textContent = "Computer Score: 0";
    updateScoreColor();
}