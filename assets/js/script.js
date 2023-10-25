// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
    // Get all button elements
    let buttons = document.getElementsByTagName("button");

    // Add event listeners to each button
    for (let button of buttons) {
        button.addEventListener("click", function () {
            // Get the player's choice and log it
            let playerChoice = this.getAttribute("data-choice");
            console.log("Player's choice is: " + playerChoice);
            // Run the game logic with the player's choice
            runGame(playerChoice);
        });
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
    console.log("Computer's choice is: " + computerChoice);

    // Update player's and computer's images
    document.querySelector(".player-choice img").setAttribute("src", `assets/images/${playerChoice}.png`);
    document.querySelector(".computer-choice img").setAttribute("src", `assets/images/${computerChoice}.png`);

    // Check the game result
    checkAnswer(playerChoice, computerChoice);
}

// Function to check the winner
function checkAnswer(playerChoice, computerChoice) {
    let result;
    // Compare the choices and determine the winner
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
    // Display the result on the webpage
    document.getElementById("result").textContent = result;
}

// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;  // Set the winning score here

// Function to increment the player's score
function incrementPlayerScore() {
    playerScore++;
    // Update the player's score on the webpage
    document.getElementById("player-score").textContent = "Player Score: " + playerScore;
    // Update the color of the score based on the winner
    updateScoreColor();
    // Check if a player has reached the winning score
    checkWinner();
}

// Function to increment the computer's score
function incrementComputerScore() {
    computerScore++;
    // Update the computer's score on the webpage
    document.getElementById("computer-score").textContent = "Computer Score: " + computerScore;
    // Update the color of the score based on the winner
    updateScoreColor();
    // Check if a player has reached the winning score
    checkWinner();
}

// Function to update the color of the scores based on the current scores
function updateScoreColor() {
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");
    // Change the color based on the comparison of scores
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
        // Display the final result for the player
        displayResult("Player wins the game!");
    } else if (computerScore === winningScore) {
        // Display the final result for the computer
        displayResult("Computer wins the game!");
    }
    // Remove the winning text after a certain time
    removeWinnerText();
}

// Function to remove the winning text from the webpage after a certain time
function removeWinnerText() {
    const resultElement = document.getElementById("result");
    setTimeout(() => {
        resultElement.textContent = "";
    }, 3000); // Adjust the time (in milliseconds) as needed
}

// Function to display the final result on the webpage
function displayResult(result) {
    const resultElement = document.getElementById("final-result");
    resultElement.textContent = result;
    // Remove the final result after a certain time
    setTimeout(() => {
        resultElement.textContent = "";
    }, 4000);
    // Reset the game after displaying the final result
    resetGame();
}

// Function to reset the game
function resetGame() {
    // Reset the scores to 0
    playerScore = 0;
    computerScore = 0;
    // Update the scores on the webpage
    document.getElementById("player-score").textContent = "Player Score: 0";
    document.getElementById("computer-score").textContent = "Computer Score: 0";
    // Update the color of the scores
    updateScoreColor();
}