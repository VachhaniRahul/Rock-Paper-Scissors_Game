// rock paper scissors game

const Choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

let player = 0;
let computer = 0;

function playGame(playerChoice) {

    const computerChoice = Choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);

    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE ";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }


    playerDisplay.textContent = `PLAYER : ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice.toUpperCase()}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greencolor", "redcolor");

    switch (result) {

        case "YOU WIN":
            resultDisplay.classList.add("greencolor");
            player++;
            playerScore.textContent = player;
            break;

        case "YOU LOSE":
            resultDisplay.classList.add("redcolor");
            computer++;
            computerScore.textContent = computer;
            break;

    }

}

