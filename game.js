function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 0 : return "rock";
        case 1 : return "paper";
        case 2 : return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    function LOSE () {
        counter.textContent = "YOU LOSE";
        counter.style.color = "red";
        computerScore++;
    }
    function WIN () {
        counter.textContent = "YOU WIN";
        counter.style.color = "green";
        humanScore++;
    }
    function TIE() {
        counter.textContent = "TIE!";
        counter.style.color = "black";
    }

    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock": TIE();
                break;
            case "paper" : LOSE();
                break;
            case "scissors" : WIN();
        }
    } else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "paper" : TIE();
                break;
            case "scissors" : LOSE();
                break;
            case "rock" : WIN();
        }
    } else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "scissors" : TIE();
                break;
            case "rock" : LOSE();
                break;
            case "paper" : WIN();
        }
    }
    userScore.textContent = humanScore;
    cpuScore.textContent = computerScore;
    if (humanScore == 5 || computerScore == 5) {
        endgame(humanScore, computerScore)
    }
}

let buttons = document.querySelectorAll("button");
buttons = Array.from(buttons);
let computerScore = 0, humanScore = 0;
let counter = document.querySelector(".counter");
let cpuScore = document.querySelector(".cpuScore");
let userScore = document.querySelector(".userScore");
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id, getComputerChoice()));
})

function endgame(userScore, cpuScore) {
    buttons.forEach(button => {
        button.disabled = true;
    });
    let gameOver = document.querySelector(".game-over");
    gameOver.textContent = "GAME OVER!";
    gameOver.classList.toggle("active");
    if (cpuScore == 5) gameOver.style.backgroundColor = "red";
    else gameOver.style.backgroundColor = "green";
}