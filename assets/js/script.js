// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-choice") === "rock") {
                alert("you clicked rock");
            } else {
                let buttonChoice = this.getAttribute("data-choice");
                alert(`You clicked ${buttonChoice}`);
            }
        });
    }
});


function runGame(){

}

function checkAnswer(){

}

function incrementPlayerScore(){

}

function incrementComputerScore(){

}