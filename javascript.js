let round = 0;
let humanScore = 0;
let computerScore = 0;
let ties = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
        
    switch (random){
    case 0:
        return "rock";
    case 1:
        return "paper";
    default:
        return "scissor";
    }
}

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
let humanBox = document.querySelector("#humanBox");
let computerBox = document.querySelector("#computerBox")
const humanScoreBox = document.querySelector("#humanWins")
const drawsBox = document.querySelector("#draws")
const computerScoreBox = document.querySelector("#computerWins")


rockBtn.addEventListener("click", 
    () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", 
    () => playRound("paper", getComputerChoice()));
scissorBtn.addEventListener("click", 
    () => playRound("scissor", getComputerChoice()));

function playRound (humanChoice, computerChoice) {
        console.log("Human chose:", humanChoice);
        console.log("Computer chose:", computerChoice);

        if (humanChoice === "paper") {
            switch (computerChoice){
                case "rock":
                    humanBox.textContent = "🖐️";
                    computerBox.textContent = "✊";
                    ++humanScore;
                    updateScore()
                    break;
                case "scissor":
                    humanBox.textContent = "🖐️";
                    computerBox.textContent = "✌️";
                    ++computerScore;
                    updateScore()
                    break;
                case "paper":
                    humanBox.textContent = "🖐️";
                    computerBox.textContent = "🖐️";
                    ++ties
                    updateScore()
                    break;}
            } else if (humanChoice === "scissor") {
                switch (computerChoice){
                case "paper":
                    humanBox.textContent = "✌️";
                    computerBox.textContent = "🖐️";
                    ++humanScore;
                    updateScore()
                    break;
                case "rock":
                    humanBox.textContent = "✌️";
                    computerBox.textContent = "✊";
                    ++computerScore;
                    updateScore()
                    break;
                case "scissor":
                    humanBox.textContent = "✌️";
                    computerBox.textContent = "✌️";
                    ++ties
                    updateScore()
                    break;}
            } else if (humanChoice === "rock") {
                switch (computerChoice){
                case "scissor":
                    humanBox.textContent = "✊";
                    computerBox.textContent = "✌️";
                    ++humanScore;
                    updateScore()
                    break;
                case "paper":
                    humanBox.textContent = "✊";
                    computerBox.textContent = "🖐️";
                    ++computerScore;
                    updateScore()
                    break;
                case "rock":
                    humanBox.textContent = "✊";
                    computerBox.textContent = "✊";
                    ++ties
                    updateScore()
                    break;}
            }     
        }

function updateScore(){
    humanScoreBox.textContent = humanScore;
    drawsBox.textContent = ties;
    computerScoreBox.textContent = computerScore;
    checkWinner()
}

const container = document.querySelector('.choiceContainer');
const scoreContainer = document.querySelector(".scoreContainer");
const inputContainer = document.querySelector(".inputs")

function checkWinner(){
    if (computerScore === 5 || humanScore === 5){
        container.innerHTML = '';
        scoreContainer.style.display = "none";
        inputContainer.style.display = "none";
        const resultDiv = document.createElement('div');
        const endBtn = document.createElement('button');
        endBtn.className = 'restartBtn';
        endBtn.textContent = 'Restart';
        resultDiv.className = 'endGame';
         if (computerScore === 5){
            resultDiv.innerHTML = `<h3>The Computer Wins!</h3><p>You lost, you lost to a machine!</p>`;
            container.appendChild(resultDiv);
            resultDiv.appendChild(endBtn);
            endBtn.addEventListener("click", () => restarGame())
            return;
        } else if (humanScore === 5){
            resultDiv.innerHTML = `<h3>You Win!</h3><p>Congrats! You prove human supramacy.</p>`;
            container.appendChild(resultDiv);
            resultDiv.appendChild(endBtn);
            endBtn.addEventListener("click", () => restarGame())
            return;
        }}
}

function restarGame() {
    scoreContainer.style.display = "flex";
    inputContainer.style.display = "flex";
    humanScore = 0;
    computerScore = 0;
    ties = 0;
    humanScoreBox.textContent = humanScore;
    drawsBox.textContent = ties;
    computerScoreBox.textContent = computerScore;
    container.innerHTML = '<div class="choiceBox"><h3>Human Choice</h3><p id="humanBox"></p></div><div class="choiceBox"><h3>Computer Choice</h3><p id="computerBox"></p></div>';
    humanBox = document.querySelector("#humanBox");
    computerBox = document.querySelector("#computerBox")
}


