let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("userScore");
const computerScoreSpan = document.getElementById("computerScore");
const resultParagraph = document.getElementById("result");

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    updateScores(winner);
    displayResult(userChoice, computerChoice, winner);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "user";
    } else {
        return "computer";
    }
}

function updateScores(winner) {
    if (winner === "user") {
        userScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

function displayResult(userChoice, computerChoice, winner) {
    if (winner === "draw") {
        resultParagraph.textContent = `It's a draw! You both chose ${userChoice}.`;
    } else if (winner === "user") {
        resultParagraph.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        resultParagraph.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}