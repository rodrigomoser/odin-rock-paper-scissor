function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
        
    switch (random){
    case 0:
        return "rock";
        break;

    case 1:
        return "paper";
        break;

    default:
        return "scissor";
        break;
    }
}

function getHumanChoice () {
    let value = prompt ("Choose Rock, Paper or Scissor?"," ");
    return value.toLowerCase();
}

function playGame() {     
    let round = 0;
    let humanScore = 0;
    let computerScore = 0;

    while (round < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound (humanSelection, computerSelection);
        ++round;
    } 
    {
        if (humanScore > computerScore) {
        console.log ("Human Score: ", humanScore);
        console.log ("Computer Score: ", computerScore);
        return console.log("You WIN!");
        }
        else if ( humanScore === computerScore) { 
        console.log ("Human Score: ", humanScore);
        console.log ("Computer Score: ", computerScore);
        return console.log("Its a TIE!");
        }
        else {
        console.log ("Human Score: ", humanScore);
        console.log ("Computer Score: ", computerScore);
        return console.log("You LOSE!");
        }
    }

    function playRound (humanChoice, computerChoice) {
        console.log("Human chose:", humanChoice);
        console.log("Computer chose:", computerChoice);
        if (humanChoice === "paper") {
            switch (computerChoice){
                case "rock":
                    console.log("You win! Paper beats Rock");
                    return ++humanScore;
                    break;
                case "scissor":
                    console.log("You lose! Scissor beats Paper");
                    return ++computerScore;
                    break;
                case "paper":
                    return console.log("It's a tie!");
                    break;}
            } else if (humanChoice === "scissor") {
                switch (computerChoice){
                case "paper":
                    console.log("You win! Scissor beats Paper");
                    return ++humanScore;
                    break;
                case "rock":
                    console.log("You lose! Rock beats Scissor");
                    return ++computerScore;
                    break;
                case "scissor":
                    return console.log("It's a tie!");
                    break;}
            } else if (humanChoice === "rock") {
                switch (computerChoice){
                case "scissor":
                    console.log("You win! Rocks beats Scissor");
                    return ++humanScore;
                    break;
                case "paper":
                    console.log("You lose! Paper beats Rock");
                    return ++computerScore;
                    break;
                case "rock":
                    return console.log("It's a tie!");
                    break;}
            } else {
                console.log("You have a typo, try again.")
                return --round;
            }
    
        }

    
}

playGame();