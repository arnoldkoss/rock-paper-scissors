// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-choice");
            console.log("Player's choice is: " + playerChoice);
        });
    }
});





function runGame(){
    let num = Math.floor(Math.random() *3)+1;
    let computerChoice;
    if(num === 1){
        computerChoice = "Rock";
    } else if(num === 2){
        computerChoice = "Paper";
    } else(num === 3){
        computerChoice = "Scissors"
    }
    console.log("computers choise is: "+ computerChoice)
}

function checkAnswer(playerChoice, computerChoice){
     if(playerChoice === computerChoice){
         return "It's a tie!";
     } else if (
         (playerChoice === "rock" && computerChoice === "scissors") ||
         (playerChoice === "paper" && computerChoice === "rock") ||
         (playerChoice === "scissors" && computerChoice === "paper")
     ){
        incrementPlayerScore();
        return "Player wins!";
     }else{
        incrementComputerScore();
        return "Computer wins!"
     }
     
}

function incrementPlayerScore(){

}

function incrementComputerScore(){

}