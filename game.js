function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 0 : return "rock";
        case 1 : return "paper";
        case 2 : return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    LOSE = () => {
        score.textContent = "YOU LOSE";
        score.style.color = "red";
        computerScore++;
    }
    WIN =  () => {
        score.textContent = "YOU WIN";
        score.style.color = "green";
        humanScore++;
    }
    TIE =  () => score.textContent = "TIE!";;

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
}

let buttons = document.querySelectorAll("button");
buttons = Array.from(buttons);
let computerScore = 0, humanScore = 0;
score = document.querySelector(".counter");
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id, getComputerChoice()));
})
