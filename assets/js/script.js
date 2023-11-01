// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    // Function to attach click event listener to each button


    function buttonLoop(button) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-choice");
            runGame(playerChoice);
        });
    }

    // Loop through each button and attach the click event listener
    for (let button of buttons) {
        buttonLoop(button);
    }
});

// Function to run the game logic
function runGame(playerChoice) {
    // Generate a random choice for the computer
    let num = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (num === 1) {
        computerChoice = "rock";
    } else if (num === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }


    // Update player's and computer's images
    document
        .querySelector(".player-choice img")
        .setAttribute("src", `assets/images/${playerChoice}.png`);
    document
        .querySelector(".computer-choice img")
        .setAttribute("src", `assets/images/${computerChoice}.png`);


    checkAnswer(playerChoice, computerChoice);
}

// Function to check the winner
function checkAnswer(playerChoice, computerChoice) {
    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        setTimeout(() => {
            document.getElementById("result").textContent = "";
        }, 3000);
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
    // Display the result on the webpage
    document.getElementById("result").textContent = result;
}

// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;
// Winning score here
const winningScore = 5;

// Function to increment the player's score
function incrementPlayerScore() {
    playerScore++;
    document.getElementById("player-score").textContent =
        "Player Score: " + playerScore;
    updateScoreColor();
    checkWinner();
}

// Function to increment the computer's score
function incrementComputerScore() {
    computerScore++;
    document.getElementById("computer-score").textContent =
        "Computer Score: " + computerScore;
    updateScoreColor();
    checkWinner();
}

// Function to update the color of the scores based on the current scores
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

// Function to check if any player has reached the winning score
function checkWinner() {
    if (playerScore === winningScore) {
        displayResult("Player wins the game!");
    } else if (computerScore === winningScore) {
        displayResult("Computer wins the game!");
    }

    removeWinnerText();
}

// Function to remove the winning text from the webpage after a certain time
function removeWinnerText() {
    const resultElement = document.getElementById("result");
    setTimeout(() => {
        resultElement.textContent = "";
    }, 3000);
}

// Function to display the final result on the webpage
function displayResult(result) {
    const resultElement = document.getElementById("final-result");
    resultElement.textContent = result;
    // Inspired to implement while browsing the internet
    setTimeout(() => {
        resultElement.textContent = "";
    }, 4000);

    resetGame();
}

// Function to reset the game
function resetGame() {

    playerScore = 0;
    computerScore = 0;

    document.getElementById("player-score").textContent = "Player Score: 0";
    document.getElementById("computer-score").textContent = "Computer Score: 0";

    updateScoreColor();
}