function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 0 : return computerChoice = "rock";
        case 1 : return computerChoice = "paper";
        case 2 : return computerChoice = "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Round : " + round + "\nChoose : Rock, Paper or Scissors").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    LOSE = () => {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    WIN =  () => {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    TIE =  () => console.log("Tie!");

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
    } else {
        console.log("Invalid Choice!");
    }
}

function playGame() {
    for (round = 1 ;round < 6; round ++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Scores : " + humanScore + " " + computerScore);
    }
}

let round, humanScore = "humanScore = " 0, computerScore = "cpmputerScore = " 0;
playGame();
