const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const winnerHolder = document.querySelector('#winner');
const playerScoreHolder = document.querySelector('#player-score');
const computerScoreHolder = document.querySelector('#computer-score');
const gameButtons = document.querySelector('.game-buttons');
const resetButton = document.createElement('button');

let playerScore = 0;
let computerScore = 0;

playerScoreHolder.textContent = playerScore;
computerScoreHolder.textContent = computerScore;
resetButton.textContent = 'Reset Game';

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    };
};

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        winnerHolder.textContent = 'Tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore += 1;
        playerScoreHolder.textContent = playerScore;
        winnerHolder.textContent = 'You won this round!';
        determineWinner();
    } else {
        computerScore += 1;
        computerScoreHolder.textContent = computerScore;
        winnerHolder.textContent = 'You lost this round!';
        determineWinner();
    };
};

function determineWinner () {
    if (playerScore === 5 && computerScore < 5) {
        winnerHolder.textContent = 'Congratulations! You won the game!';
        gameButtons.replaceChildren(resetButton)
    } else if (playerScore < 5 && computerScore === 5) {
        winnerHolder.textContent = 'Sorry, you lost this game.';
        gameButtons.replaceChildren(resetButton)
    };
};

function resetGame() {
    winnerHolder.textContent = `Who's going to be the winner?`;
    playerScore = 0;
    computerScore = 0;
    playerScoreHolder.textContent = 0;
    computerScoreHolder.textContent = 0;
    gameButtons.removeChild(resetButton);
    gameButtons.appendChild(rockButton);
    gameButtons.appendChild(paperButton);
    gameButtons.appendChild(scissorsButton);
}

rockButton.addEventListener('click', (e) => {
    playRound(e.target.id);
});

paperButton.addEventListener('click', (e) => {
    playRound(e.target.id);
});

scissorsButton.addEventListener('click', (e) => {
    playRound(e.target.id);
});

resetButton.addEventListener('click', (e) => {
    resetGame();
});
